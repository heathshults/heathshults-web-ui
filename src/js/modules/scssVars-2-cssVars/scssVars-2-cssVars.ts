/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as path from "path";
import fs from "fs-extra";
import readline from "../../../../node_modules/linebyline/readline";
// @ts-ignore next-line
import glob from "glob";

/**
 * scssVars-2-cssVars
 * @description A function that converts scss vars to css vars.
 * @function convert - The main function that does the conversion.
 * @example
 *
 * var sassToCssVars = require('sass-to-css-variables');
 * sassToCssVars.convert('some/variable/file.scss', 'some/output/file.css');
 *
 * @author Original development - Sam Thompson
 * https://github.com/samuelthomps0n/sass-to-css-variables
 */
// @ts-ignore: next-line
function convert(src: string, dest: string): Promise<any> {
  // @ts-ignore: next-line
  return new Promise((resolve, reject) => {
    const sourceCssStream = readline.createInterface({
      input: fs.createReadStream(path.resolve(__dirname, src)),
    });

    let rebuiltFile = ":root{";
    let skippingLine = false;

    sourceCssStream.on("line", function (line: string): void {
      // Skip Mixin and Comment blocks
      if (skippingLine) {
        if (line.charAt(0) === "}" || line.startsWith("*/")) {
          skippingLine = false;
        }
        return;
      }

      if (
        line.includes("@") ||
        (line.startsWith("/*") && !line.includes("*/"))
      ) {
        skippingLine = true;
        return;
      }

      if (
        line.startsWith("//") ||
        (line.startsWith("/*") && line.includes("*/"))
      ) {
        return;
      }

      let rebuiltLine = "";

      const currentLineWords = line.split(" ");

      let skippingWord = false;

      currentLineWords.forEach(function (value, index) {
        if (skippingWord) {
          return;
        }

        // Skip in-line comments
        if (value.startsWith("//") || value.startsWith("/*")) {
          skippingWord = true;
          return rebuiltLine;
        }

        if (value.includes("!default")) {
          return (rebuiltLine += ";");
        }

        if (value.includes("$")) {
          const oldVariable = value
            .substring(value.indexOf("$"))
            .replace(/;|,| |\)/g, "");
          if (index === 1) {
            value = value.replace(
              oldVariable,
              "var(--" + oldVariable.replace("$", "") + ")"
            );
          } else {
            value = value.replace(
              oldVariable,
              "--" + oldVariable.replace("$", "")
            );
          }
        }

        if (value.includes("http")) {
          value = "url(" + value.replace(";", ");");
        }

        if (index > 0) {
          return (rebuiltLine += " " + value);
        }
        return (rebuiltLine += value);
      });

      rebuiltLine = rebuiltLine.replace("    ", "\t") + "\n";
      rebuiltFile += "    " + rebuiltLine;
    });
    // eslint-disable-next-line no-unused-vars
    // @ts-ignore: next-line
    sourceCssStream.on("close", function (line) {
      // eslint-disable-line no-unused-vars
      rebuiltFile += "}";
      if (dest) {
        const outputFile = fs.createWriteStream(dest);

        // @ts-ignore: next-line
        outputFile.once("open", function (fd) {
          outputFile.write(rebuiltFile);
          outputFile.end();
        });
        outputFile.on("close", function () {
          resolve(dest);
        });
      } else {
        const outputFile = fs.createWriteStream(src);

        // @ts-ignore: next-line
        outputFile.once("open", function (fd) {
          outputFile.write(rebuiltFile);
          outputFile.end();
        });
        outputFile.on("close", function () {
          resolve(src);
        });
      }
    });
  });
}
