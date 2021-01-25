import {
  Component,
  Prop,
  EventEmitter,
  Event,
  State,
  Method,
  h,
} from "@stencil/core";

@Component({
  tag: "hs-fetcher",
  styleUrl: "hs-fetcher.scss",
  shadow: true,
})
export class HsFetcher {
  @Prop() headers: Headers = new Headers();
  @Prop() method = "GET";
  @Prop() url = "";
  @Prop() buttonLabel = "Fetch";

  @Event() resolved: EventEmitter;
  @Event() error: EventEmitter;

  @State() available = false;
  @State() request: any;

  componentDidLoad(): void {
    if (self.fetch) {
      this.available = true;
      const options = {
        method: this.method,
        headers: new Headers(this.headers),
      };

      this.request = new Request(this.url, options);
    }
  }

  @Method() async makeRequest(): Promise<void> {
    if (this.available) {
      fetch(this.request)
        .then(
          function (response) {
            this.resolved.emit(response);
          }.bind(this)
        )
        .catch(
          function (err) {
            this.error.emit(err);
          }.bind(this)
        );
    }
  }

  render(): void {
    return;
  }
}
