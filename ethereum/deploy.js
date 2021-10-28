const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "type job olive correct damp vote fold layer lumber list garment enable",
  "https://rinkeby.infura.io/v3/b74b7fcce44e42af8b71dfad0e7a71a9"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};

deploy();
