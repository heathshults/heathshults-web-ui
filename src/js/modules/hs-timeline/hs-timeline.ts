/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unsafe-negation */
function Timeline(){ 
  // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("hs-timeline__block");
		this.images = this.element.getElementsByClassName("hs-timeline__img");
		this.contents = this.element.getElementsByClassName("hs-timeline__content");
		this.offset = 0.8;
		this.hideBlocks();
	}

	VerticalTimeline.prototype.hideBlocks = function() {
		if ( (!"classList" as any) in document.documentElement ) {
			return; // no animation on older browsers
		}
		//hide timeline blocks which are outside the viewport
		const self = this;
		for( let i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("hs-timeline__img--hidden"); 
					self.contents[i].classList.add("hs-timeline__content--hidden"); 
				}
			})(i);
		}
	};

	VerticalTimeline.prototype.showBlocks = function() {
		if ( (!"classList" as any) in document.documentElement ) {
			return;
		}
		const self = this;
		for( let i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.contents[i].classList.contains("hs-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.images[i].classList.add("hs-timeline__img--bounce-in");
					self.contents[i].classList.add("hs-timeline__content--bounce-in");
					self.images[i].classList.remove("hs-timeline__img--hidden");
					self.contents[i].classList.remove("hs-timeline__content--hidden");
				}
			})(i);
		}
	};

	const verticalTimelines = document.getElementsByClassName("js-hs-timeline");
	const	verticalTimelinesArray = [];
	let	scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( let i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	}
	

}

const _Timeline = Timeline;
export {_Timeline as Timeline};
// if (!document.documentElement.hasAttribute('classList')) {
