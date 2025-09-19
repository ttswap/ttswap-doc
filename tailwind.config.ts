import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules/@docusaurus/**/*",
  ],
  important: '.tailwind-scope', // 提升Tailwind选择器权重
  corePlugins: {
    preflight: false // 禁用默认样式重置
  },
  plugins: [],
} satisfies Config;
