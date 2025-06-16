interface TPlaceholders {
    [key: string]: string;
}
declare const formatString: (str: string, placeholders: TPlaceholders) => string;
export default formatString;
