const opto = require("opto")
const ejs = require("ejs")
const fs = require("fs")
var Hjson = require('hjson');

try
{
	function go()
	{
		const options = opto()

		const inFiles = options["_.multi"] || options._ ? [options._] : []

		if(!inFiles.length)
		{
			showHelp("No EJS files found or specified.")
			return
		}

		const optVarsSpecArray = options["O.multi"] || (options.O ? [options.O] : [])

		const optVars = optVarsSpecArray.reduce(gatherOptVarsFromSpec, { })

		inFiles.forEach(filename => {
				ejs.renderFile(filename, optVars)
					.then(result => {
								const outFName = filename.replace(/\.ejs/,".html")
								fs.writeFileSync(outFName, result, "utf-8")
								console.log("Wrote file " + outFName + " : " + outFName.length + " bytes")
						})
					.catch(err => {
							console.error("Error processing file " + filename + ": " + err.message)
						})
			})
	}

	// Given a native object representing option values and a spec, define/override
	// the new values.
	// A "spec" is either a JSON string or JSON file
	function gatherOptVarsFromSpec(optVars, spec)
	{
		var newVars = spec.trim().startsWith("{") ? JSON.parse(spec) : getObFromJSONFile(spec)
		return Object.assign({}, optVars, newVars)
	}

	function getObFromJSONFile(name)
	{
		const content = fs.readFileSync(name, "utf-8")
		if(name.endsWith("hjson"))
			return Hjson.parse(content)
		return JSON.parse(content)
	}

	function showHelp(err)
	{
		if(err)
			console.log(err)
		console.log(`
Usage: ejsrun <ejs1> [<ejs2> ...] -O <options1> [-O <options2> ...]
where:
	<ejs.n> is an EJS file or glob
	<options.n> is JSON options or JSON file or HJSON file
Example:
	ejsrun *.ejs pages/*.ejs -O {dev:true} -O myConfig.json
		`)
		if(err)
			process.exit(1)
	}

	go()
}
catch(err)
{
	console.error(err)
	process.exit(1)
}
