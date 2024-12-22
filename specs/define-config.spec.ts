import { describe, expect, test as spec } from 'bun:test';
import type { Config } from 'prettier';

import { defineConfig } from '#src/index.ts';

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
    expect(defineConfig({}));
  });

  spec('should return config', async () => {
    expect(
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
    );
  });
});
