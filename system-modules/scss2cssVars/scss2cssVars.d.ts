export default class Scss2cssVars {
    sourceCssStream: any;
    src: string;
    dest: string;
    constructor(src?: string, dest?: string);
    convert(): Promise<unknown>;
}
