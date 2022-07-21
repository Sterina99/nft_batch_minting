const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/5b8a1f8efbe34636bb0247408653d4dc'))
web3.currentProvider
// const nftBuild = require('../build/contracts/NFT.json')
// const nftContract = new web3.eth.contract(nftBuild.abi, nftBuild.networks[5777].address)

// const amountToMint = 5
// const gas = 450000

const main = async () => {
    //  const [account] = await web3.eth.getAccounts()
    
    const address = "0x66cEb78c34eA415e80f07585Ae5Df87EebE4860D"
    web3.eth.getBalance(address, (err, wei) => {  balance = web3.utils.fromWei(wei, 'ether')
balance.toString();
console.log(balance.toString())
    })
    

    // const baseCost = await nftContract.methods.cost().call()
    // const totalCost = baseCost * amountToMint

    // console.log(`Base cost of minting  | ${web3.utils.fromWei(baseCost.toString(), 'ether')}`)
    // console.log(`Total cost of minting | ${web3.utils.fromWei(totalCost.toString(), 'ether')}\n`)
    // console.log(`Gas fee: ${gas}\n`)

    // console.log(`Attempting to mint ${amountToMint} NFTs...\n`)

    // for (var i = 0; i < amountToMint; i++) {
    //     await nftContract.methods.mint().send({ from: account, value: totalCost, gas: gas })
    // }

    // const totalMinted = await nftContract.methods.walletOfOwner(account).call()

    // console.log(`Total NFTs minted: ${totalMinted.length}\n`)

    // for (var i = 0; i < totalMinted.length; i++) {
    //     const uri = await nftContract.methods.tokenURI(totalMinted[i]).call()
    //     console.log(`Metadata URI for token ${totalMinted[i]}: ${uri}`)
    // }
}

main()