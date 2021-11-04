import { babel } from '@rollup/plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
import eslint from '@rollup/plugin-eslint';

dotenv.config();
const {NODE_ENV} = process.env;

export default {
    input: './src/index.js',
    treeshake: false,
    output: {
        file: 'dist/code.js',
        format: 'es'
    },
    context: 'this',
    plugins: [
        eslint(),
        nodeResolve(),
        babel({ babelHelpers: 'bundled' }),
        cleanup(),
        replace({
            preventAssignment: true
        })
        
    ]
};