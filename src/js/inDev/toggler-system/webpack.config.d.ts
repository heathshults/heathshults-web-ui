export const devtool: string;
export namespace output {
    const filename: string;
}
export const plugins: any[];
export namespace module {
    const loaders: {
        test: RegExp;
        exclude: RegExp;
        loader: string;
        query: {
            presets: string[];
        };
    }[];
}
export namespace resolve {
    const extensions: string[];
    const root: string[];
}
export namespace stats {
    const colors: boolean;
    const modules: boolean;
    const reasons: boolean;
    const errorDetails: boolean;
}
