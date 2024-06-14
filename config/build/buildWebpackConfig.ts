import { type Configuration } from 'webpack'

import { buildWebServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/BuildOptions'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            clean: true,
            publicPath: '/'
        },
        devServer: isDev ? buildWebServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(options)
    }
}
