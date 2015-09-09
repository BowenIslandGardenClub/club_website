module.exports = {
    module: {
        loaders: [
            {
                test: /modernizr/,
                loader: "imports?this=>window"
            },
            {
                test: /mobileMenu/,
                loader: "imports?this=>window"
            }
        ]
}
};