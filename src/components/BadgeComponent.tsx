import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

export const BadgeComponent = () => {
	return (
		<Stack
			sx={{
				marginTop: "90px",
			}}
			direction="row"
			spacing={4}>
			<Badge badgeContent={50} color="error">
				<Mail />
			</Badge>
			<Badge badgeContent={44} max={40} color="error">
				<Mail />
			</Badge>
			<Badge
				badgeContent={60}
				max={30}
				color="warning"
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}>
				<Mail />
			</Badge>
		</Stack>
	);
};
