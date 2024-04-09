import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Stack,
} from "@mui/material";

import { useState } from "react";

export const DialogComponent = () => {
	const [dialog, setDialog] = useState(false);

	return (
		<>
			<Stack
				sx={{
					marginTop: "90px",
				}}>
				<Button onClick={() => setDialog(true)}>Open Dialog</Button>
				<Dialog open={dialog} onClose={() => setDialog(false)}>
					<DialogTitle>What is your favorite?</DialogTitle>
					<DialogContent>
						<DialogContentText>This is a statement</DialogContentText>
						<DialogActions onClick={() => setDialog(false)}>
							<Button>Angular</Button>
							<Button>React.js</Button>
							<Button>Vue.js</Button>
						</DialogActions>
					</DialogContent>
				</Dialog>
			</Stack>
		</>
	);
};
