import { Box, Paper } from "@mui/material";

export const PaperComponent = () => {
	return (
		<Box
			sx={{
				display: "flex",
				marginTop: "90px",
				gap: "20px",
			}}>
			<Paper
				elevation={1}
				sx={{
					width: 100,
					height: 100,
				}}></Paper>
			<Paper
				elevation={2}
				sx={{
					width: 100,
					height: 100,
				}}></Paper>
			<Paper
				elevation={12}
				sx={{
					width: 100,
					height: 100,
				}}></Paper>
			<Paper
				elevation={18}
				sx={{
					width: 100,
					height: 100,
				}}></Paper>
			<Paper
				elevation={22}
				sx={{
					width: 100,
					height: 100,
				}}></Paper>
			<Paper
				variant="outlined"
				sx={{
					width: 100,
					height: 100,
				}}></Paper>
			<Paper
				variant="outlined"
				square
				sx={{
					width: 100,
					height: 100,
				}}></Paper>
		</Box>
	);
};
