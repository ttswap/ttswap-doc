import React, { useState, useEffect } from 'react';

export function FromCookie() {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    useEffect(() => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('walletAddress=')) {
                const walletAddress = cookie.substring('walletAddress='.length)
            }
        }
    })
}

export function getUsernameFromCookie() {
    if (typeof document === 'undefined') return '';
    let name: any = document.cookie.match(new RegExp(`(^| )username=([^;]+)`));
    name = name ? decodeURIComponent(name[2]) : "";
    return name;
};
export function getCurrentUrlFromCookie() {
    if (typeof document === 'undefined') return '';
    const currentUrl = window.location.href;
    let url: any = document.cookie.match(new RegExp(`(^| )${currentUrl}=([^;]+)`));
    url = url ? decodeURIComponent(url[2]) : "";
    return url;
};


// 查找navbar中的Launch App按钮并更新href
export const updateLaunchAppHref = (name: any) => {
    const launchAppButton = document.querySelector('.navbar-wallet-button');
    // console.log("launchAppButton:", launchAppButton)
    if (launchAppButton) {
        const referralCode = name;
        if (referralCode) {
            const originalHref = 'https://app.ttswap.io';
            (launchAppButton as HTMLAnchorElement).href = `${originalHref}?${referralCode}`;
        }
    }
    // console.log("launchAppButton:", launchAppButton)
};