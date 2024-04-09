import { Drafts, Inbox } from "@mui/icons-material";
import {
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";

export const ListComponent = () => {
	return (
		<>
			<List
				sx={{
					marginTop: "90px",
				}}>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Inbox />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Drafts />
						</ListItemIcon>
						<ListItemText primary="Drafts" />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem alignItems="flex-start" disablePadding>
					<ListItemButton>
						<ListItemAvatar>
							<Avatar src="https://randomuser.me/api/portraits/women/37.jpg" />
						</ListItemAvatar>

						<ListItemText
							primary="Inbox"
							secondary={
								<>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary">
										Defne Kumsal
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</>
							}
						/>
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary="Drafts" />
					</ListItemButton>
				</ListItem>
			</List>
		</>
	);
};
