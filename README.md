# 🎨 Frontend Playground

一个精美的动画效果展示平台，基于 React + TypeScript + Tailwind CSS + Framer Motion 构建。

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF00AA?logo=framer)](https://www.framer.com/motion/)

🔗 **在线预览**: https://yaoyao021123.github.io/frontend_playground/

---

## ✨ 特性

- 🎭 **12+ 精美动画效果** - 涵盖入场、交互、加载、文字和持续动画
- 🖱️ **鼠标交互效果** - 跟随鼠标、磁力吸引、3D 倾斜等
- 📝 **代码一键复制** - 查看并复制任何效果的源代码
- 🔄 **即时重播** - 点击按钮重新播放动画
- 🏷️ **分类筛选** - 按类别快速查找效果
- 📱 **响应式设计** - 完美适配各种屏幕尺寸

---

## 🎬 效果展示

### 入场动画 (Entrance)
| 效果 | 描述 |
|------|------|
| **Fade In Scale** | 平滑的透明度和缩放过渡 |
| **Stagger Container** | 多元素交错顺序动画 |

### 交互效果 (Interaction)
| 效果 | 描述 |
|------|------|
| **Spring Bounce** | 物理弹簧动画，带悬停和点击交互 |
| **Text Follow Mouse** | 文字跟随鼠标移动，带弹簧物理效果 |
| **Text Magnetic** | 字母像磁铁一样被鼠标吸引 |
| **Text 3D Tilt** | 3D 透视倾斜，随鼠标位置变化 |

### 文字效果 (Text)
| 效果 | 描述 |
|------|------|
| **Text Reveal** | 逐字符显示，带渐变效果 |
| **Text Scramble** | Matrix 风格的文字解码效果 |
| **Text Wave** | 字母波浪动画，带颜色过渡 |
| **Gradient Flow** | 渐变在文字上流动的效果 |

### 加载效果 (Loading)
| 效果 | 描述 |
|------|------|
| **Loading Spinner** | 多层旋转加载器，不同速度 |

### 持续动画 (Continuous)
| 效果 | 描述 |
|------|------|
| **Morphing Shape** | 形状变换，缩放、旋转和圆角变化 |

---

## 🚀 快速开始

### 在线使用
直接访问：https://yaoyao021123.github.io/frontend_playground/

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/YaoYao021123/frontend_playground.git

# 进入目录
cd frontend_playground

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

应用将在 http://localhost:5173 运行

---

## 📁 项目结构

```
frontend-playground/
├── .agent/                    # Skill 文档系统
│   ├── SKILL.md              # 主 Skill 文档
│   └── skills/               # 子 Skills
├── src/
│   ├── components/
│   │   ├── UI/
│   │   │   └── EffectCard.tsx    # 效果卡片组件
│   │   └── Effects/              # 动画效果组件
│   │       ├── FadeInScale.tsx
│   │       ├── TextFollowMouse.tsx
│   │       ├── TextMagnetic.tsx
│   │       └── ...
│   ├── data/
│   │   └── registry.ts           # 效果注册表
│   └── App.tsx
├── package.json
└── README.md
```

---

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **构建**: Vite
- **部署**: GitHub Pages

---

## 📝 添加新效果

想要添加自己的动画效果？只需三步：

### 1. 创建组件

```tsx
// src/components/Effects/MyEffect.tsx
import { motion } from 'framer-motion';

export const MyEffect = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 bg-blue-500 rounded-xl"
      />
    </div>
  );
};

export const MyEffectCode = `...源码字符串...`;
```

### 2. 导出组件

```typescript
// src/components/Effects/index.ts
export { MyEffect, MyEffectCode } from './MyEffect';
```

### 3. 注册效果

```typescript
// src/data/registry.ts
{
  id: 'my-effect',
  title: 'My Effect',
  description: '效果描述',
  category: 'entrance', // entrance | interaction | loading | text | continuous
  component: MyEffect,
  code: MyEffectCode,
}
```

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-effect`)
3. 提交更改 (`git commit -m 'Add amazing effect'`)
4. 推送分支 (`git push origin feature/amazing-effect`)
5. 创建 Pull Request

---

## 📄 许可

[MIT](LICENSE) © YaoYao

---

<div align="center">

Made with ❤️ using React + Framer Motion

</div>
