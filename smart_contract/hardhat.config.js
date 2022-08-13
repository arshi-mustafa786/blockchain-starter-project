//https://eth-ropsten.alchemyapi.io/v2/inyT9BzphCvsgrPMT4VULGzX1NI6mtdS

require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks :{
    ropsten : {
      url : "https://eth-ropsten.alchemyapi.io/v2/inyT9BzphCvsgrPMT4VULGzX1NI6mtdS",
      accounts : ['335539d899b9a2207abdaeae2db26586c93879434f4a3c7c228fc540ecb79ada']
    }
  }
};
