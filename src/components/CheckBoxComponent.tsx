import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from "@mui/material";
import React, { useState } from "react";

export const CheckBoxComponent = () => {
	//const [isAccept, setIsAccept] = useState();
	const [knowledge, setKnowledge] = useState<string[]>([]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.checked);
	};
	console.log(knowledge);
	const handleKnowledgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const index = knowledge.indexOf(e.target.value);
		index === -1
			? setKnowledge([...knowledge, e.target.value])
			: setKnowledge(knowledge.filter((item) => item !== e.target.value));
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
			<Box>
				<FormControl>
					<FormLabel>What do you know about Frontend?</FormLabel>
					<FormGroup row onChange={handleChange}>
						<FormControlLabel
							value="React"
							label="React"
							control={
								<Checkbox
									checked={knowledge.includes("React")}
									onChange={handleKnowledgeChange}
								/>
							}
						/>
						<FormControlLabel
							value="Javascript"
							label="Javascript"
							control={
								<Checkbox
									checked={knowledge.includes("Javascript")}
									onChange={handleKnowledgeChange}
								/>
							}
						/>
						<FormControlLabel
							value="Angular"
							label="Angular"
							control={
								<Checkbox
									checked={knowledge.includes("Angular")}
									onChange={handleKnowledgeChange}
								/>
							}
						/>
						<FormControlLabel
							value="Vue"
							label="Vue"
							control={
								<Checkbox
									checked={knowledge.includes("Vue")}
									onChange={handleKnowledgeChange}
								/>
							}
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</>
	);
};
