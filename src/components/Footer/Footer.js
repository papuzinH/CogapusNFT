import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Discord from "../../public/assets/discord.svg";
import Logo from "../../public/assets/logo.svg";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_container}>
				<div className={styles.footer_logo}>
					<img src={Logo} alt="logo" />
				</div>
				<div className={styles.footer_socialmedia}>
					<a
						href="https://twitter.com/cogapus"
						target="_blank"
						rel="noreferrer">
						<TwitterIcon />
					</a>
					<a href="https://discord.gg/2Z8Y4Y4" target="_blank" rel="noreferrer">
						<img src={Discord} alt="discord" />
					</a>
					<a
						href="https://www.instagram.com/cogapus/"
						target="_blank"
						rel="noreferrer">
						<InstagramIcon />
					</a>
				</div>
				<div className={styles.footer_credits}>
					<p>© 2021 Cogapus. All Rights Reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
