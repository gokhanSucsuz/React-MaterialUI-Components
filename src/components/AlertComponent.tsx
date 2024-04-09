import { Alert, AlertTitle, Stack } from "@mui/material";
export const AlertComponent = () => {
	return (
		<>
			<Stack
				sx={{
					marginTop: "90px",
				}}
				spacing={2}>
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>Your process is success!
				</Alert>
				<Alert severity="warning">
					<AlertTitle>Warning</AlertTitle>Your process contains warnings!
				</Alert>
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>Your process contains errors!
				</Alert>
				<Alert severity="info">
					<AlertTitle>Info</AlertTitle>This is an info Alert.
				</Alert>
			</Stack>
		</>
	);
};
