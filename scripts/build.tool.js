// @ts-nocheck
const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')
// 自动排除捆绑版本中的所有node_modules
const svgrPlugin = require('esbuild-plugin-svgr') //import Icon from './icon.svg';
const { sassPlugin, postcssModules } = require('esbuild-sass-plugin') //sassPlugin({type: "lit-css"})
const { dtsPlugin } = require('esbuild-plugin-d.ts')

const iiefTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ['./src/index.ts'],
      entryNames: '[name]',
      outdir: './dist/',
      bundle: true,
      // minify: true, //process.env.NODE_ENV === "production"
      platform: 'browser', //"node", "browser"
      sourcemap: true, //process.env.NODE_ENV !== "production"
      external: ['react', 'react-dom'],
      target: 'es6',
      loader: {},
      plugins: [nodeExternalsPlugin(), dtsPlugin()],
      inject: ['../../scripts/react-shim.js']
    })
    .catch(() => process.exit(1))
}

const esmTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ['./src/index.ts'],
      entryNames: '[name].esm',
      outdir: './dist/', // outdir 与 outfile 互斥, outdir 与 entryNames 成对出现，互补
      format: 'esm',
      //outfile: "./dist/index.esm.js",

      bundle: true,
      // minify: true,
      //platform: "browser", //"node", "browser"
      sourcemap: true,
      external: ['react', 'react-dom'],
      target: 'esnext',
      loader: {},
      plugins: [nodeExternalsPlugin(), dtsPlugin()],
      inject: ['../../scripts/react-shim.js']
    })
    .catch(() => process.exit(1))
}

const cjsTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ['./src/index.ts'],
      entryNames: '[name].cjs',
      outdir: './dist/', // outdir 与 outfile 互斥, outdir 与 entryNames 成对出现，互补

      format: 'cjs',
      //outfile: "./dist/index.esm.js",
      bundle: true,
      //minify: true,
      platform: 'node', //"node", "browser"
      sourcemap: true,
      format: 'cjs',
      target: ['esnext', 'node12.22.0'],
      loader: {},
      plugins: [nodeExternalsPlugin(), dtsPlugin()],
      inject: ['../../scripts/react-shim.js']
    })
    .catch(() => process.exit(1))
}

iiefTask()
esmTask()
cjsTask()
