// @ts-nocheck
//@ts-nocheck
const { realpathSync, readFileSync, writeFileSync, renameSync } = require("fs");
const esbuild = require("esbuild");
//const { basename } = require("path");
const path = require("path");

const { spawnSync } = require("child_process");

const { nodeExternalsPlugin } = require("esbuild-node-externals");
// 自动排除捆绑版本中的所有node_modules
const { Generator } = require("npm-dts");

// new Generator({
//   entry: "src/index.ts",
//   output: "dist/index.d.ts",
// }).generate();

// new Generator({
//   entry: path.resolve(process.cwd(), '"src/index.ts'),
//   root: path.resolve(process.cwd(), 'src'),
//   tmp: path.resolve(process.cwd(), 'cache/tmp'),
//   tsc: '--extendedDiagnostics',
// }).generate()

//@ts-ignore
//const  basePath: `${__dirname}/..`,

const iiefTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ["./src/index.ts"],
      outfile: "./dist/index.js",
      bundle: true,
      minify: true, //process.env.NODE_ENV === "production"
      platform: "browser", //"node", "browser"
      sourcemap: true, //process.env.NODE_ENV !== "production"
      target: "es6",
      plugins: [nodeExternalsPlugin()],
    })
    .catch(() => process.exit(1));
};

const esmTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ["./src/index.ts"],
      format: "esm",
      outfile: "./dist/index.esm.js",
      bundle: true,
      minify: true,
      //platform: "browser", //"node", "browser"
      sourcemap: true,
      target: "esnext",
      plugins: [nodeExternalsPlugin()],
    })
    .catch(() => process.exit(1));
};

const cjsTask = () => {
  esbuild
    .build({
      //logLevel: 'silent',
      //absWorkingDir: basePath,
      entryPoints: ["./src/index.ts"],
      outfile: "./dist/index.cjs.js",
      bundle: true,
      minify: true,
      platform: "node", //"node", "browser"
      sourcemap: true,
      format: "cjs",
      target: ["esnext", "node12.22.0"],
      plugins: [nodeExternalsPlugin()],
    })
    .catch(() => process.exit(1));
};

iiefTask();
esmTask();
cjsTask();
