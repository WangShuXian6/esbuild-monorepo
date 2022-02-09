// @ts-nocheck
const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')
// 自动排除捆绑版本中的所有node_modules
const svgrPlugin = require('esbuild-plugin-svgr') //import Icon from './icon.svg';
const { dtsPlugin } = require('esbuild-plugin-d.ts')

//const sassPlugin = require('esbuild-plugin-sass')
const { sassPlugin, postcssModules } = require('esbuild-sass-plugin') //sassPlugin({type: "lit-css"})

esbuild
  .build({
    entryPoints: ['./src/index.tsx'],
    entryNames: '[name]',
    outdir: './dist',
   // bundle: false,
    //minify: false,
    target: ['esnext'],
    plugins: [
      nodeExternalsPlugin(),
      sassPlugin()
    ],
    tsconfig: 'tsconfig.production.json'
  })
  .catch((e) => console.error(e.message))
