import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const RadioButtonElement = () => {
	const [value, setValue] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<>
			<Box
				height={200}
				width={200}
				my={4}
				display="flex"
				alignItems="center"
				gap={4}
				p={2}
				sx={{ border: "2px solid grey", marginTop: "120px" }}>
				<FormControl>
					<FormLabel id="demo">Gender</FormLabel>
					<RadioGroup name="demo" value={value} onChange={handleChange}>
						<FormControlLabel
							value="female"
							control={<Radio />}
							label="female"
						/>
						<FormControlLabel value="male" control={<Radio />} label="male" />
						<FormControlLabel value="other" control={<Radio />} label="other" />
					</RadioGroup>
				</FormControl>
			</Box>
			{value}
		</>
	);
};
