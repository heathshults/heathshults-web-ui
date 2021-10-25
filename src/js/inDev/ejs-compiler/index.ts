//imports
import util from "util";
import fs from "fs";
import ejs from "ejs";
import events from 'events';

//promisify
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// one way
let stream;
stream = fs.createReadStream("D://data.txt");
stream.on("data", function(data) {
  const chunk = data.toString();
  console.log(chunk);
}); 


// another way

stream = fs.createWriteStream("D://data.txt");
stream.write("Tutorial on Node.js");
stream.write("Introduction");
stream.write("Events");
stream.write("Generators");
stream.write("Data Connectivity");
stream.write("Using Jasmine"); 

//emitter way
const eventEmitter = new events.EventEmitter();
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});
eventEmitter.emit('data_received'); 

// another emitter way
const eventEmitter = events.EventEmitter;
const emitter = new eventEmitter();
emitter.on("newListener", function(eventName, listener) {
    console.log("Added listener for " + eventName + " events");
});
emitter.on('data_received', function() {});
emitter.on('data_received', function() {}); 

// converter
const pageModel = {
  content: "<p>This is some sample content. Located on the sample page.</p>",
};
async function render() {
  try {
    //create output directory
    await mkdir("dist", { recursive: true });

    //render ejs template to html string
    //pass pageModel in to render content
    const html = await ejs
      .renderFile("index.ejs", { model: pageModel })
      .then((output) => output);
    //create file and write html
    await writeFile("dist/index.html", html, "utf8");
  } catch (error) {
    console.log(error);
  }
}
render();


