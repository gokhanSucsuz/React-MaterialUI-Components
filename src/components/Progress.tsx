import {
	Box,
	Button,
	CircularProgress,
	LinearProgress,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";

export const Progress = () => {
	const [value, setValue] = useState(0);
	value > 100 && setValue(0);
	return (
		<>
			<Stack
				sx={{ marginTop: "90px", position: "relative", display: "inline-flex" }}
				spacing={5}>
				<CircularProgress color="error" />
				<CircularProgress color="success" />
				<CircularProgress color="secondary" />
				<CircularProgress color="warning" />
				<Box
					sx={{
						position: "relative",
						display: "inline-flex",
					}}>
					<CircularProgress
						variant="determinate"
						value={value}
						color="warning"
					/>
					<Typography
						sx={{
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							display: "flex",
							position: "absolute",
							alignItems: "center",
							justifyContent: "center",
						}}>
						{value}
					</Typography>
				</Box>

				<LinearProgress color="info" />
				<LinearProgress color="error" />
				<LinearProgress color="success" />
				<LinearProgress variant="determinate" value={value} color="secondary" />
			</Stack>
			<Stack mt={10}>
				<Box
					sx={{
						position: "relative",
						display: "inline-flex",
					}}>
					<CircularProgress
						variant="determinate"
						value={value}
						color="warning"
					/>
					<Typography
						sx={{
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							display: "flex",
							position: "absolute",
							alignItems: "center",
							paddingLeft: "8px",
							justifyContent: "flex-start",
						}}>
						{value}
					</Typography>
				</Box>
				<LinearProgress variant="determinate" value={value} color="secondary" />
				<Button onClick={() => setValue(value + 10)}>Increase</Button>
			</Stack>
		</>
	);
};
