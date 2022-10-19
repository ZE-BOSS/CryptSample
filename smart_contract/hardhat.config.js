// https://eth-goerli.g.alchemy.com/v2/lnnh-PsBiz4NYja_ZAOYPoFlnn8A_asL

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/lnnh-PsBiz4NYja_ZAOYPoFlnn8A_asL',
      accounts: ['8278bcbbecb1ad735f98f9290b96d05338090194d7107775a1c9529d297ef5a7']
    }
  }
}
