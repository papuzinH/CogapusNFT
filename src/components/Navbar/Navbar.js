import React from "react";
import WalletButton from "../WalletButton/WalletButton";
import styles from "./Navbar.module.css";
import Logo from "../../public/assets/logo.svg";

const Navbar = () => {
	const [nav, setNav] = React.useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNav(true);
		} else {
			setNav(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<header>
			<nav
				className={
					nav ? `${styles["navbar"]} ${styles["navbar_active"]}` : styles.navbar
				}>
				<div className={styles.logo}>
					<a href="#">
						<img src={Logo} alt="logo" />
					</a>
				</div>
				<ul className={styles.navbar_items}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#About">About</a>
					</li>
					<li>
						<a href="#Mint_section">Mint</a>
					</li>
					<li>
						<a href="#FAQ">FAQ</a>
					</li>
				</ul>
				<div className={styles.wallet_button}>
					<WalletButton />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
