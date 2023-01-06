import html from '@rollup/plugin-html'

export default {
    input: './src/index.ts',
    output: {
        file: 'dist/main.js',
        format: 'es'
    },
    plugins:[
        html()
    ]
    // watch: {}
}