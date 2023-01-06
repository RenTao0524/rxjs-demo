import html from '@rollup/plugin-html'

export default {
    input: './src/index.js',
    output: {
        file: 'dist/main.js',
        format: 'umd'
    },
    plugins:[
        html()
    ]
    // watch: {}
}