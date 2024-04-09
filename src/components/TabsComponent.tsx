import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";

export const TabsComponent = () => {
	const [value, setValue] = useState("1");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		console.log(event.currentTarget);
		setValue(newValue);
	};

	return (
		<Box sx={{ marginTop: "90px", typography: "body1" }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="Item One" value="1" />
						<Tab label="Item Two" value="2" />
						<Tab label="Item Three" value="3" />
					</TabList>
				</Box>
				<TabPanel value="1">Item One</TabPanel>
				<TabPanel value="2">Item Two</TabPanel>
				<TabPanel value="3">Item Three</TabPanel>
			</TabContext>
		</Box>
	);
};
