import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";
import { convertObj } from "swagger2openapi";
import { OpenAPIObject } from "openapi3-ts";
import { UserOptions, SwaggerSource, SwaggerDoc, ExportPlugin, ResolvedOptions } from "./types";
import { resolveOptions, fetchUrl } from "./utils";
import { generateDocs, getApiName, getPathsName } from "./generator";
import chalk from 'chalk'

function convertObjPromise(docs: any) {
    return new Promise<OpenAPIObject>((resolve, reject) => {
        convertObj(docs, { patch: true }, function (err, option) {
            // err && console.log("err", err);
            if (err || !option.openapi) return reject(err);
            resolve(option.openapi);
        });
    });
}

async function loadSwaggerSource(options: ResolvedOptions) {
    const { swaggerUrl, jsonUrl, jsonPath, output, formatDocs, formatSchema } = options;

    async function genInterface(docs: SwaggerDoc | OpenAPIObject, docsName: string) {
        let openapiDocs = formatDocs ? formatDocs(docs) : docs;
        if (!("openapi" in openapiDocs)) {
            if (docs.swagger)
                openapiDocs = await convertObjPromise(openapiDocs);
            else
                throw new Error(JSON.stringify(docs))
        }
        return generateDocs(openapiDocs, { docsName, baseUrl: docs.basePath ?? "", formatSchema });
    }

    async function genResourcesCode(source: SwaggerSource) {
        const { url, name } = source;
        try {
            const docs = await fetchUrl(`${swaggerUrl}${url}`)
            const code = await genInterface(docs, name)
            return code
        } catch (error) {
            console.log(chalk.yellow(`[vite-plugin-swagger2ts]: ${name} error;`) + (error as Error).message)
            return ''
        }
    }

    async function getSources() {
        let sources: SwaggerSource[] | undefined = undefined
        let interfaces: string[] = []

        if (typeof swaggerUrl === 'string') {
            const resources = (await fetchUrl(`${swaggerUrl}/swagger-resources;`).catch((error) => error));
            if (Array.isArray(resources)) {
                sources = resources
                interfaces.push(...(await Promise.all(sources.map(genResourcesCode))))
            } else {
                console.log(chalk.yellow(`[vite-plugin-swagger2ts]: resources error`) + JSON.stringify(resources))
            }
        }

        if (typeof jsonUrl === 'string') {
            const swaggerJson: OpenAPIObject = await fetchUrl(jsonUrl)
            if (!swaggerJson.info) return console.log(chalk.yellow(`[vite-plugin-swagger2ts]: jsonUrl error;`) + JSON.stringify(swaggerJson))
                interfaces.push(await genInterface(swaggerJson, getApiName(swaggerJson)))
        }

        if (typeof jsonPath === 'string') {
            const _jsonPath = resolve(process.cwd(), jsonPath)
            const swaggerJson: OpenAPIObject = JSON.parse(readFileSync(_jsonPath, { encoding: 'utf-8' }))

            interfaces.push(await genInterface(swaggerJson, getApiName(swaggerJson)))
        }

        return { sources, interfaces }
    }
    const { sources, interfaces } = await getSources() || {}
    if (!interfaces?.length) return

    const code = interfaces.reduce((a, b) => a + b, '')
    const suffix = sources ? interfaces.reduce((a, b, index) => {
        if (b) {
            a += !a ? `export type ${getPathsName('_Intersection')} = ` : `&`
            a += `${getPathsName(sources[index].name)}`
        }
        return a
    }, '') : ''

    const outputFile = resolve(process.cwd(), output);
    writeFileSync(outputFile, code + suffix);
}

function swagger2TsPlugin(userOptions?: UserOptions): ExportPlugin {

    resolveOptions(userOptions).then(options => {
        Promise.all(options.map(loadSwaggerSource))
    })

    return {
        name: "vite-plugin-swagger2ts",
        enforce: "pre",
        apply: "serve"
    };
}

export function defineConfig(userOptions?: UserOptions) {
    return userOptions
}

export * from "./types";
export default swagger2TsPlugin;
