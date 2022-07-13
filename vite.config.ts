import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue'

const path = require("path")

// vite的配置文件,
export default defineConfig({
    resolve: {
        alias: {
            // 配置目录别名
            "@": path.resolve(__dirname, './src'),
        },
    },
    // 需要使用的插件
    plugins: [
        vue()
    ],
    // 开发或生产环境服务公共基础路径
    base: './',
    // 静态资源文件夹
    publicDir: 'public',
    // 设置network服务
    server: {
        host: true,
        port: 3000
    }
})