// @ts-nocheck
const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
// 自动排除捆绑版本中的所有node_modules
//const svgrPlugin = require("esbuild-plugin-svgr"); //import Icon from './icon.svg';
//const { sassPlugin, postcssModules } = require("esbuild-sass-plugin"); //sassPlugin({type: "lit-css"})
const { dtsPlugin } = require("esbuild-plugin-d.ts");
const cssModulesPlugin = require('esbuild-css-modules-plugin');
const sassPlugin = require("esbuild-plugin-sass"); // sassPlugin() //路径不兼容windows

const iiefTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ["./src/index.tsx"],
      entryNames: "[name]",
      outdir: "./dist/",
      bundle: true,
      //minify: true, //process.env.NODE_ENV === "production"
      platform: "browser", //"node", "browser"
      sourcemap: true, //process.env.NODE_ENV !== "production"
      external: ["react", "react-dom"],
      target: "es6",
      loader: {
        ".svg": "dataurl",
        ".png": "dataurl",
        ".jpg": "dataurl",
        ".jpeg": "dataurl",
        ".gif": "dataurl",
      },
      plugins: [
        nodeExternalsPlugin(),
        sassPlugin(),
        dtsPlugin(),
        cssModulesPlugin({
          inject: false,
          localsConvention: 'camelCaseOnly', // optional. value could be one of 'camelCaseOnly', 'camelCase', 'dashes', 'dashesOnly', default is 'camelCaseOnly'
          generateScopedName: (name, filename, css) => string, // optional. refer to: https://github.com/madyankin/postcss-modules#generating-scoped-names
          cssModulesOption: { 
            // optional, refer to: https://github.com/madyankin/postcss-modules/blob/d7cefc427c43bf35f7ebc55e7bda33b4689baf5a/index.d.ts#L27
            // this option will override others passed to postcss-modules
          },
    
          v2: true // experimental. v2 can bundle images in css, note if set `v2` to true, all other options will be ignored. and v2 only works with `bundle: true`.
        })
      ],
      inject: ["../../scripts/react-shim.js"],
    })
    .catch(() => process.exit(1));
};

const esmTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ["./src/index.tsx"],
      entryNames: "[name].esm",
      format: "esm",
      //outfile: "./dist/index.esm.js",
      outdir: "./dist/", // outdir 与 outfile 互斥, outdir 与 entryNames 成对出现，互补
      bundle: true,
      //minify: true,
      //platform: "browser", //"node", "browser"
      sourcemap: true,
      external: ["react", "react-dom"],
      target: "esnext",
      loader: {
        ".svg": "dataurl",
        ".png": "dataurl",
        ".jpg": "dataurl",
        ".jpeg": "dataurl",
        ".gif": "dataurl",
      },
      plugins: [
        nodeExternalsPlugin(),
        sassPlugin(),
        dtsPlugin(),
        cssModulesPlugin({
          inject: false,
          localsConvention: 'camelCaseOnly', // optional. value could be one of 'camelCaseOnly', 'camelCase', 'dashes', 'dashesOnly', default is 'camelCaseOnly'
          generateScopedName: (name, filename, css) => string, // optional. refer to: https://github.com/madyankin/postcss-modules#generating-scoped-names
          cssModulesOption: { 
            // optional, refer to: https://github.com/madyankin/postcss-modules/blob/d7cefc427c43bf35f7ebc55e7bda33b4689baf5a/index.d.ts#L27
            // this option will override others passed to postcss-modules
          },
    
          v2: true // experimental. v2 can bundle images in css, note if set `v2` to true, all other options will be ignored. and v2 only works with `bundle: true`.
        })
      ],
      inject: ["../../scripts/react-shim.js"],
    })
    .catch(() => process.exit(1));
};

iiefTask();
esmTask();
