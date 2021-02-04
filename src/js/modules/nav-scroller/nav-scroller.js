"use strict";
/* eslint-disable no-console, no-undef, no-unused-vars, @typescript-eslint/no-unused-vars */
/*!
 * HeathShults.com - Heath Shults v1.0 (http://heathshults.com)
 * Copyright 2020-2020 Heath-Shults
 * Licensed under MIT (https://github.com/heathshults/heathshults.com/LICENSE)
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var HSNavbar = /** @class */ (function () {
    function HSNavbar(navSelector, navLinkSelector, userOptions) {
        var _this = this;
        this.navSelector = navSelector;
        this.navLinkSelector = navLinkSelector;
        this.userOptions = userOptions;
        this.defaults = {
            navSelector: 'hs-navbar',
            navLinkSelector: 'hs-navbar_item',
            autoCollapse: false,
            fixedTop: false
        };
        this.options = __assign(__assign({}, this.defaults), this.userOptions);
        this.navbar = document.querySelector(navSelector);
        this.navLinks = Array.prototype.slice.call(document.querySelectorAll(this.navLinkSelector));
        this.navbar.addEventListener('click', function () {
            _this.scrollHandler();
        }, true);
        window.addEventListener('scroll', function () {
            _this.scrollHandler();
        }, true);
        this.scrollHandler();
    }
    HSNavbar.prototype.scrollHandler = function () {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            this.navbar.classList.add('hs-navbar-semitransparent');
        }
        else {
            this.navbar.classList.remove(('hs-navbar-semitransparent'));
        }
        return;
    };
    return HSNavbar;
}());
exports["default"] = HSNavbar;
new HSNavbar('#mainNav', '.hs-navbar_link', { autoCollapse: true, fixedTop: true });
