import { Favorite, LocationOn, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";
import { useState } from "react";

export const BottomNavigationComponent = () => {
	const [value, setValue] = useState(0);
	return (
		<>
			<Stack
				sx={{
					width: "40%",
					bottom: 0,
					position: "absolute",
				}}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(e, newValue) => setValue(newValue)}>
					<BottomNavigationAction icon={<Restore />} label="Recent" />
					<BottomNavigationAction icon={<Favorite />} label="Favorites" />
					<BottomNavigationAction icon={<LocationOn />} label="LocationOn" />
				</BottomNavigation>
			</Stack>
		</>
	);
};
