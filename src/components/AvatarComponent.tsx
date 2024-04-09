import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

export const AvatarComponent = () => {
	return (
		<>
			<Stack
				sx={{
					marginTop: "90px",
				}}>
				<AvatarGroup max={4} spacing={5}>
					<Avatar src="https://randomuser.me/api/portraits/women/31.jpg" />
					<Avatar src="https://randomuser.me/api/portraits/men/13.jpg" />
					<Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
					<Avatar src="https://randomuser.me/api/portraits/men/31.jpg" />
					<Avatar src="https://randomuser.me/api/portraits/women/37.jpg" />
				</AvatarGroup>
				<AvatarGroup max={3}>
					<Avatar
						sx={{
							bgcolor: "primary.light",
						}}>
						G
					</Avatar>
					<Avatar
						sx={{
							bgcolor: "orange",
						}}>
						B
					</Avatar>
					<Avatar
						sx={{
							bgcolor: "secondary.light",
						}}>
						DK
					</Avatar>
					<Avatar
						sx={{
							bgcolor: "secondary.light",
						}}>
						M
					</Avatar>
				</AvatarGroup>
			</Stack>
		</>
	);
};
