<template>
  <v-app>
  <v-container>
    <v-flex md12 xs12>
      <v-row>
        <v-col md6>
          <span>Wallet address - {{walletAddress}} </span>
        </v-col>
        <v-col md6>
          <span>Current debt celling - {{debtCelling}}</span>
        </v-col>
      </v-row>
      <v-row v-if='walletAddress'>
        <v-col md6>
          <v-text-field v-model='scAddress' label='Smart contract address'></v-text-field>
        </v-col>
        <v-col md6>
          <v-textarea v-model='abi' label='abi'></v-textarea>
        </v-col>
      </v-row>
      <v-row v-if='walletAddress'>
        <v-col md1>
          <v-text-field v-model='amountToBorrow' label='Amount to borrow'></v-text-field>
        </v-col>
        <v-col md2>
          <v-select v-on:change='changeContractData' v-model='selectVault' :items='vaults' label='Choose vault to interact with'
                    item-text="text"
                    item-value="value"></v-select>
        </v-col>
      </v-row>
      <v-row v-if='walletAddress'>
        <v-col md2>
          <v-btn color='#0082c3' v-on:click='borrowToken'>Borrow</v-btn>
        </v-col>
        <v-col md6>
          <v-btn color='#0082c3' v-on:click='subscribeSmartContractEvent'>Subscribe smart contract events</v-btn>
        </v-col>
        <v-col md6>
          <v-btn color='#fe5800' v-on:click='unSubscribeSmartContractEvent'>Unsubscribe smart contract events</v-btn>
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
  </v-app>
</template>

<script>
const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider);
import vaultsContracts from "./data/vaultContracts"

export default {
  name: 'App',
  data() {
    return {
      walletAddress: "",
      scAddress: vaultsContracts.vaultvGhst.smartContractAddress,
      abi: JSON.stringify(vaultsContracts.vaultvGhst.abi),
      subscription: null,
      amountToBorrow: 0,
      debtCelling: 0,
      selectVault: 'vaultvGhst',
      vaults: [
        {text :'vaultvGhst', value: 'vaultvGhst'},
        {text: 'vaultCamWMatic', value: 'vaultCamWMatic'},
        {text: 'activeSc', value: 'activeSc'}
      ]
    }
  },
  async created() {
    this.debtCelling = await this.getDebtCeiling();
  },
  async mounted() {
    console.log(web3);
    let account = await web3.eth.requestAccounts()
    if(account && account.length > 0) {
      this.walletAddress=account.pop();
    }
  },
  methods: {
    async borrowToken() {
      let contract = new web3.eth.Contract(JSON.parse(this.abi), this.scAddress);
      let debtCeilling = await contract.methods.getDebtCeiling().call();
      if(debtCeilling > 0 ) {
        const vaultId = await contract.methods.tokenOfOwnerByIndex(this.walletAddress, 0).call();
        console.log("vault id: " + vaultId);
        console.log(await contract.methods.borrowToken(vaultId, this.amountToBorrow).send({ from: this.walletAddress }), function(error, transactionHash){
          if(error) {
            console.log(error);
          }
          console.log(transactionHash);
        });
      } else {
        console.log("Debt ceiling still 0  ...");
      }
    },
    async getDebtCeiling() {
      let contract = new web3.eth.Contract(JSON.parse(this.abi), this.scAddress);
      const debtCeiling = await contract.methods.getDebtCeiling().call();
      console.log(debtCeiling);
      return web3.utils.fromWei(debtCeiling);
    },
    async changeContractData(event) {
      console.log(event);
      this.scAddress = vaultsContracts[event].smartContractAddress;
      this.abi = JSON.stringify(vaultsContracts[event].abi);
      this.debtCelling = await this.getDebtCeiling();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
