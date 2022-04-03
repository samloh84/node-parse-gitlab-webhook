import {readFileSync} from "node:fs";

export function readJsonFileSync(path) {
    let data = readFileSync(path, 'utf8');
    return JSON.parse(data);
}