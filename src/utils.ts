import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { UserOptions, ResolvedOptions } from "./types";
import { OpenAPIObject, SchemaObject } from "openapi3-ts";
import fetch from "cross-fetch";
import { loadConfig } from "./config";

export async function resolveOptions(userOptions?: UserOptions) {
    const { config } = await loadConfig()
    userOptions = userOptions || config || {}

    const { output } = userOptions;

    const root = process.cwd();
    const outputFile = output ? (output?.endsWith(".ts") ? output : output + ".ts") : "./src/swagger.ts";

    return Object.assign({ output: resolve(root, outputFile) }, userOptions) as ResolvedOptions;
}

export async function fetchUrl(url: string) {
    return await fetch(url).then((res) => res.json());
}

export function getRef(ref: string, apiDocs: OpenAPIObject) {
    const paths = ref.split("/").slice(1);
    return paths.reduce((obj: any, key) => {
        return obj[key];
    }, apiDocs) as SchemaObject;
}

export function isTypeAny(type: true | undefined | {} | SchemaObject) {
    if (type === true) {
        return true;
    }

    if (typeof type === "object" && Object.keys(type).length <= 0) {
        return true;
    }

    if (!type) {
        return true;
    }

    return false;
}

export function toPascalCase(str: string): string {
    return `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`;
}
function replaceWithUpper(str: string, sp: string) {
    let pointArray = str.split(sp);
    pointArray = pointArray.map((point) => toPascalCase(point));

    return pointArray.join("");
}
function getSchemaName(name: string): string {
    const removePound = replaceWithUpper(name, "#");
    const removeDot = replaceWithUpper(removePound, ".");
    const removeBackTick = replaceWithUpper(removeDot, "`");
    const removeFirstBracket = replaceWithUpper(removeBackTick, "[");
    const removeLastBracket = replaceWithUpper(removeFirstBracket, "]");
    const removeDash = replaceWithUpper(removeLastBracket, "-");
    const removeSlash = replaceWithUpper(removeDash, "/");
    return removeSlash;
}
export function getRefName($ref: string, prefix: string = ""): string {
    return getSchemaName(prefix) + getSchemaName($ref || "");
}