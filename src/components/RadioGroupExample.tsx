import {
	Button,
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const RadioGroupExample = () => {
	const [value, setValue] = useState("");
	const [helperText, setHelperText] = useState("");
	const [error, setError] = useState(false);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (value === "Gökhan") {
			setHelperText(`Your name is ${value}`);
			setError(false);
		} else if (value === "Burçin") {
			setHelperText(`Your name is ${value}`);
			setError(false);
		} else if (value === "Defne") {
			setHelperText(`Your name is ${value}`);
			setError(false);
		} else {
			setHelperText("You didn't choose any choice...");
			setError(true);
		}
	};
	return (
		<div
			style={{
				marginTop: "120px",
			}}>
			<form onSubmit={handleSubmit}>
				<FormControl error={error}>
					<FormLabel>What is your name?</FormLabel>
					<RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
						<FormControlLabel
							value="Gökhan"
							label="Gökhan"
							control={<Radio />}
						/>
						<FormControlLabel
							value="Burçin"
							label="Burçin"
							control={<Radio />}
						/>
						<FormControlLabel value="Defne" label="Defne" control={<Radio />} />
					</RadioGroup>
					<FormHelperText>{helperText}</FormHelperText>
					<Button type="submit" variant="outlined">
						Send
					</Button>
				</FormControl>
			</form>
		</div>
	);
};
