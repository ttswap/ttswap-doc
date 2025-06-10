// 创建并添加按钮到页面
function createWalletButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.style.textAlign = 'center';
    buttonContainer.style.margin = '20px 0';
    
    const button = document.createElement('button');
    button.textContent = '绑定钱包地址';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    
    button.onclick = showWalletInput;
    
    buttonContainer.appendChild(button);
    
    // 将按钮添加到文档的第一个标题之前
    const firstHeading = document.querySelector('h1');
    if (firstHeading) {
        firstHeading.parentNode.insertBefore(buttonContainer, firstHeading);
    }
}

function showWalletInput() {
    const walletAddress = prompt("请输入您的钱包地址：");
    if (walletAddress) {
        // 验证钱包地址格式（简单验证，实际应用中需要更严格的验证）
        if (/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
            // 设置cookie，有效期30天
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 30);
            document.cookie = `walletAddress=${walletAddress}; expires=${expiryDate.toUTCString()}; path=/`;
            alert("钱包地址保存成功！");
        } else {
            alert("请输入有效的以太坊钱包地址！");
        }
    }
}

// 页面加载时检查是否已有保存的钱包地址
function checkSavedWallet() {
    const cookies = document.cookie.split(';');
    for(let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if(name === 'walletAddress') {
            console.log('已保存的钱包地址:', value);
            break;
        }
    }
}

// 当文档加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWallet);
} else {
    initializeWallet();
}

function initializeWallet() {
    createWalletButton();
    checkSavedWallet();
} 