<template>
    <div class="share-button-container">
        <button 
            class="share-button" 
            :class="{
                'loading': buttonState === 'loading',
                'success': buttonState === 'success',
                'error': buttonState === 'error'
            }"
            @click="showShareInput"
            :disabled="buttonState === 'loading'"
        >
            <span v-if="buttonState === 'loading'" class="button-content">
                <span class="loading-spinner"></span>
                生成中...
            </span>
            <span v-else-if="buttonState === 'success'" class="button-content">
                <span class="success-icon">✓</span>
                专属链接生成成功
            </span>
            <span v-else-if="buttonState === 'error'" class="button-content">
                <span class="error-icon">✕</span>
                专属链接生成失败,已拷贝通用链接
            </span>
            <span v-else class="button-content">
                {{ savedReferAddress ? '修改钱包地址' : '绑定钱包地址' }}
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ShareButton',
    data() {
        return {
            savedReferAddress: '',
            savedPath: '',
            buttonState: '' // 'loading', 'success', 'error', ''
        }
    },
    mounted() {
        this.checkSavedData()
    },
    methods: {
        async generateShareLink(walletAddress, currentPath) {
            // 创建一个超时Promise
            this.buttonState = 'loading'
            const timeout = new Promise((_, reject) => {
                setTimeout(() => {
                    reject(new Error('请求超时'));
                }, 2000); // 2秒超时
            });
            try {
                // 使用 Promise.race 竞争超时和请求
                const response = await Promise.race([
                    fetch('/api/generate-share-link', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            walletAddress,
                            currentPath
                        })
                    }),
                    timeout
                ]);
                
                if (!response.ok) {
                    this.buttonState = 'error'
                    throw new Error('生成分享链接失败');
                }
                
                const data = await response.json();
                this.buttonState = 'success'
                return data.shareLink;
            } catch (error) {
                console.error('生成分享链接出错:', error);
                if (error.message === '请求超时') {
                    throw new Error('服务器响应超时，请稍后重试');
                }
                throw error;
            }
        },
        async showShareInput() {
            this.checkSavedData()
            const shareAddress = prompt("生成专属链接,需输入你的钱包地址：", this.savedReferAddress)
            if (shareAddress) {
                // 验证钱包地址格式
                if (/^0x[a-fA-F0-9]{40}$/.test(shareAddress)) {
                    // 获取当前路径
                    const currentPath = window.location.pathname
                    // 设置cookie，有效期30天
                    const expiryDate = new Date()
                    expiryDate.setDate(expiryDate.getDate() + 30)
                    this.savedReferAddress = shareAddress
                    this.setCookie('shareAddress', shareAddress, expiryDate)
                    
                    // 设置加载状态
                    this.buttonState = 'loading'
                    
                    try {
                        // 调用服务器接口生成分享链接
                        const shareLink = await this.generateShareLink(shareAddress, currentPath);
                        await navigator.clipboard.writeText(shareLink);
                        
                        // 设置成功状态
                        this.buttonState = 'success'
                        setTimeout(() => {
                            this.buttonState = ''
                        }, 5000)
                        
                        alert("已拷贝专属分享链接！");
                    } catch (error) {
                        // 设置错误状态
                        this.buttonState = 'error'
                        setTimeout(() => {
                            this.buttonState = ''
                        }, 5000)
                        
                        const shareLink = `${window.location.origin}?0x`
                        navigator.clipboard.writeText(shareLink).then(() => {
                            alert(error.message === '请求超时' ? 
                                "服务器响应超时，已拷贝通用分享链接" : 
                                "生成专属链接失败，已拷贝通用分享链接")
                        }).catch(err => {
                            console.error('创建失败:', err)
                        })
                    }
                } else {
                    // 设置错误状态
                    this.buttonState = 'error'
                    setTimeout(() => {
                        this.buttonState = ''
                    }, 5000)
                    
                    const shareLink = `${window.location.origin}?0x`
                    navigator.clipboard.writeText(shareLink).then(() => {
                        alert("钱包地址无效,创建的专属分享链接失败,已拷贝通用分享链接")
                    }).catch(err => {
                        console.error('创建失败:', err)
                    })
                }
            }
        },
        setCookie(name, value, expiryDate) {
            document.cookie = `${name}=${value}; expires=${expiryDate.toUTCString()}; path=/`
        },
        getCookie(name) {
            const cookies = document.cookie.split(';')
            for (let cookie of cookies) {
                const [cookieName, cookieValue] = cookie.trim().split('=')
                if (cookieName === name) {
                    return cookieValue
                }
            }
            return ''
        },
        checkSavedData() {
            this.savedReferAddress = this.getCookie('shareAddress')
            if (this.savedReferAddress) {
                console.log('已保存的钱包地址:', this.savedReferAddress)
            }
        }
    }
}
</script>

<style scoped>
.share-button-container {
    text-align: left;
    margin: 20px 0;
}
.share-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    min-width: 120px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.share-button:hover:not(:disabled) {
    background-color: #45a049;
}
.share-button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
}
.button-content {
    display: flex;
    align-items: center;
    gap: 8px;
}
/* Loading state */
.share-button.loading {
    background-color: #2196F3;
}
.loading-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
/* Success state */
.share-button.success {
    background-color: #4CAF50;
}
.success-icon {
    font-size: 18px;
}
/* Error state */
.share-button.error {
    background-color: #f44336;
}
.error-icon {
    font-size: 18px;
}
</style>