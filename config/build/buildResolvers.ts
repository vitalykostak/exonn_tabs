import { type ResolveOptions } from 'webpack'

import { type BuildOptions } from './types/BuildOptions'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@': options.paths.src
        }
    }
}
