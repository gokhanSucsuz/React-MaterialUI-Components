import {
	Box,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

export const SelectComponent = () => {
	// const [country, setCountry] = useState("");
	const [countries, setCountries] = useState<string[]>([]);
	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	console.log(e.target.value);
	// 	setCountry(e.target.value);
	// };
	console.log(countries);
	const handleChangeMultiple = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCountries(
			typeof e.currentTarget.value === "string"
				? e.currentTarget.value.split(",")
				: e.currentTarget.value
		);
	};
	const handleChangeMultiple2 = (e: SelectChangeEvent) => {
		setCountries(
			typeof e.target.value === "string"
				? e.target.value.split(",")
				: e.target.value
		);
	};
	return (
		<div
			style={{
				marginTop: "120px",
			}}>
			<Box>
				{/* <TextField
					variant="outlined"
					value={country}
					select
					label="Select your Country"
					fullWidth
					onChange={handleChange}>
					<MenuItem value="TR">Turkiye</MenuItem>
					<MenuItem value="D">Germany</MenuItem>
					<MenuItem value="FR">France</MenuItem>
					<MenuItem value="USA">United States of America</MenuItem>
				</TextField> */}
				<TextField
					SelectProps={{
						multiple: true,
					}}
					defaultValue={countries}
					variant="standard"
					value={countries}
					select
					label="Multiple Select your Country"
					fullWidth
					onChange={handleChangeMultiple}>
					<MenuItem value="TR">Turkiye</MenuItem>
					<MenuItem value="D">Germany</MenuItem>
					<MenuItem value="FR">France</MenuItem>
					<MenuItem value="USA">United States of America</MenuItem>
				</TextField>
				<InputLabel id="demo-label">Country</InputLabel>
				<Select
					labelId="demo-label"
					multiple
					variant="standard"
					defaultValue="x"
					value={countries}
					input={<OutlinedInput label="Country" />}
					fullWidth
					onChange={handleChangeMultiple2}>
					<MenuItem value="TR">Turkiye</MenuItem>
					<MenuItem value="D">Germany</MenuItem>
					<MenuItem value="FR">France</MenuItem>
					<MenuItem value="USA">United States of America</MenuItem>
				</Select>
			</Box>
		</div>
	);
};
