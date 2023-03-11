import { defineConfig, Options } from 'tsup';

export const config: Options = {
  target: 'es5',
  entry: ['src/index.{ts,tsx}'],
  outDir: 'lib',
  shims: true,
  minify: true,
  treeshake: true,
  splitting: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: { resolve: true },
};

export default defineConfig((options: Options) => ({
  ...config,
  minify: !options.watch,
  minifyWhitespace: !options.watch,
  target: options.target || 'node16',
}));
