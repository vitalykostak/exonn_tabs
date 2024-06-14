export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}

export enum BuildMode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production'
}

export interface BuildPaths {
    entry: string
    output: string
    htmlTemplate: string
    src: string
}

export interface Env {
    port: number
    mode: BuildMode
}
