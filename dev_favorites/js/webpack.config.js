module.exports = {
    entry: ['whatwg-fetch', './favorites.js'],
    output: {
        path: __dirname,
        filename: 'favorites.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};