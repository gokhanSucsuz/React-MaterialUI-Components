import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from "@mui/material";
import React from "react";

export const CheckBoxComponent = () => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.checked);
	};
	return (
		<>
			<Box>
				<FormControl>
					<FormLabel>Which team is your best?</FormLabel>
					<FormGroup row onChange={handleChange}>
						<FormControlLabel label="BJK" control={<Checkbox />} />
						<FormControlLabel label="GS" control={<Checkbox />} />
						<FormControlLabel label="FB" control={<Checkbox />} />
					</FormGroup>
				</FormControl>
			</Box>
		</>
	);
};
