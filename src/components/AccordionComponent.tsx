import { ExpandMore } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

export const AccordionComponent = () => {
	const [expanded, setExpanded] = useState<string | boolean>(false);
	console.log(expanded);
	const handleChange =
		(panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};
	return (
		<div
			style={{
				marginTop: "120px",
			}}>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>First Unit</Typography>
				</AccordionSummary>
				<AccordionDetails>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta
					eum excepturi optio unde alias hic rem, error assumenda eos obcaecati
					deserunt nihil vitae perferendis fugit atque quod officiis iure.
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>Second Unit</Typography>
				</AccordionSummary>
				<AccordionDetails>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta
					eum excepturi optio unde alias hic rem, error assumenda eos obcaecati
					deserunt nihil vitae perferendis fugit atque quod officiis iure.
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>Third Unit</Typography>
				</AccordionSummary>
				<AccordionDetails>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta
					eum excepturi optio unde alias hic rem, error assumenda eos obcaecati
					deserunt nihil vitae perferendis fugit atque quod officiis iure.
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>Fourth Unit</Typography>
				</AccordionSummary>
				<AccordionDetails>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta
					eum excepturi optio unde alias hic rem, error assumenda eos obcaecati
					deserunt nihil vitae perferendis fugit atque quod officiis iure.
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
