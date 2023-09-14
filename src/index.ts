import { writeFileSync } from "fs";
import { resolve, join } from "path";
import { convertObj } from "swagger2openapi";
import { OpenAPIObject } from "openapi3-ts";
import { UserOptions, SwaggerSource, SwaggerDoc, ExportPlugin } from "./types";
import { resolveOptions, fetchUrl } from "./utils";
import { generateDocs, getPathsName } from "./generator";

function convertObjPromise(docs: any): Promise<OpenAPIObject> {
    return new Promise((resolve, reject) => {
        convertObj(docs, { patch: true }, function (err, option) {
            // err && console.log("err", err);
            if (err || !option.openapi) return reject(err);
            resolve(option.openapi);
        });
    });
}

function swagger2TsPlugin(userOptions?: UserOptions): ExportPlugin {

    async function loadSwaggerSource() {
        const { swaggerUrl, output, formatDocs, formatSchema } = await resolveOptions(userOptions);

        async function genCode(source: SwaggerSource) {
            const { url, name: docsName } = source;
            try {
                const docs = (await fetchUrl(`${swaggerUrl}${url}`)) as SwaggerDoc | OpenAPIObject;
                let openapiDocs = formatDocs ? formatDocs(docs) : docs;
                if (!("openapi" in openapiDocs)) {
                    if (docs.swagger)
                        openapiDocs = await convertObjPromise(openapiDocs);
                    else
                        throw new Error(JSON.stringify(docs))
                }
                const apistrings = generateDocs(openapiDocs, { docsName, baseUrl: docs.basePath ?? "", formatSchema });
                return apistrings
                // console.log("apistrings", apistrings);
            } catch (error) {
                console.log(`%c[vite-plugin-swagger2ts]: ${docsName} error`, 'color: #ff0000;', error)
                return ''
            }
        }

        const sources = (await fetchUrl(`${swaggerUrl}/swagger-resources`).catch((error) => error)) as SwaggerSource[];

        if (!Array.isArray(sources))
            return console.log(`%c[vite-plugin-swagger2ts]: doc error`, 'color: #ff0000;', JSON.stringify(sources))

        const interfaceList = await Promise.all(sources.map(genCode))
        const code = interfaceList.reduce((a, b) => a + b, '')
        const suffix = interfaceList.reduce((a, b, index) => {
            if (b) {
                a += !a ? `export type ${getPathsName('_Intersection')} = ` : `&\n`
                a += `${getPathsName(sources[index].name)}`
            }
            return a
        }, '')

        const outputFile = resolve(process.cwd(), output);
        writeFileSync(outputFile, code + suffix);
    }

    loadSwaggerSource();

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
