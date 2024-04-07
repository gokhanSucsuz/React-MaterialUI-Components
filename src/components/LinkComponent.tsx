import { Link, Stack } from "@mui/material";
import React from "react";

export const LinkComponent = () => {
	return (
		<Stack
			style={{
				marginTop: "90px",
				gap: "20px",
			}}>
			<Link href="#" underline="none" variant="body1">
				Underline None
			</Link>
			<Link href="#" underline="hover" variant="h3" color="error">
				Underline Hover
			</Link>
			<Link href="#" underline="always" variant="subtitle2" color="error">
				Underline Always
			</Link>
		</Stack>
	);
};
