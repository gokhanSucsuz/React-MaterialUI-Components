import { Box, Grid, Paper, styled } from "@mui/material";
import React from "react";

export const GridComponent = () => {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));
	return (
		<Box sx={{ mt: "120px" }}>
			<Grid container gap={2}>
				<Grid item xs={12} md={8}>
					<Item>8 units</Item>
				</Grid>
				<Grid item xs={12} md={3}>
					<Item>3 units</Item>
				</Grid>
				<Grid item xs={12} md={8}>
					<Item>8 units</Item>
				</Grid>
				<Grid item xs={12} md={5}>
					<Item>5 units</Item>
				</Grid>
				<Grid item xs={12} md={4}>
					<Item>4 units</Item>
				</Grid>
			</Grid>
		</Box>
	);
};
