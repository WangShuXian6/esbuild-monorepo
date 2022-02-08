// @ts-nocheck
//@ts-nocheck
const { realpathSync, readFileSync, writeFileSync, renameSync } = require('fs')
const esbuild = require('esbuild')
//const { basename } = require("path");
const path = require('path')

const { spawnSync } = require('child_process')

const { nodeExternalsPlugin } = require('esbuild-node-externals')
// 自动排除捆绑版本中的所有node_modules
const { dtsPlugin } = require('esbuild-plugin-d.ts')

//@ts-ignore
//const  basePath: `${__dirname}/..`,

const iiefTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ['./src/index.ts'],
      entryNames: '[name]',
      //outfile: "./dist/index.js",
      outdir: './dist/', // outdir 与 outfile 互斥, outdir 与 entryNames 成对出现，互补
      bundle: true,
      minify: true, //process.env.NODE_ENV === "production"
      platform: 'browser', //"node", "browser"
      sourcemap: true, //process.env.NODE_ENV !== "production"
      target: 'es6',
      plugins: [nodeExternalsPlugin(), dtsPlugin()]
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
      entryPoints: ['./src/index.ts'],
      format: 'esm',
      //outfile: "./dist/index.esm.js",
      bundle: true,
      minify: true,
      //platform: "browser", //"node", "browser"
      sourcemap: true,
      target: 'esnext',
      plugins: [nodeExternalsPlugin(), dtsPlugin()]
    })
    .catch(() => process.exit(1))
}

const cjsTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ['./src/index.ts'],
      //outfile: "./dist/index.cjs.js",
      entryNames: '[name].cjs',
      outdir: './dist/',
      bundle: true,
      minify: true,
      platform: 'node', //"node", "browser"
      sourcemap: true,
      format: 'cjs',
      target: ['esnext', 'node12.22.0'],
      plugins: [nodeExternalsPlugin(), dtsPlugin()]
    })
    .catch(() => process.exit(1))
}

//iiefTask();
esmTask()
cjsTask()
