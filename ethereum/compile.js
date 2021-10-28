const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// find build folder
const buildPath = path.resolve(__dirname, "build");

// delete the build folder
fs.removeSync(buildPath);

// get the Campaign.sol file
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");

// get the content of the Campaign.sol file
const source = fs.readFileSync(campaignPath, "utf-8");

// compile the contents of the file
const output = solc.compile(source, 1).contracts;

// create the build folder
fs.ensureDirSync(buildPath);

/* loop through the contracts in the output variable
and pass contents to a file in the build folder */
for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
