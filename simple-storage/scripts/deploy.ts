import { ethers } from 'hardhat'

async function main() {
  const ssFact = await ethers.getContractFactory('SimpleStorage')

  const simpleStorage = await ssFact.deploy()
  await simpleStorage.deployed()
}

async function verify(addr: string, args: any[]) {}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
