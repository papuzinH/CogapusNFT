import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GifLoader from "../../public/assets/gif_loader.gif";
import styles from "./MintConfirmed.module.css";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function MintConfirmed(props) {
	const [open, setOpen] = React.useState(true);
	const handleClose = () => setOpen(false);

	return (
		<>
		<div className={styles.mint_overlay}></div>
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			className={styles.modal}>
			<div>
				{props.transactionConfirmed ? <CheckCircleRoundedIcon sx={{ fontSize: 100 }} color="success" /> : <img src={GifLoader} alt="loader" /> }
				<h2>
					{props.transactionConfirmed
						? "Transaction confirmed"
						: props.waitingTransaction
						? "Waiting for transaction confirmation"
						: "Waiting for confirmation"}
				</h2>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.transactionConfirmed
						? "You can close this modal"
						: props.waitingTransaction
						? ""
						: "Confirm the transaction in your wallet"}
				</Typography>
			</div>
		</Modal>
		</>
	);
}
