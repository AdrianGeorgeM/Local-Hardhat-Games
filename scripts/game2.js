const gameAddr = '0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE';
const contractName = 'AdrianGame2';

async function main() {
	const game = await hre.ethers.getContractAt(contractName, gameAddr);
	const setX = await game.setX(25);
	await setX.wait();
	const setY = await game.setY(25);
	await setY.wait();
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
