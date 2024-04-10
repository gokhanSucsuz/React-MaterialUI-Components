import { Box, Button, ButtonGroup, colors, createTheme } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
const theme2 = createTheme({
	palette: {
		secondary: {
			main: colors.blueGrey[800],
		},
	},
});
export const ThemeCustomize = () => {
	const [color, setColor] = useState("main.secondary");
	return (
		<ThemeProvider theme={theme2}>
			<Box
				sx={{
					marginTop: "90px",
					height: 400,
					bgcolor: color,
				}}></Box>

			<ButtonGroup size="small" color="info" sx={{ gap: 2, marginTop: 3 }}>
				<Button variant="contained" onClick={() => setColor("#52cdfd")}>
					Change color info
				</Button>
				<Button variant="contained" onClick={() => setColor("#21eb75")}>
					Change color success
				</Button>
				<Button variant="contained" onClick={() => setColor("#f7e605")}>
					Change color warning
				</Button>
				<Button variant="contained" onClick={() => setColor("#f5342d")}>
					Change color error
				</Button>
				<Button variant="contained" onClick={() => setColor("#ba29fd")}>
					Change color secondary
				</Button>
			</ButtonGroup>
		</ThemeProvider>
	);
};
