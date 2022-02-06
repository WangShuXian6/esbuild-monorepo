// @ts-nocheck
const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
// 自动排除捆绑版本中的所有node_modules
const autoprefixer = require("autoprefixer");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
//const sassPlugin = require("esbuild-plugin-sass"); // sassPlugin()
const cssModulesPlugin = require("esbuild-css-modules-plugin");
const { lessLoader } = require("esbuild-plugin-less");
const svgrPlugin = require("esbuild-plugin-svgr"); //import Icon from './icon.svg';
const { sassPlugin, postcssModules } = require("esbuild-sass-plugin");//sassPlugin({type: "lit-css"})

const iiefTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ["./src/index.tsx"],
      entryNames: "[name]",
      //outfile: "./dist/index.js",
      outdir: "./dist/",
      bundle: true,
      //minify: true, //process.env.NODE_ENV === "production"
      platform: "browser", //"node", "browser"
      sourcemap: true, //process.env.NODE_ENV !== "production"
      external: ["react", "react-dom"],
      target: "es6",
      loader: { ".svg": "dataurl", ".png": "dataurl", ".jpg": "file" },
      plugins: [
        nodeExternalsPlugin(),
        // sassPlugin(),
        //lessLoader(),
        svgrPlugin(),
        // cssModulesPlugin({ v2: false, inject: true }), //cssModulesPlugin 必须在 postCssPlugin 之前
        // postCssPlugin({
        //   plugins: [autoprefixer],
        // }),

        sassPlugin({
          transform: postcssModules({
            localsConvention: 'camelCaseOnly'
          })
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
      loader: { ".svg": "dataurl", ".png": "dataurl", ".jpg": "file" },
      plugins: [
        nodeExternalsPlugin(),
        // sassPlugin(),
        //lessLoader(),
        svgrPlugin(),
        // cssModulesPlugin({ v2: false, inject: true }),
        // postCssPlugin({
        //   plugins: [autoprefixer],
        // }),
        sassPlugin({
          transform: postcssModules({
            localsConvention: 'camelCaseOnly'
          })
        })
      ],
      inject: ["../../scripts/react-shim.js"],
    })
    .catch(() => process.exit(1));
};

iiefTask();
esmTask();
