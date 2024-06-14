import { type WebpackPluginInstance } from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

import { type BuildOptions } from './types/BuildOptions'

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebPackPlugin({
            template: options.paths.htmlTemplate
        })
    ]
}
