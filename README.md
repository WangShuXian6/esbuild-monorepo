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