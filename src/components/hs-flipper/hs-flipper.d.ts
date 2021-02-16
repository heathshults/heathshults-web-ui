/**
 * two ways of defining flipper behaviour:
 * - through native browser events for flipper and flipper-back (e.g. click, mouseenter, …)
 * - through isflipperped true|false
 *
 * only one of these can be used. `isflipperped` is prioritized if both were to be used.
 */
export declare class HsFlipper {
    element: HTMLElement;
    flipperEvents: string;
    flipperBackEvents: string;
    flipperDuration: number;
    flipperTimingFunction: string;
    isflipperped: boolean;
    flipperState: boolean;
    private events;
    componentWillLoad(): void;
    /**
     * add options to the element (duration, timingfunction).
     */
    componentDidLoad(): void;
    /**
     * handling the `is-flipperped` attribute.
     * usually this is used together with modern frameworks.
     */
    componentWillUpdate(): void;
    private init;
    private processflipper;
    render(): any;
}
