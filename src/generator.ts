import * as fs from 'fs';

type JsonSchemaProperty = {
    type?: string | string[];
    enum?: string[];
    properties?: Record<string, JsonSchemaProperty>;
    items?: JsonSchemaProperty;
    default?: any;
};

function jsonTypeToTs(type: string | string[] | undefined, prop: JsonSchemaProperty): string {
    if (!type) return 'any';
    if (Array.isArray(type)) {
        return type.map(t => jsonTypeToTs(t, prop)).join(' | ');
    }
    switch (type) {
        case 'string':
            return prop.enum ? prop.enum.map(e => `"${e}"`).join(' | ') : 'string';
        case 'integer':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'array':
            return prop.items ? `${jsonTypeToTs(prop.items.type, prop.items)}[]` : 'any[]';
        case 'object':
            if (prop.properties) {
                return `{ ${Object.entries(prop.properties).map(([k, v]) => `${k}: ${jsonTypeToTs(v.type, v)}`).join('; ')} }`;
            }
            return 'Record<string, any>';
        case 'null':
            return 'null';
        default:
            return 'any';
    }
}

interface Section {
	id: string;
	type: string | string[];
	properties?: Record<string, JsonSchemaProperty>;
}

function generateSection(section: Section, ): string {
    const props = Object.entries(section.properties).map(([name, prop]) => {
        const tsType = jsonTypeToTs(prop.type, prop);
        return `    '${name}': ${tsType};`;
    }).join('\n');
    return `'${section.id}': {\n${props}\n}`;
}

function generateTsInterface(schema: Section[]): string {
	let result = 'export interface JavaConfiguration {\n';
	result += schema.map(section => generateSection(section)).join(';\n');
	result += '\n}';
	return result;
}

// Example usage:
const json = fs.readFileSync('d:\\anysphere\\vscode-java\\src\\configuration.json', 'utf8');
const schema = JSON.parse(`[${json.replace(/^\s*\/\/.*$/gm, '')}]`); // Remove comments, wrap in array
const tsInterface = generateTsInterface(schema);
fs.writeFileSync('d:\\anysphere\\vscode-java\\src\\JavaConfiguration.ts', tsInterface);
console.log(tsInterface);

