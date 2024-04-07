import { Box } from "@mui/material";
import React from "react";

export const BoxComponent = () => {
	return (
		<>
			<Box
				sx={{
					marginTop: "120px",
					backgroundColor: "error.light",
					width: 100,
					height: 100,
					color: "white",
					textAlign: "center",
					alignItems: "center",
					padding: "50px",
					"&:hover": {
						backgroundColor: "info.main",
					},
					borderRadius: "20px",
				}}>
				This is a box
			</Box>
		</>
	);
};
