((): void=>{
  // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element: HTMLElement ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
		this.images = this.element.getElementsByClassName("cd-timeline__img");
		this.contents = this.element.getElementsByClassName("cd-timeline__content");
		this.offset = 0.8;
		this.hideBlocks();
	}

	VerticalTimeline.prototype.hideBlocks = function(): void {
		if (  !document.documentElement.hasOwnProperty('classList') ) {
		// if ( !"classList" in document.documentElement ) {
			return; // no animation on older browsers
		}
		//hide timeline blocks which are outside the viewport
		const self: any = this;
		for( let i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("cd-timeline__img--hidden"); 
					self.contents[i].classList.add("cd-timeline__content--hidden"); 
				}
			})(i);
		}
	};

	VerticalTimeline.prototype.showBlocks = function(): void {
		if ( !document.documentElement.hasOwnProperty('classList') ) {
		// if ( !'classList' in document.documentElement ) {
			return;
		}
		const self: any = this;
		for( let i = 0; i < this.blocks.length; i++) {
			(function(i): void{
				if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.images[i].classList.add("cd-timeline__img--bounce-in");
					self.contents[i].classList.add("cd-timeline__content--bounce-in");
					self.images[i].classList.remove("cd-timeline__img--hidden");
					self.contents[i].classList.remove("cd-timeline__content--hidden");
				}
			})(i);
		}
	};

	const verticalTimelines: any = document.getElementsByClassName("js-cd-timeline");
	const	verticalTimelinesArray: Array<any> = [];
	let	scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( let i = 0; i < verticalTimelines.length; i++) {
			(function(i): void {
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		// window.addEventListener("scroll", function(event): void {
		window.addEventListener("scroll", function(): void {
			
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll(): void {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	}
})();
