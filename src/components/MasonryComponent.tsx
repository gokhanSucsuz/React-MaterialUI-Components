import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Paper,
} from "@mui/material";

export const MasonryComponent = () => {
	const heights = [180, 45, 99, 60, 80, 110, 190, 20, 55, 88];

	return (
		<Box
			sx={{
				marginTop: "90px",
			}}>
			<Masonry columns={3} spacing={2}>
				{heights.map((height, index) => (
					<Paper key={index}>
						<Accordion
							sx={{
								minHeight: height,
							}}>
							<AccordionSummary expandIcon={<ExpandMore />}>
								Accordion {index + 1}
							</AccordionSummary>
							<AccordionDetails>Contents Area</AccordionDetails>
						</Accordion>
					</Paper>
				))}
			</Masonry>
		</Box>
	);
};
