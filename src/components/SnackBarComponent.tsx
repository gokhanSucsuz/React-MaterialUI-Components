import { Close } from "@mui/icons-material";
import { Button, IconButton, Snackbar, Stack } from "@mui/material";
import React, { useState } from "react";

export const SnackBarComponent = () => {
	const [snackbar, setSnackbar] = useState(false);
	const action = (
		<>
			<Button>Take it back</Button>
			<IconButton onClick={() => setSnackbar(false)}>
				<Close
					sx={{
						color: "white",
					}}
				/>
			</IconButton>
		</>
	);
	const handleClick = () => {
		setSnackbar(true);
	};
	return (
		<>
			<Stack
				sx={{
					marginTop: "90px",
				}}>
				<Button
					variant="outlined"
					color="secondary"
					size="small"
					onClick={handleClick}>
					Open Snackbar
				</Button>
				<Snackbar
					open={snackbar}
					onClose={() => setSnackbar(false)}
					message="Error Message!"
					action={action}
					autoHideDuration={4000}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
				/>
			</Stack>
		</>
	);
};
