import {readFile} from "fs/promises";
import {join} from "path";
import * as Yaml from "yaml";

export async function yamlHandler() {
    const file = await readFile(join(__dirname, '../../../swagger.yaml'), 'utf-8');
    return Yaml.parse(file);
}