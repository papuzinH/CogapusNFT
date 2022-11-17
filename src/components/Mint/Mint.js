import { React, useState } from "react";
import styles from "./Mint.module.css";
import Coguito from "../../public/assets/coguito.svg";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { Parallax } from "react-scroll-parallax";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Web3 from "web3";
import {
	useAddress,
	useWalletProvider,
	useBalance,
} from "../../contexts/OnboardContext";
import { factoryAddress, factoryAbi } from "../../services/onboard/contract";
import { Tooltip } from "@mui/material";
import WalletButton from "../WalletButton/WalletButton";
import MintConfirmed from "../MintConfirmed/MintConfirmed";

const Mint = () => {
	const [counter, setCounter] = useState(1);
	const [tokenPrice, setTokenPrice] = useState(0);
	const [total, setTotal] = useState(0);
	const [flip, set] = useState(false);
	const propsSpring = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		reverse: flip,
		onRest: () => set(!flip),
	});
	const [waitingConfirm, setWaitingConfirm] = useState(false);
	const [waitingTransaction, setWaitingTransaction] = useState(false);
	const [transactionConfirmed, setTransactionConfirmed] = useState(false);

	const handleIncrement = () => {
		setCounter(counter + 1);
	};

	const handleDecrement = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	useEffect(() => {
		setTotal(counter * tokenPrice);
	}, [counter, tokenPrice]);

	const address = useAddress();

	useEffect(() => {
		const getContract = async () => {
			const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);
			const price = await myContract.methods
				.cogoPrice()
				.call()
				.catch(function (error) {
					return false;
				});
			console.log(price);
			const valueEth = web3.utils.fromWei(`${price || 0}`, "ether");
			setTokenPrice(valueEth);
		};

		getContract();
	}, [address]);

	const balance = useBalance();
	const provider = useWalletProvider();
	const web3 = new Web3(provider);

	const [userBalance, setUserBalance] = useState(0);

	useEffect(() => {
		if (address) {
			if (balance) {
				const valueEth = web3.utils.fromWei(`${balance}`, "ether");
				const totalFixed = parseFloat(valueEth).toFixed(4);
				setUserBalance(totalFixed);
			}
		} else {
			setUserBalance(0);
		}
	}, [web3.utils, balance, address]);

	const handleMint = async () => {
		console.log("MINT!");
		setWaitingConfirm(true);
		try {
			const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);

			const saleStarted = await myContract.methods
				.saleStarted()
				.call()
				.catch(function (error) {
					return false;
				});

			const publicSaleStarted = await myContract.methods
				.merkleEnabled()
				.call()
				.catch(function (error) {
					return false;
				});

			const price = await myContract.methods
				.cogoPrice()
				.call()
				.catch(function (error) {
					return false;
				});

			setTokenPrice(price);

			console.log("Sale Started", saleStarted);
			console.log("Sale Started", publicSaleStarted);
			console.log("Price", price);

			const count = 1;

			const mintParams = {
				proof: ["0x0000000000000000000000000000000000000000"],
				leaf: "0x0000000000000000000000000000000000000000",
				count: counter,
			};

			const total = parseInt(counter) * parseFloat(price);
			// const totalFixed = parseFloat(total.toFixed(4));
			// const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');
			await myContract.methods
				.mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.count))
				.send({ from: address, value: total })
				.once("transactionHash", function (hash) {
					// setUserConfirmation(`success`);
					// setHash(hash);
					console.log("Transaction Hash", hash);
					setWaitingTransaction(true);
				})
				.once("receipt", function (receipt) {
					// setBlChainConfirmation(`success`);
					// setTimeout(() => {
					//   setSuccess(true);
					// }, 1000);
					console.log("Transaction Confirmed", receipt);
					setTransactionConfirmed(true);
					setTimeout(() => {
						setWaitingConfirm(false);
					}, 2000);

				})
				.on("error", function (error, receipt) {
					// handleError(error);
					console.log("Error", error);
					setWaitingConfirm(false);
				});
		} catch (error) {}
	};

	console.log("Waiting Confirm", waitingConfirm);

	return (
		<div id="Mint_section" className={styles.mint}>

			{waitingConfirm && <MintConfirmed transactionConfirmed={transactionConfirmed} waitingTransaction={waitingTransaction} />}	
			<div className={styles.mint_overlay} />

			<div className={styles.mint_content}>
				<h2>Get high!</h2>
				<animated.h3 style={propsSpring}>Smoke some COGAPUS</animated.h3>
				<Parallax
					speed={15}
					translateX={["100px", "100px"]}
					translateY={["-1800px", "100px"]}
					style={{ width: "100%" }}>
					<img src={Coguito} alt="coguito" />
				</Parallax>
			</div>
			<div className={styles.mint_button_container}>
				<div className={styles.mint_calc_container}>
					<p>How many grams?</p>
					<div className={styles.counter_mint}>
						<button
							disabled={!address}
							onClick={handleDecrement}
							className={styles.counter_button}>
							<RemoveRoundedIcon />
						</button>
						<p>{counter}</p>
						<button
							disabled={!address}
							onClick={handleIncrement}
							className={styles.counter_button}>
							<AddRoundedIcon />
						</button>
					</div>
					<div className={styles.total_price}>
						<p>Total price:</p>
						<p>{total} ETH</p>
					</div>
					<Tooltip
						title={!address ? "You need to connect your wallet to mint" : ""}
						placement="top"
						disableFocusListener>
						<button
							onClick={handleMint}
							className={
								address ? styles.mint_button : styles.mint_button_disabled
							}>
							Mint
						</button>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default Mint;
