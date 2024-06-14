import { type RuleSetRule } from 'webpack'

export const buildLoaders = (): RuleSetRule[] => {
    const styleLoader = 'style-loader'

    return [
        {
            test: /\.(ts|tsx)$/i,
            loader: 'ts-loader',
            exclude: ['/node_modules/']
        },
        {
            test: /\.css$/i,
            use: [styleLoader, 'css-loader']
        },
        {
            test: /\.s[ac]ss$/i,
            use: [styleLoader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
            type: 'asset'
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack'
                }
            ]
        }
    ]
}
