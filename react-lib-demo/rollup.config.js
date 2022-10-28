import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import nested from 'postcss-nested'

const isDev = process.env.DEV

// 这边根据你的需求，把需要项目安装的在这边 external 掉
// 否则就是打包出的 js 中包含该内容
const EXTERNALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router-dom': 'ReactRouterDom',
  'react/jsx-runtime': 'jsxRuntime',
  '@xkit-yx/im-kit-ui': 'uikit',
}

export default {
  input: './src/index.tsx',
  output: [
    {
      file: './dist/index.umd.js',
      name: 'uikit',
      format: 'umd',
      exports: 'named',
      plugins: [!isDev && terser()],
      globals: EXTERNALS,
    },
    {
      file: './dist/index.esm.js',
      format: 'esm',
      exports: 'named',
      plugins: [!isDev && terser()],
      globals: EXTERNALS,
    },
    {
      file: './dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      plugins: [!isDev && terser()],
      globals: EXTERNALS,
    },
  ],
  external: Object.keys(EXTERNALS),
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),

    nodeResolve({
      mainFields: ['jsnext', 'preferBuiltins', 'browser'],
    }),

    commonjs({
      include: ['./node_modules/**'],
    }),

    json(),

    postcss({
      extensions: ['.less'],
      extract: false,
      modules: true,
      plugins: [nested()],
    }),
  ],
}
