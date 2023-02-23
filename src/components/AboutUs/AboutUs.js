import React from "react";
import styles from "./AboutUs.module.css";
import HeroImg from "../../public/assets/fondo_hero.jpg";
import { ParallaxBanner } from "react-scroll-parallax";

const AboutUs = () => {
	return (
		<div id="About" className={styles.about_us}>
			<ParallaxBanner
				layers={[{ image: HeroImg, speed: -30 }]}
				style={{ height: "100%", position: "absolute" }}
			/>
			<div className={styles.about_us_overlay}></div>
			<div className={styles.about_us_container}>
				<div className={styles.about_us_content}>
					<h1>Get weed. <span >NFT Weed</span></h1>
					<p>
						Cogapus is an NFT collection grown by <span>Lautaro Hudson</span> and made of
						marihuana.
					</p>
					<p>
						We strongly believe that cannabis can help people in many different
						ways and we want to share that belief with the world. <span>Our goal is to
						educate people about the plant and its potential, in a fun and
						approachable way.</span>
					</p>
					<p>
						Cogapus is more than just an NFT collection, it is a <span>movement</span>. A
						movement to spread the love and raise awareness about the healing
						properties of cannabis.
					</p>
				</div>
			</div>
			<ParallaxBanner />
		</div>
	);
};

export default AboutUs;
