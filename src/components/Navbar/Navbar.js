import React, { useState } from "react";
import WalletButton from "../WalletButton/WalletButton";
import styles from "./Navbar.module.css";
import Logo from "../../public/assets/logo.svg";
import Menu from "../../public/assets/menu-btn.svg";
import Close from "../../public/assets/close_btn.svg";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNav(true);
		} else {
			setNav(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<header className={styles.header}>
			<nav
				className={
					nav ? `${styles["navbar"]} ${styles["navbar_active"]}` : styles.navbar
				}>
				<div className={styles.logo}>
					<a href="#hero">
						<img src={Logo} alt="logo" />
					</a>
				</div>
				<ul className={styles.navbar_items}>
					<li>
						<a href="#hero">Home</a>
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
			<div className={styles.logo_mb}>
				<a href="#hero">
					<img src={Logo} alt="logo" />
				</a>
			</div>
			{!showMenu && (
			<div className={styles.menu_btn} onClick={() => handleShowMenu()}>
				<img src={Menu} alt="menu" />
			</div>
			)}
			{showMenu && (
			<MenuMobile handleShowMenu={handleShowMenu} />
			)}
		</header>
	);
};

const MenuMobile = ({ handleShowMenu }) => {
	return (
		<div className={styles.menu_mb}>
			<div className={styles.close_btn} onClick={() => handleShowMenu()}>
				<img src={Close} alt="close" />
			</div>

			<ul className={styles.navbar_items}>
				<li>
					<a href="#hero" onClick={()=>{handleShowMenu()}}>Home</a>
				</li>
				<li>
					<a href="#About" onClick={()=>{handleShowMenu()}}>About</a>
				</li>
				<li>
					<a href="#Mint_section" onClick={()=>{handleShowMenu()}}>Mint</a>
				</li>
				<li>
					<a href="#FAQ" onClick={()=>{handleShowMenu()}}>FAQ</a>
				</li>
			</ul>
			<div className={styles.wallet_button}>
				<WalletButton />
			</div>
		</div>
	);
};

export default Navbar;
