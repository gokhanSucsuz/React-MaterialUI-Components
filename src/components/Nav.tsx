import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Nav = () => {
	const [expanded, setExpanded] = useState<string | boolean>(false);
	const handleChange =
		(panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};
	return (
		<>
			<Box sx={{ flexGrow: 1, mt: "90px", mb: "20px" }}>
				<Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
					MUI Components Example
				</Typography>
				<div>
					<Stack spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap">
						<Grid container gap={1}>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel1"}
									onChange={handleChange("panel1")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel2"}
									onChange={handleChange("panel2")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel2-content"
										id="panel2-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel3"}
									onChange={handleChange("panel3")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel444"}
									onChange={handleChange("panel444")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel444-content"
										id="panel444-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel4"}
									onChange={handleChange("panel4")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel4-content"
										id="panel4-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel5"}
									onChange={handleChange("panel5")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel5-content"
										id="panel5-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel6"}
									onChange={handleChange("panel6")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel6-content"
										id="panel6-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel7"}
									onChange={handleChange("panel7")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel7-content"
										id="panel7-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel8"}
									onChange={handleChange("panel8")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel8-content"
										id="panel8-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel9"}
									onChange={handleChange("panel9")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel9-content"
										id="panel9-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel10"}
									onChange={handleChange("panel10")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel10-content"
										id="panel10-header">
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
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel11"}
									onChange={handleChange("panel11")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel11-content"
										id="panel11-header">
										Accordion
									</AccordionSummary>
									<AccordionActions>
										<Button variant="contained">
											<NavLink
												to="/accordion"
												style={{ color: "inherit", textDecoration: "none" }}>
												Accordion
											</NavLink>
										</Button>
									</AccordionActions>
								</Accordion>
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel12"}
									onChange={handleChange("panel12")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel12-content"
										id="panel12-header">
										Image List
									</AccordionSummary>
									<AccordionActions>
										<Button variant="contained">
											<NavLink
												to="/imagelist"
												style={{ color: "inherit", textDecoration: "none" }}>
												Image List
											</NavLink>
										</Button>
									</AccordionActions>
								</Accordion>
							</Grid>
							<Grid item xs={12} md={5}>
								<Accordion
									expanded={expanded === "panel13"}
									onChange={handleChange("panel13")}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel13-content"
										id="panel13-header">
										Paper
									</AccordionSummary>
									<AccordionActions>
										<Button variant="contained">
											<NavLink
												to="/paper"
												style={{ color: "inherit", textDecoration: "none" }}>
												Paper
											</NavLink>
										</Button>
									</AccordionActions>
								</Accordion>
							</Grid>
						</Grid>
					</Stack>
				</div>
			</Box>
		</>
	);
};
