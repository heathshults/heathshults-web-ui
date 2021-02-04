/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */
export default class HSNavbar {
    navSelector: string;
    navLinkSelector: string;
    userOptions: Record<string, any>;
    navbar: HTMLElement;
    navLink: any;
    navLinks: Array<any>;
    options: Record<string, any>;
    defaults: {
        navSelector: string;
        navLinkSelector: string;
        autoCollapse: boolean;
        fixedTop: boolean;
    };
    constructor(navSelector: string, navLinkSelector: string, userOptions: Record<string, any>);
    scrollHandler(): void;
    return: any;
}
