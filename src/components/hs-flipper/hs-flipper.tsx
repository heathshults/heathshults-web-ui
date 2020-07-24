import { Component, Prop, Element, State, h } from '@stencil/core';


/**
 * two ways of defining flipper behaviour:
 * - through native browser events for flipper and flipper-back (e.g. click, mouseenter, …)
 * - through isflipperped true|false
 *
 * only one of these can be used. `isflipperped` is prioritized if both were to be used.
 */
@Component({
    tag: 'hs-flipper',
    styleUrl: '../../scss/components/components.hs-flipper.scss'
})
export class HsFlipper {
@Element() element: HTMLElement;

	@Prop() flipperEvents: string;
	@Prop() flipperBackEvents: string;
	@Prop() flipperDuration: number;
	@Prop() flipperTimingFunction: string;
	@Prop() isflipperped: boolean;

	@State() flipperState: boolean;

	private events = { flipperEvents: [], flipperBackEvents: [] };
	// private options = { duration: 400, timingFunction: 'ease-in' };

	componentWillLoad() {
		this.init();
	}

	/**
	 * add options to the element (duration, timingfunction).
	 */
	componentDidLoad() {
		const duration = this.flipperDuration || 400;
		const timingFunction = this.flipperTimingFunction || 'ease-in';
		['front', 'back']
			.forEach(key => {
				const el = this.element.querySelector(`.hs-flipperpy__${key}`);
				el['style'].transition = `all ${duration/1000}s ${timingFunction}`;
			});
	}

	/**
	 * handling the `is-flipperped` attribute.
	 * usually this is used together with modern frameworks.
	 */
	componentWillUpdate() {
		if (this.isflipperped !== undefined) {
			this.flipperState = this.isflipperped;
		}
	}

	private init() {
		if (this.isflipperped !== undefined) {
			this.flipperState = this.isflipperped;
		} else if (this.flipperEvents !== undefined) {
			['flipperEvents', 'flipperBackEvents'].forEach(key => {
				this.events[key] = (this[key]) ?
					this[key].split(',') :
					[];
			});
			// adding event listeners
			const allEvents = [...this.events.flipperEvents, ...this.events.flipperBackEvents];
			allEvents
				.filter((eventType, index) => allEvents.indexOf(eventType) === index)
				.forEach(eventType => this.element.addEventListener(eventType, (evt) => this.processflipper(evt)));
			this.flipperState = false;
		}
	}

	private processflipper(evt) {
		const eventType = evt.type;
		if (this.flipperState && this.events.flipperBackEvents.indexOf(eventType) !== -1) {
			this.flipperState = !this.flipperState;
		} else if (!this.flipperState && this.events.flipperEvents.indexOf(eventType) !== -1) {
			this.flipperState = !this.flipperState;
		}
	}

	render() {
		return (
			<div class={ `hs-flipperpy ${(this.flipperState ? 'hs-flipperpy--flipperped' : '')}` }>

				{/* FRONT */}
				<div class="hs-flipperpy__front">
					<slot name="front" />
				</div>

				{/* BACK */}
				<div class="hs-flipperpy__back">
					<slot name="back" />
				</div>
			</div>
		);
	}
}
