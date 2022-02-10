// @ts-nocheck

// 不支持在样式中使用背景图片 废弃

const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
// 自动排除捆绑版本中的所有node_modules
const svgrPlugin = require("esbuild-plugin-svgr"); //import Icon from './icon.svg';
const { sassPlugin, postcssModules } = require("esbuild-sass-plugin"); //sassPlugin({type: "lit-css"})
const { dtsPlugin } = require("esbuild-plugin-d.ts");

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
        sassPlugin({
          transform: postcssModules({
            localsConvention: "camelCaseOnly",
          }),
        }),
        dtsPlugin()
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
        sassPlugin({
          transform: postcssModules({
            localsConvention: "camelCaseOnly",
          }),
        }),
        dtsPlugin()
      ],
      inject: ["../../scripts/react-shim.js"],
    })
    .catch(() => process.exit(1));
};

iiefTask();
esmTask();
