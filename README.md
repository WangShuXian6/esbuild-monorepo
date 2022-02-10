# esbuild-monorepo

> 使用 yarn 原生支持 monorepo，不依赖第三方库
> 使用 esbuild
>支持 ts,tsx,scss,css
>支持 发布到 npm 仓库
>支持发布 node 库
>支持发布 js 库
>支持发布 ui 库, 包括 react ui 组件
>Use yarn to support monorepo natively, without relying on third-party libraries
>Use esbuild
>support ts,tsx,scss,css
>Support for publishing to npm repositories
>Support for publishing node libraries
>Support for publishing js libraries
>Support for publishing ui libraries, including react ui components
>子包工具依赖

```bash
yarn  add @types/node @types/react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged postcss-scss prettier stylelint stylelint-config-prettier stylelint-config-rational-order stylelint-config-standard stylelint-prettier -D
```

## 使用

### 安装依赖

```bash
yarn
```

### 打包

```bash
yarn build
```

### 使用 storybook 预览全部组件包

```bash
yarn storybook
```

## 发布包

```bash
# changeset 更新文件
yarn cadd

# changeset 更新各包版本 输入新的版本号
yarn version

# 发布至仓库
yarn release
```

## 在第三方项目中使用包

>项目更目录添加文件 `.npmrc`

```npmrc
; 为作用域包设置新的注册表
@ocxxx:registry=http://nexus.xxx.com/repository/npm-local/
@xxx:registry=http://nexus.xxx.com/repository/npm-local/
```

>安装

```bash
yarn add @xxx/ui
```

***

## npm

### 配置publish帐户

>加密用户名+密码获取auth

```bash
echo -n 'admin:admin123' | openssl base64
```

>为 `.npmrc` 配置加密后的密码

```bash
echo -n 'Kele9922' | openssl base64
```

>编辑.npmrc

```npmrc
registry=http://nexus.xxx.com/repository/npm-local/   // npm组
email=demo@demo.com // 配置的邮箱，必填
always-auth=true
_auth="ZGV2xxxxxdasd" // base64加密的用户名+密码
```

## ignore

```ts
            // @ts-ignore
            // eslint-disable-next-line no-undef
```


## css 与 cssModule 无法混用，因为必须只能一种生效
引入css时，则module不生效，
引入module时，则没有css文件用以引入

## 单包lint
```json
  "lint-staged": {
    "src/**/*.{html,css,scss,less}": [
      "stylelint 'src/**/*.{html,css,scss,less}' --fix",
      "prettier --write"
    ],
    "src/**/*.{ts,tsx}": [
      "eslint 'src/**/*.{ts,tsx}'  --fix",
      "prettier --parser=typescript --write"
    ],
    "src/**/*.{js,jsx}": [
      "eslint 'src/**/*.{js,jsx}'  --fix",
      "prettier --write"
    ]
  },
```

## monorepo lint
```json
"scripts": {
    "lint": "lint-staged"
  },
"lint-staged": {
    "src/**/*.{html,css,scss,less}": [
      "stylelint 'packages/comA/src/**/*.{html,css,scss,less}' --fix",
      "stylelint 'packages/comB/src/**/*.{html,css,scss,less}' --fix",
      "stylelint 'packages/ui/src/**/*.{html,css,scss,less}' --fix",
      "stylelint 'packages/uiCss/src/**/*.{html,css,scss,less}' --fix",
      "stylelint 'packages/uiCssModule/src/**/*.{html,css,scss,less}' --fix",
      "prettier --write"
    ],
    "src/**/*.{ts,tsx}": [
      "eslint 'packages/comA/src/**/*.{ts,tsx}'  --fix",
      "eslint 'packages/comB/src/**/*.{ts,tsx}'  --fix",
      "eslint 'packages/ui/src/**/*.{ts,tsx}'  --fix",
      "eslint 'packages/uiCss/src/**/*.{ts,tsx}'  --fix",
      "eslint 'packages/uiCssModule/src/**/*.{ts,tsx}'  --fix",
      "prettier --parser=typescript --write"
    ],
    "src/**/*.{js,jsx}": [
      "eslint 'packages/comA/src/**/*.{js,jsx}'  --fix",
      "eslint 'packages/comB/src/**/*.{js,jsx}'  --fix",
      "eslint 'packages/ui/src/**/*.{js,jsx}'  --fix",
      "eslint 'packages/uiCss/src/**/*.{js,jsx}'  --fix",
      "eslint 'packages/uiCssModule/src/**/*.{js,jsx}'  --fix",
      "prettier --write"
    ]
  },
```
<div className="subheading">组件需引入依赖包相关样式文件</div>

>例如 @hrbbcf/business 包 中的 Ocr 组件  依赖 @hrbbcf/base 包的 Header 组件，需要在 Ocr 组件中引入 base 包的样式文件 

>默认已在 @hrbbcf/business 全局导入依赖的样式文件，但 storybook 不会引用全局包，会导致组件丢失样式

>故需要在 Ocr 组件  `Ocr.tsx` 中再次引入样式 

```tsx
import '@hrbbcf/business/dist/index.css'
```
