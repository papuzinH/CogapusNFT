import React from "react";
import styles from "./FAQContainer.module.css";
import { ParallaxBanner } from "react-scroll-parallax";
import HeroImg from "../../public/assets/fondo_hero.jpg";
import Cogo from "../../public/assets/360.png";
import { Parallax } from "react-scroll-parallax";

const FAQContainer = () => {
	return (
		<div id="FAQ" className={styles.faq_container}>
			<ParallaxBanner
				layers={[{ image: HeroImg, speed: -30 }]}
				style={{ height: "100%", position: "absolute" }}
			/>
			<div className={styles.faq_container_overlay}></div>
            <Parallax speed={15}
					translateX={["50px", "0px"]}
					translateY={["-2400px", "400px"]}
					scale={["0", "1.5"]}
					style={{ width: "100%",top: "0"}}>
            <img src={Cogo} alt="cogo" className={styles.cogo} />
            </Parallax>
			<div className={styles.faq_content}>
				<h1>FAQ</h1>
				<div className={styles.faq_item}>
					<h2>What is Cogapus?</h2>
					<p>
						Cogapus is an NFT collection grown by Lautaro Hudson and made of
						marihuana. We strongly believe that cannabis can help people in many
						different ways and we want to share that belief with the world. Our
						goal is to educate people about the plant and its potential, in a
						fun and approachable way.
					</p>
				</div>
				<div className={styles.faq_item}>
					<h2>What is an NFT?</h2>
					<p>
						NFT stands for Non-Fungible Token. It is a digital asset that is
						unique and can be verified on the blockchain. NFTs are a new way to
						collect and trade digital assets. They are a way to prove ownership
						of a digital asset and to prove that it is unique.
					</p>
				</div>
				<div className={styles.faq_item}>
					<h2>What is the Cogapus collection?</h2>
					<p>
						The Cogapus collection is a collection of 10,000 NFTs. Each NFT is a
						unique piece of art that represents a different strain of cannabis.
						The collection is made of 10 different strains, each one with 1000
						NFTs. The collection is made of 10 different strains, each one with
						1000 NFTs.
					</p>
				</div>
				<div className={styles.faq_item}>
					<h2>How do I get a Cogapus NFT?</h2>
					<p>
						There are 2 ways to get a Cogapus NFT. You can either mint one or
						buy one from the secondary market. Minting a Cogapus NFT is the only
						way to get a Cogapus NFT for free. You can mint a Cogapus NFT by
						connecting your wallet to the Cogapus website and clicking the
						“Mint” button. You can also buy a Cogapus NFT from the secondary
						market. You can do this by connecting your wallet to the Cogapus
						website and clicking the “Buy” button.
					</p>
				</div>
				<div className={styles.faq_item}>
					<h2>How much does it cost to mint a Cogapus NFT?</h2>
					<p>
						It costs 0.05 ETH to mint a Cogapus NFT. This is the price of the
						gas fee. The gas fee is the fee that you pay to the Ethereum network
						to mint an NFT. The gas fee is paid in ETH.
					</p>
				</div>
			</div>

			<ParallaxBanner />
		</div>
	);
};

export default FAQContainer;
