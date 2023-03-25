import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
export default {
    input: 'src/main.ts',
    output: {
        file: 'build/Relax.js',
        format: 'umd',
        name: 'Relax',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled', extensions: ['.ts'] })
    ],
    // 指出哪些模块需要被视为外部引入
    external: []
}
