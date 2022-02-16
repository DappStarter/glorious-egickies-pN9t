require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain provide harvest brave surge slam'; 
let testAccounts = [
"0x8e3cb24e2135dc1e6628ba14adfe1dbd7798ad24ffef8814e1540df1039846fc",
"0xc158e9a123079725a35377da762182f0b6728677a7e22cb91b0b6834db070978",
"0x34d57bbd351f7d37a10d7978ac8b5df7682521c96bd9f6faa0b17c9cf4363e3a",
"0xb0b6e078904bc4aed05f31c2daf01d136cabbcbae7ff694277dbdd33c4d39f86",
"0xa932689c386a2364274c7d8b4ebebd27d630a216ed252fb086f44c2e32b15fe7",
"0xc10715d726579182158577a01a2c8bda959a5e678512f8ebf36636a6b5479da0",
"0xb28a4974e5954d02ed30140f73158af929a08980223c42977ba955e791f3775b",
"0xec5c38436b1430756b10516ab965f37e0d7a6169203487cc10891cad7a5c1db8",
"0x85f699928b8bdc5ccd0e47ddbf3a679855514586b185753455f9ac1831ad6447",
"0xda63e5eb6e6d7b4409704a90ea02360627ca18e242b85454c43e4cd2a0148a51"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

