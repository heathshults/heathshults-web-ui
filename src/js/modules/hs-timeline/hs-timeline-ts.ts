(function(): void {
  function VerticalTimeline(element): void {
    this.element = element;
    this.blocks = this.element.getElementsByClassName('cd-timeline__block');
    this.images = this.element.getElementsByClassName('cd-timeline__img');
    this.contents = this.element.getElementsByClassName('cd-timeline__content');
    this.offset = 0.8;
    this.hideBlocks();
  } 
	const classList: any = 'classList';
  VerticalTimeline.prototype.hideBlocks = function(): any {
    if (!classList as any in document.documentElement) {
      return;
    }
    // const self: unknown = this;
    for (let i = 0; i < this.blocks.length; i++) {
      (function(i): void {
        if (this.blocks[i].getBoundingClientRect().top > window.innerHeight * this.offset) {
          this.images[i].classList.add('cd-timeline__img--hidden');
          this.contents[i].classList.add('cd-timeline__content--hidden');
        }
      })(i);
    }
  };
  VerticalTimeline.prototype.showBlocks = function(): void {
    if (!classList as any in document.documentElement) {
      return;
    }
    // const self: unknown = this;
    for (let i = 0; i < this.blocks.length; i++) {
      (function(i): void {
        if (this.contents[i].classList.contains('cd-timeline__content--hidden') && this.blocks[i].getBoundingClientRect().top <= window.innerHeight * this.offset) {
          this.images[i].classList.add('cd-timeline__img--bounce-in');
          this.contents[i].classList.add('cd-timeline__content--bounce-in');
          this.images[i].classList.remove('cd-timeline__img--hidden');
          this.contents[i].classList.remove('cd-timeline__content--hidden');
        }
      })(i);
    }
  };
  const verticalTimelines = document.getElementsByClassName('js-cd-timeline');
  const verticalTimelinesArray = [];
  let scrolling = false;
  if (verticalTimelines.length > 0) {
    for (let i = 0; i < verticalTimelines.length; i++) {
      (function(i) {
        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
      })(i);
    }
    window.addEventListener('scroll', function(event): void {
			console.log(event.target);
			if (!scrolling) {
        scrolling = true;
        (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250): window.requestAnimationFrame(checkTimelineScroll);
      }
    });
  }

  function checkTimelineScroll() {
    verticalTimelinesArray.forEach(function(timeline) {
      timeline.showBlocks();
    });
    scrolling = false;
  }
})();
