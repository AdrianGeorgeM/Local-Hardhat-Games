const gameAddr = '0x0165878A594ca255338adfa4d48449f69242Eb8F';
const contractName = 'AdrianGame5';

async function main() {
	const game = await hre.ethers.getContractAt(contractName, gameAddr);

	const giveAllowance = await game.giveMeAllowance(10000); // 10000 is the amount of tokens you want to give to the contract
	await giveAllowance.wait();

	const mint = await game.mint(10000); // 10000 is the amount of tokens you want to mint
	await mint.wait();

	const tx = await game.win();
	const receipt = await tx.wait();
	console.log(receipt);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
