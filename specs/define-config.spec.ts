import { describe, expectTypeOf, test as spec } from 'vitest';

import { defineConfig } from '#index';

import type { Config } from 'prettier';

describe('Prettier Config', async () => {
  spec('should return empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<Config>();
  });

  spec('should return config', async () => {
    expectTypeOf(
      defineConfig({
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
        overrides: [
          {
            excludeFiles: ['path/to/file'],
            files: ['path/to/file'],
            options: {
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
            },
          },
        ],
      }),
    ).toEqualTypeOf<Config>();
  });
});
