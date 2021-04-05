/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @function valieURL - Checks if a string is a url.
 *
 * @param {unknown} url - A string.
 * @const pattern - A RegExp that tests the string for url pattern.
 * @return {true/false}
 *
 * @example
 *
 * validURL('http://hello.com');
 *
 */
export function ValidURL(url) {
    const pattern = new RegExp(
    // protocol
    '^(https?:\\/\\/)?' +
        // domain name
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        // OR ip (v4) address
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        // port and path
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        // query string
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        // fragment locator 
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(url.toString());
}
