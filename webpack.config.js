
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/src',
        // path: __dirname + '/build',
        filename: 'bundle.js'

    },
    devtool: 'source-map',

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },

    stats: {
        errorDetails: true
    },

    devServer: {
        historyApiFallback: true,
      }
};
