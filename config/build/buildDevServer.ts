import { type Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

import { type BuildOptions } from './types/BuildOptions'

export const buildWebServer = (options: BuildOptions): WebpackDevServerConfiguration => {
    const { port } = options

    return {
        port,
        hot: true,
        historyApiFallback: true,
        open: true
    }
}
