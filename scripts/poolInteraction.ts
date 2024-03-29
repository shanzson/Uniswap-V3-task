import { ethers } from 'ethers'
import { Pool } from '@uniswap/v3-sdk'
import { Token } from '@uniswap/sdk-core'
import { abi as IUniswapV3PoolABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import { abi as IUniswapV3FactoryABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Factory.sol/IUniswapV3Factory.json'

import * as dotenv from "dotenv";

const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_RPC_URL)

// const poolAddress = '0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8'

// const poolContract = new ethers.Contract(poolAddress, IUniswapV3PoolABI, provider)

const factoryAddress = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

const factoryContract = new ethers.Contract(factoryAddress, IUniswapV3FactoryABI, provider)

async function main() {
    const poolAdd = await factoryContract.getPool (
    "0x4d582295afB968eA3b9492c5ec594b830D180E8d",
    "0xC07DDD7Cf136e12C97c0488A02052a16c573b30C",
    3000);
    console.log("PoolAdd: ", poolAdd);
}

main();
// interface Immutables {
//   factory: string
//   token0: string
//   token1: string
//   fee: number
//   tickSpacing: number
//   maxLiquidityPerTick: ethers.BigNumber
// }

// interface State {
//   liquidity: ethers.BigNumber
//   sqrtPriceX96: ethers.BigNumber
//   tick: number
//   observationIndex: number
//   observationCardinality: number
//   observationCardinalityNext: number
//   feeProtocol: number
//   unlocked: boolean
// }

// async function getPoolImmutables() {
//   const [factory, token0, token1, fee, tickSpacing, maxLiquidityPerTick] = await Promise.all([
//     poolContract.factory(),
//     poolContract.token0(),
//     poolContract.token1(),
//     poolContract.fee(),
//     poolContract.tickSpacing(),
//     poolContract.maxLiquidityPerTick(),
//   ])

//   const immutables: Immutables = {
//     factory,
//     token0,
//     token1,
//     fee,
//     tickSpacing,
//     maxLiquidityPerTick,
//   }
//   return immutables
// }

// async function getPoolState() {
//   const [liquidity, slot] = await Promise.all([poolContract.liquidity(), poolContract.slot0()])

//   const PoolState: State = {
//     liquidity,
//     sqrtPriceX96: slot[0],
//     tick: slot[1],
//     observationIndex: slot[2],
//     observationCardinality: slot[3],
//     observationCardinalityNext: slot[4],
//     feeProtocol: slot[5],
//     unlocked: slot[6],
//   }

//   return PoolState
// }

// async function main() {
//   const [immutables, state] = await Promise.all([getPoolImmutables(), getPoolState()])

//   const TokenA = new Token(3, immutables.token0, 6, 'USDC', 'USD Coin')

//   const TokenB = new Token(3, immutables.token1, 18, 'WETH', 'Wrapped Ether')

//   const poolExample = new Pool(
//     TokenA,
//     TokenB,
//     immutables.fee,
//     state.sqrtPriceX96.toString(),
//     state.liquidity.toString(),
//     state.tick
//   )
//   console.log(poolExample)
// }

// main()