import { loadConfig as configLoader } from 'unconfig'
import { UserOptions } from '../types'

export const pluginName = 'vite-plugin-swagger2ts'

export function loadConfig() {
    return configLoader<UserOptions>({
        sources: [
            {
                files: `swagger2ts.config`,
            }
        ],
        // if false, the only the first matched will be loaded
        // if true, all matched will be loaded and deep merged
        merge: false,
    })
}

export function defineConfig(userOptions?: UserOptions) {
    return userOptions
}
