import { describe, expectTypeOf, test as spec } from 'vitest';
import type { Config } from 'prettier';

import { defineConfig } from '#index';

const options: Config = {
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  experimentalTernaries: false,
  filepath: 'path/to/file',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  parser: 'espree',
  plugins: [],
  proseWrap: 'always',
  quoteProps: 'as-needed',
  rangeEnd: 4,
  rangeStart: 0,
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  trailingComma: 'all',
  vueIndentScriptAndStyle: false,
};

describe('Prettier Config', async () => {
  spec('should return empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<Config>();
  });

  spec('should return config', async () => {
    expectTypeOf(
      defineConfig({
        options,
        overrides: [
          {
            excludeFiles: ['path/to/file'],
            files: ['path/to/file'],
            options,
          },
        ],
      }),
    ).toEqualTypeOf<Config>();
  });
});
