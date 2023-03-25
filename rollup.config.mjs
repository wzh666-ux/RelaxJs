import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/Relax.js',
        format: 'umd',
        name: 'Relax',
        sourcemap: true,
    },
    plugins: [
        resolve({
            extensions:['.ts','.js','.json']
        }),
        commonjs(),
        typescript({
            // 使用tsconfig.json的配置文件
            tsconfig: "tsconfig.json",
            // 默认声明文件放到一个文件夹中
            useTsconfigDeclarationDir: true
        }),
        babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
        
    ],
    // 指出哪些模块需要被视为外部引入
    external: []
}
