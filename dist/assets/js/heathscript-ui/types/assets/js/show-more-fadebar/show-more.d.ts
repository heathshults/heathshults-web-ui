declare function appendCSS(styles: any): void;
declare function cs(): void;
declare function defaults(): {
    boxHeight: string;
    fbStartColor: string;
    fbEndColor: string;
    fbBottomBorder: string;
    fbInitButtonText: string;
    fbOpenButtonText: string;
    fbButtonPosition: string;
    fbButtonBackground: string;
    fbButtonBackgroundHover: string;
    fbButtonBackgroundFocus: string;
    fbButtonTextColor: string;
    fbButtonTextColorHover: string;
    fbButtonTextColorFocus: string;
    fbButtonBorderColor: string;
    fbButtonBorderColorFocus: string;
    fbClassList: string;
    fbBtnClassList: string;
};
declare function settings(opts: any): {
    boxHeight: string;
    fbStartColor: string;
    fbEndColor: string;
    fbBottomBorder: string;
    fbInitButtonText: string;
    fbOpenButtonText: string;
    fbButtonPosition: string;
    fbButtonBackground: string;
    fbButtonBackgroundHover: string;
    fbButtonBackgroundFocus: string;
    fbButtonTextColor: string;
    fbButtonTextColorHover: string;
    fbButtonTextColorFocus: string;
    fbButtonBorderColor: string;
    fbButtonBorderColorFocus: string;
    fbClassList: string;
    fbBtnClassList: string;
} & {
    classBase: string;
    classActive: string;
    classFocused: string;
    fadebarClassList: string;
    fadebarbButtonClassList: string;
} & {
    showMore: string;
    showLess: string;
    positionX: string;
    positionY: string;
    fbButtonPosition: string;
    fbButtonBackground: string;
} & any[];
declare let height: any;
declare function FadeBar(): void;
declare function FadeBarCSS(): void;
