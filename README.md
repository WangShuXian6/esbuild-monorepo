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
