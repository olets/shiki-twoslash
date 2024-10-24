import type { parse } from "fenceparser";
export declare type Meta = NonNullable<ReturnType<typeof parse>>;
declare type Range = {
    begin: number;
    end: number;
    text?: string;
    count?: number;
    tooltip?: string[];
    classes?: string;
    lsp?: string;
};
/**
 * We're given the text which lives inside the token, and this function will
 * annotate it with twoslash metadata
 */
export declare function createHighlightedString(ranges: Range[], text: string, targetedWord?: string): string;
export declare const subTripleArrow: (str: string) => string;
export declare const replaceTripleArrow: (str: string) => string;
export declare const replaceTripleArrowEncoded: (str: string) => string;
export declare function stripHTML(text: string): string;
export declare function escapeHtml(html: string): string;
/** Does anything in the object imply that we should highlight any lines? */
export declare const shouldBeHighlightable: (highlight: any) => boolean;
/** Returns a func for figuring out if this line should be highlighted */
export declare const shouldHighlightLine: (highlight: any) => (line: number) => boolean;
export {};
