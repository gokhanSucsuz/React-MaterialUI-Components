import { Typography } from "@mui/material";

const TypographyPage = () => {
	return (
		<>
			<Typography variant="h1">H1</Typography>
			<Typography variant="h2">H1</Typography>
			<Typography variant="h3">H1</Typography>
			<Typography variant="overline">Overline</Typography>
			<Typography variant="h3" align="center">
				H3
			</Typography>
			<Typography variant="h3" align="right">
				H3
			</Typography>

			<Typography variant="h1" component="h4">
				H1
			</Typography>
			<Typography variant="subtitle1">Subtitle1</Typography>
			<Typography variant="subtitle2">Subtitle2</Typography>
			<Typography variant="caption">Caption is span</Typography>
			<Typography variant="overline">Overline is span</Typography>
			<Typography variant="button">Button is span</Typography>
		</>
	);
};

export default TypographyPage;
