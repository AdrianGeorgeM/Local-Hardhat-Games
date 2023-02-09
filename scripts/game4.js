const gameAddr = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';
const contractName = 'AdrianGame4';

async function main() {
	const game = await hre.ethers.getContractAt(contractName, gameAddr);

	const tx = await game.win(56);
	const receipt = await tx.wait();
	console.log(receipt);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
