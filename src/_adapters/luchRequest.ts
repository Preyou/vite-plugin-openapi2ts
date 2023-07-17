import type Request from 'luch-request'
import type { HttpRequestConfig } from 'luch-request'
import { Get, mergeUrlParam } from './utils'

type FilterOptional<Source, Condition> = Pick<
    Source,
    {
        [K in keyof Source]: Source[K] extends Condition ? K : never
    }[keyof Source]
>

function LuchAdapter<T extends Record<string, any>>(httpInstance: Request) {
    type UrlKey = keyof T
    type MethodKey<U extends UrlKey> = string & keyof T[U]

    type SwaggerInterfaceSingle<U extends UrlKey, M extends MethodKey<U>> = T[U][M]
    type SwaggerField<U extends UrlKey, M extends MethodKey<U>> = keyof SwaggerInterfaceSingle<U, M>
    type SwaggerFieldType<U extends UrlKey, M extends MethodKey<U>, F extends SwaggerField<U, M>> = SwaggerInterfaceSingle<U, M>[F]

    type Param<U extends UrlKey, M extends MethodKey<U>> = SwaggerFieldType<U, M, 'param' & SwaggerField<U, M>>
    type Response<U extends UrlKey, M extends MethodKey<U>> = SwaggerFieldType<U, M, 'response' & SwaggerField<U, M>>

    async function request<U extends UrlKey, M extends MethodKey<U>>(
        url: U & string, method: M,
        param?: Get<Param<U, M>, M extends 'get' ? 'query' : 'body'>,
        config?: HttpRequestConfig & {
            data?: Get<Param<U, M>, 'body'>
            params?: Get<Param<U, M>, 'query'>
            path?: Get<Param<U, M>, 'path'>
        },
    ) {
        if (config?.path)
        (url as string) = mergeUrlParam(url, config.path)
  
        const response = await httpInstance.middleware<Response<U, M>>({
            url,
            method: method.toUpperCase() as any,
            params: method === 'get' ? param : config?.params as any,
            data: method !== 'get' ? param : config?.data as any,
            ...config,
        })
        return response.data
    }
    async function upload<
        U extends keyof FilterOptional<T, { post: any }>, P extends Get<Param<U, 'post'>, 'body' | 'query'>, N extends keyof P>(
            url: U & string,
            config: HttpRequestConfig<UniApp.UploadTask> & {
                name?: N
                formData?: Omit<P, N>
            }) {
        const response = await httpInstance.upload<Response<U, 'post'>>(url, config)
        return response.data
    }

    return { request, upload }
}

export { LuchAdapter }
