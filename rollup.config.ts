import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';

const fileName = 'index';
const fileFormat = 'es';

const indexFile = `${fileName}.ts`;
const declarationFile = `${fileName}.d.ts`;
const outputFile = `${fileName}.js`;

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: outputFile,
      format: fileFormat,
    },
  },
  {
    plugins: [dts()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
