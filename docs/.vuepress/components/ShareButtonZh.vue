<template>
    <div class="share-button-container">
        <button class="share-button" :class="{
            'loading': buttonState === 'loading',
            'success': buttonState === 'success',
            'error': buttonState === 'error'
        }" @click="showModal = true" :disabled="buttonState === 'loading'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                <path
                    d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>

            <span v-if="buttonState === 'loading'" class="button-content">
                分享本页
            </span>
            <span v-else-if="buttonState === 'success'" class="button-content">
                分享本页
            </span>
            <span v-else-if="buttonState === 'error'" class="button-content">
                分享本页
            </span>
            <span v-else class="button-content">
                分享本页
            </span>
        </button>

        <!-- 地址输入模态框 -->
        <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>生成专属分享连接</h3>
                    <button class="close-button" @click="showModal = false">&times;</button>
                </div>
                <div class="modal-body">
                    <input v-model="inputAddress" type="text" class="address-input" placeholder="绑定钱包地址,生成专属分享连接(可为空)"
                        @keyup.enter="handleAddressSubmit" />
                    <p v-if="inputError" class="error-message">{{ inputError }}</p>
                </div>
                <div class="modal-footer">
                    <button class="cancel-button" @click="showModal = false">取消</button>
                    <button class="submit-button" @click="handleAddressSubmit">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShareButton",
    data() {
        return {
            savedReferAddress: '',
            savedPath: '',
            buttonState: '', // 'loading', 'success', 'error', ''
            showModal: false,
            inputAddress: '',
            inputError: ''
        }
    },
    mounted() {
        this.checkSavedData()
        this.inputAddress = this.savedReferAddress
    },
    methods: {
        async generateShareLink(savedReferAddress, currentPath) {
            // 创建一个超时Promise
            this.buttonState = 'loading'
            const timeout = new Promise((_, reject) => {
                setTimeout(() => {
                    // reject(new Error('请求超时'));
                }, 2000); // 2秒超时
            });
            try {
                // 使用 Promise.race 竞争超时和请求
                const response = await Promise.race([
                    fetch('/api/generate-short-link', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            savedReferAddress,
                            currentPath
                        })
                    }),
                    timeout
                ]);
                
                if (!response.ok) {
                    return ""
                }
                
                const data = await response.json();
                this.buttonState = 'success'
                return data.shareLink;
            } catch (error) {
                return ""
            }
        },
        async handleAddressSubmit() {
            const shareAddress = this.inputAddress.trim()
            
            // 只有当输入不为空且格式不正确时才显示错误
            if (shareAddress && !/^0x[a-fA-F0-9]{40}$/.test(shareAddress)) {
                this.inputError = '请输入有效的钱包地址'
                return
            }

            this.inputError = ''
            this.showModal = false

            // 如果地址为空，直接使用通用链接
            if (!shareAddress) {
                const shareLink = `${window.location.origin}`
                await navigator.clipboard.writeText(shareLink)
                this.buttonState = 'success'
                setTimeout(() => {
                    this.buttonState = ''
                }, 5000)
                return
            } else {
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

                    if(shareLink){
                        await navigator.clipboard.writeText(shareLink);
                    }else{
                        const shareLink = `${window.location.origin}`+currentPath;
                        navigator.clipboard.writeText(shareLink);
                    }
                    
                    // 设置成功状态
                    this.buttonState = 'success'
                    setTimeout(() => {
                        this.buttonState = ''
                    }, 5000)
                } catch (error) {
                    // 设置错误状态
                    setTimeout(() => {
                        this.buttonState = ''
                    }, 5000)

                    const shareLink = `${window.location.origin}`
                    console.log("shareLink22",shareLink);
                    navigator.clipboard.writeText(shareLink);
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

        }
    },
}

</script>



<style scoped>
.share-button-container {
    text-align: right;
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

/* Modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.modal-header h3 {
    margin: 0;
    color: #333;
}

.close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 0;
}

.modal-body {
    margin-bottom: 20px;
}

.address-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
}

.address-input:focus {
    outline: none;
    border-color: #4CAF50;
}

.error-message {
    color: #f44336;
    margin: 5px 0 0;
    font-size: 14px;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.cancel-button,
.submit-button {
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    border: none;
}

.cancel-button {
    background-color: #f5f5f5;
    color: #333;
}

.submit-button {
    background-color: #4CAF50;
    color: white;
}

.cancel-button:hover {
    background-color: #e0e0e0;
}

.submit-button:hover {
    background-color: #45a049;
}
</style>