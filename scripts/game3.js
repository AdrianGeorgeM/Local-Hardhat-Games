const gameAddr = '0x59b670e9fA9D0A427751Af201D676719a970857b';
const contractName = 'AdrianGame3';

async function main() {
	const game = await hre.ethers.getContractAt(contractName, gameAddr);

	const tx = await game.win(45);

	const receipt = await tx.wait();
	console.log(receipt);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
