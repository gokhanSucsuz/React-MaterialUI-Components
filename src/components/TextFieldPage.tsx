import { AccountCircle, CoronavirusSharp } from "@mui/icons-material";
import {
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	Stack,
	TextField,
} from "@mui/material";
import { useState } from "react";

export const TextFieldPage = () => {
	const [value, setValue] = useState("");
	return (
		<>
			<Stack spacing={1} direction="row">
				<TextField error label="lined" variant="outlined" />
				<TextField label="Outlined" variant="standard" />
				<TextField label="Outlined" variant="filled" />
				<TextField label="Outlined" variant="outlined" />
			</Stack>
			<FormControl variant="standard" sx={{ my: "10px" }}>
				<InputLabel htmlFor="input-with-icon-adornment">
					With a start adornment
				</InputLabel>
				<Input
					id="input-with-icon-adornment"
					startAdornment={
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					}
				/>
			</FormControl>

			<Stack spacing={4} direction="row" sx={{ my: "20px" }}>
				<TextField
					onChange={(e) => setValue(e.target.value)}
					label="Outlined"
					variant="outlined"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<CoronavirusSharp />
							</InputAdornment>
						),
					}}
					value={value}
					helperText={!value ? "Please type anything..." : ""}
				/>
			</Stack>
		</>
	);
};
