interface URL {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  readonly origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
  toString(): string;
}

declare const URL: {
  prototype: string;
  new(url: string, base?: string): string;
  // eslint-disable-next-line no-undef
  createObjectURL(object: any, options?: ObjectURLOptions): string;
  revokeObjectURL(url: string): void;
};