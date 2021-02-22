"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HSModal = void 0;
/**
 * HSModal Class
 */
var HSModal = /** @class */ (function (_super) {
    __extends(HSModal, _super);
    /**
     * Constructor
     *
     * @param openTrigger The element that will trigger opening the modal.
     * @param options Options that will override defaults.
     */
    function HSModal(openTrigger, options) {
        var _this = _super.call(this) || this;
        /**
     * Configuration options.
         *
     * Merge any user defined options into default config.
         */
        _this.config = Object.assign({
            backgroundColor: "",
            modalTitle: "This is a modal!",
            modalText: "Default description text for modal.",
            onBefore: null,
            onAfter: null
        }, options);
        // Define new element
        customElements.define('hs-modal', HTMLDivElement, { "extends": 'div' });
        // Bind callback functions to the HSModal.
        _this.config.onBefore = _this.config.onBefore.bind(_this);
        _this.config.onAfter = _this.config.onAfter.bind(_this);
        // Set open trigger.
        _this.openTrigger = openTrigger;
        // Set modal events.
        _this.bindEvents();
        return _this;
    }
    // Bind events.
    HSModal.prototype.bindEvents = function () {
        this.openTrigger.addEventListener("click", this.open.bind(this));
    };
    // Open the modal.
    HSModal.prototype.open = function () {
        var _this = this;
        this.render();
        // Cache DOM.
        this.modalDiv = document.getElementById("hs-modal");
        this.myModalContent = document.querySelector(".hs-modal-content");
        // Bind close event.
        this.modalDiv.addEventListener("click", this.close.bind(this));
        // Call onBefore if it is defined.
        if (this.config.onBefore) {
            this.config.onBefore();
        }
        // Add classes.
        this.modalDiv.classList.add("opened");
        this.myModalContent.classList.add("animate-in");
        // Remove animate class.
        setTimeout(function () {
            _this.myModalContent.classList.remove("animate-in");
        }, 600);
    };
    // Close the modal.
    HSModal.prototype.close = function (e) {
        var _this = this;
        // If we click the close button.
        if (e.target.id === "close" && e.type === "click") {
            this.myModalContent.classList.add("animate-out");
            // Remove classes.
            setTimeout(function () {
                // Remove classes.
                _this.myModalContent.classList.remove("animate-out");
                _this.modalDiv.classList.remove("opened");
                // Remove <div> from the DOM.
                _this.containerDiv.parentNode.removeChild(_this.containerDiv);
                // If onAfter is defined then call it.
                if (_this.config.onAfter) {
                    _this.config.onAfter();
                }
            }, 600);
        }
        return false;
    };
    // Render the modal.
    HSModal.prototype.render = function () {
        // Set the template.
        var html = this.htmlTemplate();
        // Create a document fragment.
        // const docFrag = document.createDocumentFragment();
        // Create a <div> on the fly.
        this.containerDiv = document.createElement("div");
        // Set the HTML of the <div> to the HTML template.
        this.containerDiv.innerHTML = html;
        // Append the modal HTML to the body.
        document.body.appendChild(this.containerDiv);
    };
    // HSModal HTML template.
    HSModal.prototype.htmlTemplate = function () {
        return "\n\t\t\t<div id=\"hs-modal\" class=\"hs-modal\" style=\"background-color:" + this.config.backgroundColor + "\";>\n\t\t\t\t\n\t\t\t\t<div class=\"hs-modal-content\">\n\t\t\t\t\t<button id=\"close\">X</button>\n\t\t\t\t\t<h1>" + this.config.modalTitle + "!</h1>\n\t\t\t\t\t<p>" + this.config.modalText + "</p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t";
    };
    return HSModal;
}(HTMLDivElement));
exports.HSModal = HSModal;
var modalOneTrigger = document.getElementById("open-modal-1");
var modalTwoTrigger = document.getElementById("open-modal-2");
var header = document.getElementsByTagName("header");
new HSModal(modalOneTrigger, {
    modalTitle: "Overriding the Title!",
    onAfter: function () {
        // Let's remove a class to the header!
        header[0].classList.remove("is-open");
    },
    onBefore: function () {
        // Let's remove a class to the header!
        header[0].classList.add("is-open");
    }
});
new HSModal(modalTwoTrigger, {
    modalTitle: "This is modal two!",
    onAfter: function () {
        // Set the background back to the original.
        var afterContainer = document.querySelector(".container");
        afterContainer.style.background = "";
    },
    onBefore: function () {
        // Change the background color of the container!
        var beforeContainer = document.querySelector(".container");
        beforeContainer.style.background = "#88C542";
    }
});
