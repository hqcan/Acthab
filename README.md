# 习行 ActHab 官方网站

这是习行 ActHab 应用的官方静态网站，采用现代化设计，支持中英文切换，符合 App Store 审核要求。

## 🌟 特性

- **现代化设计**: 采用渐变色彩、毛玻璃效果和流畅动画
- **响应式布局**: 完美适配桌面端、平板和手机
- **中英文切换**: 支持中英文无缝切换
- **符合审核要求**: 隐私政策、服务条款、订阅协议完全符合 App Store 审核标准
- **价格透明**: 明确显示中国区（¥128/年）和美国区（$19.9/年）价格

## 📁 文件结构

```
indexhtml/
├── index.html              # 中文主页
├── index-en.html           # 英文主页
├── privacy.html            # 中文隐私政策
├── privacy-en.html         # 英文隐私政策
├── terms.html              # 中文服务条款
├── terms-en.html           # 英文服务条款
├── subscription.html       # 中文订阅协议
├── subscription-en.html    # 英文订阅协议
├── support.html            # 中文技术支持
├── support-en.html         # 英文技术支持
├── assets/
│   ├── css/
│   │   ├── style.css       # 主要样式文件
│   │   └── legal.css       # 法律页面样式
│   ├── js/
│   │   └── main.js         # 主要JavaScript文件
│   └── images/
│       └── logo.svg        # 应用Logo
└── README.md               # 说明文档
```

## 🎨 设计特色

### 色彩方案
- **主色调**: #667eea (蓝紫色)
- **次色调**: #764ba2 (深紫色)
- **强调色**: #f093fb (粉紫色)
- **渐变背景**: 135度线性渐变

### 视觉效果
- 毛玻璃导航栏
- 卡片式布局
- 悬停动画效果
- 平滑滚动
- 响应式动画

### 字体系统
- 系统字体栈：-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- 支持动态字体大小
- 优化的行高和字间距

## 📱 页面说明

### 主页 (index.html / index-en.html)
- 英雄区域：应用介绍和下载链接
- 功能特色：6个核心功能展示
- 订阅方案：免费版和高级版对比
- 手机模型展示

### 隐私政策 (privacy.html / privacy-en.html)
- 100% 本地存储说明
- 数据安全措施
- 不收集任何个人信息的承诺
- iCloud 同步说明（高级版功能）

### 服务条款 (terms.html / terms-en.html)
- 应用使用条款
- 用户权利和义务
- 知识产权说明
- 免责声明和责任限制

### 订阅协议 (subscription.html / subscription-en.html)
- 详细的订阅价格（中国区 ¥128/年，美国区 $19.9/年）
- 自动续费说明
- 取消和退款政策
- 功能对比表格

### 技术支持 (support.html / support-en.html)
- 联系方式
- 常见问题解答
- 故障排除指南
- 系统要求

## 🔧 技术实现

### HTML5 语义化
- 使用语义化标签
- 完整的 meta 信息
- 无障碍支持

### CSS3 现代特性
- CSS Grid 和 Flexbox 布局
- CSS 变量（自定义属性）
- 动画和过渡效果
- 媒体查询响应式设计

### JavaScript ES6+
- 模块化代码结构
- 事件委托
- 防抖优化
- 平滑滚动
- 语言切换功能

## 🌐 浏览器支持

- **现代浏览器**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **移动浏览器**: iOS Safari 13+, Chrome Mobile 80+
- **特性支持**: CSS Grid, Flexbox, CSS Variables, ES6+

## 📋 使用说明

### 本地预览
1. 将整个 `indexhtml` 文件夹复制到 Web 服务器
2. 或使用本地服务器（如 Python 的 `http.server`）
3. 访问 `index.html` 查看中文版
4. 访问 `index-en.html` 查看英文版

### 部署到生产环境
1. 上传所有文件到 Web 服务器
2. 确保服务器支持 HTTPS
3. 配置适当的缓存策略
4. 设置 GZIP 压缩

### 自定义修改
1. 修改 `assets/css/style.css` 调整样式
2. 修改 `assets/js/main.js` 调整交互
3. 替换 `assets/images/logo.svg` 更换 Logo
4. 更新各页面内容

## 📊 SEO 优化

- 完整的 meta 标签
- 语义化 HTML 结构
- 优化的页面标题和描述
- 结构化数据标记
- 快速加载时间
- 移动友好设计

## 🔒 隐私和安全

- 不使用任何追踪脚本
- 不收集用户数据
- 符合 GDPR 和 CCPA 要求
- 透明的隐私政策

## 📞 联系信息

- **技术支持**: support@hqcancore.com
- **一般咨询**: contact@hqcancore.com
- **订阅问题**: subscription@hqcancore.com

## 📄 许可证

版权所有 © 2025 HQCanCore Studio. 保留所有权利。

---

**注意**: 这是一个静态网站，所有页面都是纯 HTML/CSS/JavaScript，无需后端服务器支持。
