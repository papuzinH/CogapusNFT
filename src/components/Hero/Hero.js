import React from "react";
import styles from "./Hero.module.css";
import MintisLive from "../../public/assets/mint_live_text.png";
import Cogo from "../../public/assets/cogo.svg";
import HeroImg from "../../public/assets/hero_img.png";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
	return (
		<div id="hero" className={styles.hero}>
            
			<div className={styles.hero_overlay}></div>
			<div className={styles.hero_content}>
				<Parallax
					speed={15}
					translateX={["300px", "-300px"]}
					translateY={["0px", "0px"]}>
					<h1>
						Welcome to the <span>Cogapu's</span> verse
					</h1>

					<p>
						Here you can find the best NFTs in the 420 galaxy. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
						luctus venenatis, lectus magna fringilla urna.
					</p>
				</Parallax>
			</div>
			<div className={styles.hero_img}>
				<Parallax
					speed={15}
					translateX={["-300px", "300px"]}
					translateY={["0px", "0px"]}>
					<img src={HeroImg} alt="hero" />
				</Parallax>
			</div>
			<div className="mint_live_circle_sect">
				<div className="mint_live_circle">
					<span>
						<img src={Cogo} alt="" />
					</span>
					<span className="mint_live_text rotated-style">
						<img src={MintisLive} alt="" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Hero;
