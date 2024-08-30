import { describe, expectTypeOf, test as spec } from 'vitest';

import type { Config } from 'prettier';

import { defineConfig } from '#app';

describe('Prettier Config', () => {
  spec('empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<Config>();
  });

  spec('config', async () => {
    expectTypeOf(
      defineConfig({
        semi: true,
        singleQuote: false,
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
        bracketSameLine: false,
        rangeStart: 0,
        rangeEnd: 4,
        parser: 'espree',
        filepath: 'path/to/file',
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'always',
        plugins: [],
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf',
        quoteProps: 'as-needed',
        vueIndentScriptAndStyle: false,
        embeddedLanguageFormatting: 'auto',
        singleAttributePerLine: false,
        experimentalTernaries: false,
        overrides: [
          {
            files: ['path/to/file'],
            excludeFiles: ['path/to/file'],
            options: {
              semi: true,
              singleQuote: false,
              jsxSingleQuote: false,
              trailingComma: 'all',
              bracketSpacing: true,
              bracketSameLine: false,
              rangeStart: 0,
              rangeEnd: 4,
              parser: 'espree',
              filepath: 'path/to/file',
              requirePragma: false,
              insertPragma: false,
              proseWrap: 'always',
              plugins: [],
              htmlWhitespaceSensitivity: 'css',
              endOfLine: 'lf',
              quoteProps: 'as-needed',
              vueIndentScriptAndStyle: false,
              embeddedLanguageFormatting: 'auto',
              singleAttributePerLine: false,
              experimentalTernaries: false,
            },
          },
        ],
      }),
    ).toEqualTypeOf<Config>();
  });
});
