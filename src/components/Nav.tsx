import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Stack,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1, my: "20px" }}>
				<Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
					MUI Components Example
				</Typography>
				<div>
					<Stack spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap">
						<Accordion>
							<AccordionSummary
								aria-controls="panel1-content"
								id="panel1-header">
								Typography
							</AccordionSummary>
							<AccordionDetails></AccordionDetails>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/typography"
										style={{ color: "inherit", textDecoration: "none" }}>
										Typography
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel1-content"
								id="panel1-header">
								Buttons
							</AccordionSummary>
							<AccordionDetails></AccordionDetails>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/buttons"
										style={{ color: "inherit", textDecoration: "none" }}>
										Buttons
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								TextField
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/textfield"
										style={{ color: "inherit", textDecoration: "none" }}>
										TextField
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Radio Group
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/radiogroup"
										style={{ color: "inherit", textDecoration: "none" }}>
										Radio Group
									</NavLink>
								</Button>
								<Button variant="contained">
									<NavLink
										to="/radiogroupexample"
										style={{ color: "inherit", textDecoration: "none" }}>
										Radio Group Example
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Select
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/select"
										style={{ color: "inherit", textDecoration: "none" }}>
										Select
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Checkbox
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/checkbox"
										style={{ color: "inherit", textDecoration: "none" }}>
										Checkbox
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Auto Complete
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/autocomplete"
										style={{ color: "inherit", textDecoration: "none" }}>
										Auto Complete
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Box
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/box"
										style={{ color: "inherit", textDecoration: "none" }}>
										Box
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Stack Component
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/stack"
										style={{ color: "inherit", textDecoration: "none" }}>
										Stack Component
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Grid
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/grid"
										style={{ color: "inherit", textDecoration: "none" }}>
										Grid
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
						<Accordion>
							<AccordionSummary
								aria-controls="panel3-content"
								id="panel3-header">
								Card
							</AccordionSummary>
							<AccordionActions>
								<Button variant="contained">
									<NavLink
										to="/card"
										style={{ color: "inherit", textDecoration: "none" }}>
										Card
									</NavLink>
								</Button>
							</AccordionActions>
						</Accordion>
					</Stack>
				</div>
			</Box>
		</>
	);
};
