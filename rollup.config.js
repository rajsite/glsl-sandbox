import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default [{
    input: 'glsl-sandbox.js',
    output: {
        file: 'dist/glsl-sandbox.js',
        format: 'esm'
    },
    plugins: [
        nodeResolve(),
        commonjs()
    ]
}];
