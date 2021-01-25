"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
var path = require("path");
var fs_extra_1 = require("fs-extra");
var readline_1 = require("linebyline");
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
class ScssVar2CssVar {
  // @ts-ignore: next-line
  convert(src, dest) {
    // @ts-ignore: next-line
    return new Promise((resolve, reject) => {
      var sourceCssStream = readline_1["default"].createInterface({
        input: fs_extra_1["default"].createReadStream(
          path.resolve(__dirname, src)
        ),
      });
      var rebuiltFile = ":root{";
      var skippingLine = false;
      sourceCssStream.on("line", function (line) {
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
        var rebuiltLine = "";
        var currentLineWords = line.split(" ");
        var skippingWord = false;
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
            var oldVariable = value
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
        rebuiltFile += "}";
        if (dest) {
          var outputFile_1 = fs_extra_1["default"].createWriteStream(dest);
          // @ts-ignore: next-line
          outputFile_1.once("open", function (fd) {
            outputFile_1.write(rebuiltFile);
            outputFile_1.end();
          });
          outputFile_1.on("close", function () {
            resolve(dest);
          });
        } else {
          var outputFile_2 = fs_extra_1["default"].createWriteStream(src);
          // @ts-ignore: next-line
          outputFile_2.once("open", function (fd) {
            outputFile_2.write(rebuiltFile);
            outputFile_2.end();
          });
          outputFile_2.on("close", function () {
            resolve(src);
          });
        }
      });
    });
  }
}
