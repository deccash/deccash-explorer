var api = 'http://deccash.org:28287';
var donationAddress = "";
var blockTargetInterval = 240; // enter the block interval in seconds
var coinUnits = 100000000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  5000000000000; // enter the total supply in atomic units
var symbol = 'dxc'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "dxc": [
	["pool.deccash.org", "http://deccash.org:8117"]
 ]
};

var networkStat2 = {
    "dxc": [
	[""]
 ]
};
