var Web3 = require('web3');
var fs = require('fs');

var web3 = new Web3('http://localhost:8545');
var eth_node_url = 'http://localhost:8545'; // TODO: remote URL
//web3.setProvider(new web3.providers.HttpProvider(eth_node_url));

var data = fs.readFileSync(process.stdin.fd).toString().split("\n");
data.forEach(function(item,index) {
  var account = "0x"+item.split("0x")[1]
  web3.eth.getBalance(account,function(error,value) {
    if(error) {
      console.log(account + " can not find")
    } else {
      console.log(account + " has " + value + " Wei")
    }
  })
})
