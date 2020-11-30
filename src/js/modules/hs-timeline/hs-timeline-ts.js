(function () {
    // Vertical Timeline - by CodyHouse.co
    function VerticalTimeline(element) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("hs-timeline__block");
        this.images = this.element.getElementsByClassName("hs-timeline__img");
        this.contents = this.element.getElementsByClassName("hs-timeline__content");
        this.offset = 0.8;
        this.hideBlocks();
    }
    VerticalTimeline.prototype.hideBlocks = function () {
        if (!document.documentElement.hasAttribute('classList')) {
            // if ( !"classList" in document.documentElement ) {
            return; // no animation on older browsers
        }
        //hide timeline blocks which are outside the viewport
        // const self: unknown = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (this.blocks[i].getBoundingClientRect().top > window.innerHeight * this.offset) {
                    this.images[i].classList.add("hs-timeline__img--hidden");
                    this.contents[i].classList.add("hs-timeline__content--hidden");
                }
            })(i);
        }
    };
    VerticalTimeline.prototype.showBlocks = function () {
        if (!document.documentElement.hasAttribute('classList')) {
            // if ( !'classList' in document.documentElement ) {
            return;
        }
        // const self: unknown = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (this.contents[i].classList.contains("hs-timeline__content--hidden") && this.blocks[i].getBoundingClientRect().top <= window.innerHeight * this.offset) {
                    // add bounce-in animation
                    this.images[i].classList.add("hs-timeline__img--bounce-in");
                    this.contents[i].classList.add("hs-timeline__content--bounce-in");
                    this.images[i].classList.remove("hs-timeline__img--hidden");
                    this.contents[i].classList.remove("hs-timeline__content--hidden");
                }
            })(i);
        }
    };
    var verticalTimelines = document.getElementsByClassName("js-hs-timeline");
    var verticalTimelinesArray = [];
    var scrolling = false;
    if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
            (function (i) {
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            })(i);
        }
        //show timeline blocks on scrolling
        // window.addEventListener("scroll", function(event): void {
        window.addEventListener("scroll", function () {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }
    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function (timeline) {
            timeline.showBlocks();
        });
        scrolling = false;
    }
})();
