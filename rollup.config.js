// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/components/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({
      mainFields: ['module', 'main'],
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          jsx: 'react-jsx',  // Ensure TypeScript uses the new JSX transform
        },
      },
    }),
  ],
  external: ['react', 'react-dom'],  // Don't bundle React
};
