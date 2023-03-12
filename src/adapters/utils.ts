export type Get<T, K> = T[K & keyof T]

export function mergeUrlParam(url: string, paths: Record<string, any>) {
    return url.replace(/{(.*?)}/g, (_, key) => paths[key])
}