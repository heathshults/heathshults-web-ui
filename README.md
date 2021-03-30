# [HeathShults.com](https://heathshults.com/)

[Portfolio](https://heathshults.com/) is mostly a one page portfolio to showcase my work. You can use it for your own.

## Download and Installation

To begin using this portal, choose one of the following options to get started:

- [Download the latest release ](https://github.com/heathshults/heathshults-web-ui/archive/refs/heads/master.zip)
- Install using npm: `npm i heathshults-portfolio` COMING SOON!
- Clone the repo: `git clone https://github.com/heathshults/heathshults-web-ui.git`

## Usage

### Basic Usage

* Source files are in the src directory. Edit whatever you want. 

* To run it just do:
`npm start`

### Advanced Usage

* All css is produced with scss at:
`src/scss`

* HTML is in .ejs at:
`src/views`

#### npm Scripts

- `npm start` builds the project - and runs it in `www`
- `npm run comp:build` builds the web components I developed using Stencil.js
- `npm run gulp:ejsit` creates the html
- `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
- `npm run scss` creates the css
- `npm run serve:proxy` creates a browser-sync server proxied to a php server

You must have npm installed in order to use this build environment.

## Bugs and Issues

Let me know if you find something. It is likely you will find bugs lurking.

## Credits

Thanks to [startbootstrap.com](https://startbootstrap.com) for a killer starting point with the Agency template.

- <https://startbootstrap.com>
- <https://twitter.com/SBootstrap>
