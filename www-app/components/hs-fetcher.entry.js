import { r as registerInstance, e as createEvent } from './index-efdc126d.js';

const hsFetcherCss = ":host{}";

const HsFetcher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resolved = createEvent(this, "resolved", 7);
        this.fetcherror = createEvent(this, "fetcherror", 7);
        this.headers = new Headers();
        this.method = 'GET';
        this.url = '';
        this.buttonLabel = 'Fetch';
        this.available = false;
    }
    componentDidLoad() {
        if (self.fetch) {
            this.available = true;
            const options = {
                method: this.method,
                headers: new Headers(this.headers),
            };
            this.request = new Request(this.url, options);
        }
    }
    async makeRequest() {
        if (this.available) {
            fetch(this.request)
                .then(function (response) {
                this.resolved.emit(response);
            }.bind(this))
                .catch(function (err) {
                this.fetcherror.emit(err);
            }.bind(this));
        }
    }
    render() {
        return;
    }
};
HsFetcher.style = hsFetcherCss;

export { HsFetcher as hs_fetcher };
