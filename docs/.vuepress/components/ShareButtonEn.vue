<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { usePage, useRoute } from 'vuepress/client';

// const page = usePage();
// const route = useRoute();
const showModal = ref(false);
const username = ref('');
const shortUrl = ref('');
const error = ref('');

// 从 cookie 获取用户名
const getUsernameFromCookie = () => {
    if (typeof document === 'undefined') return '';
    let name: any = document.cookie.match(new RegExp(`(^| )username=([^;]+)`));
    name = name ? decodeURIComponent(name[2]) : "";
    const currentUrl = window.location.href;
    let url: any = document.cookie.match(new RegExp(`(^| )${currentUrl}=([^;]+)`));
    url = url ? decodeURIComponent(url[2]) : "";
    console.log("cookie-name:", name, "--url:", url)
    username.value = name;
    shortUrl.value = url;
    // return match ? decodeURIComponent(match[1]) : '';
};

function isValidETHAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// 生成短链接
const generateShortUrl = async () => {
    if (!username.value.trim()) {
        error.value = 'Please input your wallet address';
        return;
    }
    // console.log("111",isValidETHAddress(username.value))
    // return;
    if (!isValidETHAddress(username.value)) {
        error.value = 'Please input the correct wallet address';
        return;
    }

    try {
        const currentUrl = window.location.href;
        const response = await fetch('/api/generate-short-link', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                originalUrl: currentUrl,
                username: username.value
            })
        });

        const data = await response.json();
        if (response.ok) {
            console.log("----", data)
            shortUrl.value = data.shortUrl;
            // 保存用户名到 cookie (30 天有效期)
            document.cookie = `username=${encodeURIComponent(username.value)}; max-age=${300 * 24 * 60 * 60}; path=/`;
            document.cookie = `${currentUrl}=${encodeURIComponent(shortUrl.value)}; max-age=${300 * 24 * 60 * 60}; path=/`;
        } else {
            throw new Error(data.error || 'Generation failed');
        }
    } catch (err: any) {
        error.value = err.message || 'request failure';
    }
};

// 复制短链接
const copyToClipboard = () => {
  const textarea = document.createElement('textarea');
  textarea.value = shortUrl.value;
  textarea.style.position = 'fixed';  // 避免页面滚动
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    alert('Link copied!');
  } catch (err) {
    console.error('Downgrade replication failed:', err);
  } finally {
    document.body.removeChild(textarea);
  }
  showModal.value = false;
};

onMounted(() => {
    // 组件挂载时从 cookie 加载用户名
    // username.value = 
    getUsernameFromCookie();
});
</script>

<template>
    <div class="share-container">
        <button class="share-btn" @click="showModal = true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                <path
                    d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>
            Share
        </button>

        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <span class="close" @click="showModal = false">&times;</span>

                <div v-if="!shortUrl">
                    <h3>Create link</h3>
                    <input v-model="username" placeholder="Input user name" class="input-field" />
                    <p class="error">{{ error }}</p>
                    <button @click="generateShortUrl" class="generate-btn">
                        Create link
                    </button>
                </div>

                <div v-else>
                    <h3>Link has been created</h3>
                    <p class="short-url">{{ shortUrl }}</p>
                    <button @click="copyToClipboard" class="copy-btn">
                        Copy link
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.share-container {
    margin: 2rem 0;
    display: flex;
    justify-content: right;
}

.share-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #eee;
    color: rgb(10, 10, 10);
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
}

.share-btn:hover {
    background: #ddd;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 25px;
    border-radius: 8px;
    width: 90%;
    max-width: 450px;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    cursor: pointer;
    color: #999;
}

.close:hover {
    color: #333;
}

.input-field {
    width: 100%;
    padding: 12px;
    margin: 15px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.generate-btn,
.copy-btn {
    background: #eee;
    color: rgb(0, 0, 0);
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    transition: background 0.2s;
}

.generate-btn:hover,
.copy-btn:hover {
    background: #ddd;
}

.short-url {
    word-break: break-all;
    background: #f8f8f8;
    padding: 15px;
    border-radius: 4px;
    font-size: 0.95rem;
    border: 1px solid #eee;
    margin: 15px 0;
}

.error {
    color: #e53935;
    font-size: 0.9em;
    margin-top: -10px;
    margin-bottom: 10px;
}
</style>