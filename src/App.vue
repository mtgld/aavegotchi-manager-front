<template>
  <v-app>
  <v-container>
    <v-container md12 xs12>
      <v-row>
        <v-col md2>
          <span>Connected Wallet <br> {{userAddressFormatted}} </span>
        </v-col>
        <v-col md2>
          <span>Metaguild<br> <a href='https://discord.gg/metaguild'>Discord</a></span>
        </v-col>
        <!-- <v-col md2> 
          <span>Best Aavegotchi Guild <br> <a href='https://metaguild.com/'>Gotchi FArmy Gang</a></span>
        </v-col> -->
        <v-col md2>
          <span>Source Code <br> <a href='https://github.com/mtgld/aavegotchi-manager-front'>Github</a></span>
        </v-col>
        <v-col md2>
          <span>Based on Soulk's Source Code <br> <a href='https://twitter.com/soulk__'>https://twitter.com/soulk__</a></span>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <!-- <v-row>
        <v-col md12>
          <v-card outlined >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  Discord Aavegotchi Manager
                </v-list-item-title>
                <v-list-item-subtitle>Hey frens this page will explain how the aavegotchi-manager work and guide you to the process of auto-petting and managing your lendings. </v-list-item-subtitle>
                <v-list-item-subtitle>All informations with a complete FAQ in the discord</v-list-item-subtitle>

              </v-list-item-content>

              <v-list-item-avatar
                  tile
                  size="80"
              >
                <v-img
                    alt="lending"
                    src="https://app.aavegotchi.com/images/aavegotchi-dark.gif"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-text>
              <p></p>
              <p>You will have to perform 4 steps (2 optionnal) to make it work : </p>
              <p>- Use the <strong>Aavegotchi Manager NFT</strong> panel on this page to see if you hold the NFT needed to access the service, if not you can mint it here currently for the cost of <strong>{{nftPrice}} GHST</strong>. It will give you a lifetime access to a lending/pet bot with some nice push notifications in your DM.<br>You'll also be able to participate in the discussion about the next evolution of the manager.</p>
              <p>- Join the discord app to be able to use commands -> Reach for <strong>#aavegotchi-manager</strong> channel -> Use command <strong>/register your-wallet-address</strong></p>
              <p>- (Optionnal) Use the <strong>Pet authorization</strong> panel on this page to allow the bot to perform auto-petting actions on your gotchi(s)</p>
              <p>- (Optionnal) Use the <strong>Lending authorization</strong> panel on this page to allow the bot to perform lendings actions on your gotchi(s) (listing, unlisting, claiming)</p>
              <p>You can review all available command by clicking on the button below</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = true"
              >
                CLIck to reveal available commands
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                  v-if="reveal"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <v-card-title class="text-h5 mb-1">User Management</v-card-title>
                  <v-card-text class="text-left">
                    <p><strong>/regiser-user</strong> : Register the user to be able to use commands</p>
                    <p><strong>/delete-user</strong> : Unsubscribe from the gotchi manager</p>
                  </v-card-text>
                </v-card-text>
                <v-card-text class="pb-0">
                  <v-card-title class="text-h5 mb-1">User Informations</v-card-title>
                  <v-card-text class="text-left">
                    <p><strong>/user-parameters</strong> : Get current lending parameters for the user</p>
                    <p><strong>/news</strong> : Get news about current managed gotchis / parcels</p>
                    <p><strong>/toggle-news</strong> : Activate or deactivate news about current managed gotchis / parcels</p>
                    <p><strong>/inspect</strong> : Inspect an other user wallet</p>
                  </v-card-text>
                </v-card-text>
                <v-card-text class="pb-0">
                  <v-card-title class="text-h5 mb-1">Lending Management</v-card-title>
                  <v-card-text class="text-left">
                    <p><strong>/resume-lending</strong> : Start or restart lending for all gotchis managed</p>
                    <p><strong>/stop-lending</strong> : Stop all lending and cancel current listing</p>
                    <p><strong>/update-lending-options</strong> : Change all gotchis lending parameters</p>
                    <p><strong>/update-third-party</strong> : Update the third party address</p>
                    <p><strong>/update-whitelist</strong> : Update the whitelist id</p>
                    <p><strong>/toggle-lending-channelable</strong> : Stop or resume all lending for gotchi that have channel available</p>
                  </v-card-text>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                      text
                      color="teal accent-4"
                      @click="reveal = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row> -->
      <!-- <v-row v-if='activated'>
        <v-col md6>
          <v-card outlined >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  Aavegotchi Manager NFT
                </v-list-item-title>
                <v-list-item-subtitle><strong>This NFT will give you full access to the manager (petting / lendings / news)</strong></v-list-item-subtitle>
                <v-list-item-subtitle><strong>The mint price is {{nftPrice}} GHST (subject to change over time)</strong></v-list-item-subtitle>
                <v-list-item-subtitle><strong>If you are a guild we can get in touch to install the manager directly on your server and having your own dedicated manager instance with potential specific needs</strong></v-list-item-subtitle>
                <v-list-item-subtitle>Address of the nft contract : <a href='https://polygonscan.com/address/0x8679b8e5217767d8fa356629cbaefce679b91936'>https://polygonscan.com/address/0x8679b8e5217767d8fa356629cbaefce679b91936</a></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn
                  outlined
                  rounded
                  text
                  v-on:click='authorizeGhstSpending'
                  :disabled='allowanceGhst > Number(nftPrice)'
              >
              Authorize GHST spending
              </v-btn>
              <v-btn
                  outlined
                  rounded
                  text
                  v-on:click='revokeGhstSpending'
                  :disabled='allowanceGhst < Number(nftPrice)'
              >
                Revoke GHST spending
              </v-btn>
              <v-btn
                  outlined
                  rounded
                  text
                  v-on:click='mintNft'
                  :disabled='allowanceGhst < Number(nftPrice)'
              >
                Mint Nft
              </v-btn>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Spending allowed : <span>{{web3.utils.fromWei(allowanceGhst)}} GHST</span></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title>Nft hold : <span>{{numberOfNftHold}}</span></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row> -->

      <!-- <v-row v-if='activated'>
          <v-select
              :items="items"
              v-model="operatorAddress"
              label="SELECT GUILD"
          ></v-select>
      </v-row> -->
      <v-row v-if='activated'>
        <v-col md6>
          <v-card outlined >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  Setting Lending Operator
                </v-list-item-title>
                <v-list-item-subtitle>Please select gotchis you want Metaguild to manage for you. You need to send one transaction to the network, which will authorize the address controlled by the Metaguild team to manage listings of your gotchis. Managing listing is the only permission operator will get.</v-list-item-subtitle>
                <v-list-item-subtitle><strong>Your gotchi need to be in your wallet and not borrowed to appears in this list.</strong></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                  tile
                  size="80"
              >
                <v-img
                    alt="metaguild"
                    src="https://pbs.twimg.com/profile_images/1559524780402958336/EJoJy-nF_400x400.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-data-table
                dense
                v-model="selectedGotchis"
                :headers="headers"
                :items="userGotchis"
                item-key="id"
                show-select
                class="elevation-1"
                :sort-by="['isLendingOperator']"
            >
            </v-data-table>

            <v-card-actions>
              <v-btn
                  outlined
                  rounded
                  text
                  :disabled='userGotchis.length === 0 || selectedGotchis.filter(gotchi => gotchi.isLendingOperator).length === selectedGotchis.length'
                  v-on:click='authorizeLending'
              >
                Authorize
              </v-btn>
              <v-btn
                  outlined
                  rounded
                  text
                  :disabled='userGotchis.length === 0 || selectedGotchis.filter(gotchi => !gotchi.isLendingOperator).length === selectedGotchis.length'
                  v-on:click='revokeLending'
              >
                Revoke
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <v-col md6>
          <v-card outlined >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  Pet authorization
                </v-list-item-title>
                <v-list-item-subtitle>Authorize the bot to take care of your gotchi</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                  tile
                  size="80"
              >
                <v-img
                    alt="petting"
                    src="https://wiki.aavegotchi.com/kinship/petgotchi.gif"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-card-text>
              <div v-if='isPetOperatorSet'>You already validated the transaction to accept the pet operator ! Good job ! :)</div>
              <div v-if='!isPetOperatorSet'>You need to accept the transction to let the manager pet your gotchi !</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  outlined
                  rounded
                  text
                  :disabled='isPetOperatorSet'
                  v-on:click='authorizePetting'
              >
                Authorize
              </v-btn>
              <v-btn
                  outlined
                  rounded
                  text
                  :disabled='!isPetOperatorSet'
                  v-on:click='revokePetting'
              >
                Revoke
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>
  </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider);
import diamondcontract from "./data/diamondcontract"
// import aavegotchimanagercontract from '@/data/aavegotchimanagercontract';
import ghstcontract from '@/data/ghstcontract';

export default {
  name: 'App',
  data() {
    return {
      web3: web3,
      reveal: false,
      items: [{
        text: "METAGUILD - operator address - 0xc0e8b0E7981E2E254D4c22B6A0BC4223933A2D1d",
        value: "0xc0e8b0E7981E2E254D4c22B6A0BC4223933A2D1d"
      // },
      // {
      //   text: "MMGR - operator address - 0xa4b7ED1cd909A9741c8C18432cffaF3632951AbF",
      //   value: "0xa4b7ED1cd909A9741c8C18432cffaF3632951AbF"
      // },
      // {
      //   text: "Soulk's lab - operator address - 0xa9575438851A7eFBa37bC35ebE2be558c4bA3055",
      //   value: "0xa9575438851A7eFBa37bC35ebE2be558c4bA3055"
      }],
      selectedGotchis: [],
      headers: [
        { text: 'Id', value: 'id'},
        { text: 'Name', value: 'name' },
        { text: 'Kinship', value: 'kinship' },
        { text: 'BRS', value: 'baseRarityScore' },
        { text: 'isLendingOperator', value: 'isLendingOperator' }
      ],
      operatorAddress: "0xc0e8b0E7981E2E254D4c22B6A0BC4223933A2D1d",
      operatorPanel : {
        petOperator: true,
        lendingOperator: true
      },
      numberOfNftHold: 0,
      allowanceGhst: "0",
      isPetOperatorSet: false,
      userAddress: "Not Connected",
      userAddressFormatted: "Not Connected",
      userGotchis: [],
      activated: false,
      aavegotchiContract: new web3.eth.Contract(diamondcontract.abi, diamondcontract.smartContractAddress),
      // aavegotchiManagerContract: new web3.eth.Contract(aavegotchimanagercontract.abi, aavegotchimanagercontract.smartContractAddress),
      ghstContract: new web3.eth.Contract(ghstcontract.abi, ghstcontract.smartContractAddress),
      // nftPrice: "20"
    }
  },
  async mounted() {
    let account = await web3.eth.requestAccounts()
    if(account && account.length > 0) {
      this.userAddress = account.pop().toLowerCase()
    }
    setInterval(this.updateUserAccount, 1000);
    setInterval(this.watchAavegotchiAccount, 30000);
  },
  watch: {
    userAddress() {
      this.userGotchis = []
      this.userAddressFormatted = this.userAddress === "Not Connected" ? this.userAddress : `${this.userAddress.substring(0, 5)}...${this.userAddress.substring(38)}`
      this.isPetOperatorSet = false
      if (this.userAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
        this.activated = true;
        // this.isPetOperator()
        this.loadGotchisList()
        // this.allowedGhstSpending()
        // this.getUserNft()
      } else {
        this.activated = false;
      }
    }
  },
  methods: {
    async updateUserAccount() {
      let account = await web3.eth.requestAccounts()
      if (account.length > 0 && account[0].toLowerCase() !== this.userAddress) {
        this.userAddress = account[0].toLowerCase()
      }
    },
    watchAavegotchiAccount() {
      // this.isPetOperator()
      this.loadGotchisList()
      // this.allowedGhstSpending()
      // this.getUserNft()
    },
    async isPetOperator() {
      this.isPetOperatorSet = await this.aavegotchiContract.methods.isPetOperatorForAll(this.userAddress,
          this.operatorAddress).call()
    },
    isLendingOperator(gotchiId) {
      return this.aavegotchiContract.methods.isLendingOperator(this.userAddress,
          this.operatorAddress, gotchiId).call()
    },
    authorizeLending() {
      const gotchiToAuthorizeLendingOperation = this.selectedGotchis.filter(gotchi => !gotchi.isLendingOperator)
      this.aavegotchiContract.methods.batchSetLendingOperator(this.operatorAddress,gotchiToAuthorizeLendingOperation.map(gotchi => [gotchi.id, true])).send({ from: this.userAddress })
      this.selectedGotchis = []
    },
    revokeLending() {
      const gotchiToRevokeLendingOperation = this.selectedGotchis.filter(gotchi => gotchi.isLendingOperator)
      this.aavegotchiContract.methods.batchSetLendingOperator(this.operatorAddress,gotchiToRevokeLendingOperation.map(gotchi => [gotchi.id, false])).send({ from: this.userAddress })
      this.selectedGotchis = []
    },
    // authorizePetting() {
    //   this.aavegotchiContract.methods.setPetOperatorForAll(this.operatorAddress,
    //       true).send({ from: this.userAddress })
    // },
    // revokePetting() {
    //   this.aavegotchiContract.methods.setPetOperatorForAll(this.operatorAddress,
    //       false).send({ from: this.userAddress })
    // },
    // authorizeGhstSpending() {
    //   this.ghstContract.methods.approve(aavegotchimanagercontract.smartContractAddress, web3.utils.toWei(this.nftPrice)).send({ from: this.userAddress })
    // },
    // revokeGhstSpending() {
    //   this.ghstContract.methods.decreaseAllowance(aavegotchimanagercontract.smartContractAddress, this.allowanceGhst).send({ from: this.userAddress })
    // },
    // async allowedGhstSpending() {
    //   this.allowanceGhst = await this.ghstContract.methods.allowance(this.userAddress,
    //       aavegotchimanagercontract.smartContractAddress).call()
    // },
    // mintNft() {
    //   this.aavegotchiManagerContract.methods.mint(this.userAddress,1, 0).send({ from: this.userAddress })
    // },
    // async getUserNft() {
    //   this.numberOfNftHold = await this.aavegotchiManagerContract.methods.balanceOf(this.userAddress).call()
    // },
    async loadGotchisList() {
      const query = `query getGotchiFromWallets {
        aavegotchis(first: 1000, where: {originalOwner_: {id_in: ["${this.userAddress}"]}}) {
          id
          name
          kinship
          baseRarityScore
        }
      }`
      let gotchisOfOwner = (await axios.post("https://subgraph.satsuma-prod.com/tWYl5n5y04oz/aavegotchi/aavegotchi-core-matic/api", { query: query })).data.data?.aavegotchis
      let userGotchis = []
      if (gotchisOfOwner !== null && gotchisOfOwner !== undefined ) {
        for(const gotchi of gotchisOfOwner) {
          gotchi["isLendingOperator"] = await this.isLendingOperator(gotchi.id)
          userGotchis.push(gotchi)
        }
      }
      this.userGotchis = userGotchis
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
  margin-top: 0px;
}
</style>
