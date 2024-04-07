import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const AppBarComponent = () => {
	const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElement(e.currentTarget);
	};
	const openControl = Boolean(anchorElement);
	const handleClose = () => {
		setAnchorElement(null);
	};
	return (
		<>
			<AppBar color="success">
				<Toolbar>
					<IconButton>
						<AppsIcon />
					</IconButton>
					<Typography flexGrow={3} variant="h5" component="div">
						Mui Components
					</Typography>
					<Stack direction="row">
						<Button
							sx={{
								color: "white",
							}}>
							<NavLink
								to="/"
								style={{ color: "inherit", textDecoration: "none" }}>
								Home
							</NavLink>
						</Button>
						<Button
							sx={{
								color: "white",
							}}
							onClick={handleClick}>
							Components
						</Button>
						<Button
							sx={{
								color: "white",
							}}>
							About
						</Button>
						<Button
							sx={{
								color: "white",
							}}>
							Contact
						</Button>
					</Stack>
					<Menu
						anchorEl={anchorElement}
						open={openControl}
						onClose={handleClose}>
						<MenuItem onClick={handleClose}>
							<NavLink
								to="/typography"
								style={{ color: "inherit", textDecoration: "none" }}>
								Typography
							</NavLink>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<NavLink
								to="/buttons"
								style={{ color: "inherit", textDecoration: "none" }}>
								Buttons
							</NavLink>
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</>
	);
};
