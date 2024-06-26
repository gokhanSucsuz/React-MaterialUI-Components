import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Alert,
	Box,
	Button,
	Grid,
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
			console.log(e.target);
		};
	return (
		<Box sx={{ mt: "90px", mb: "20px" }}>
			<Typography variant="h6" component="div" sx={{ marginBottom: "20px" }}>
				<Alert severity="info">MUI Components Example</Alert>
			</Typography>
			<Grid container gap={1}>
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
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
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel14"}
						onChange={handleChange("panel14")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel14-content"
							id="panel14-header">
							Link
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/link"
									style={{ color: "inherit", textDecoration: "none" }}>
									Link
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel15"}
						onChange={handleChange("panel15")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel15-content"
							id="panel15-header">
							Breadcrumbs
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/breadcrumbs"
									style={{ color: "inherit", textDecoration: "none" }}>
									Breadcrumbs
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel16"}
						onChange={handleChange("panel16")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel16-content"
							id="panel16-header">
							Drawer
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/drawer"
									style={{ color: "inherit", textDecoration: "none" }}>
									Drawer
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel17"}
						onChange={handleChange("panel17")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel17-content"
							id="panel17-header">
							Badge
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/badge"
									style={{ color: "inherit", textDecoration: "none" }}>
									Badge
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel18"}
						onChange={handleChange("panel18")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel18-content"
							id="panel18-header">
							Speed Dial
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/bottom-navigation"
									style={{ color: "inherit", textDecoration: "none" }}>
									Speed Dial
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel19"}
						onChange={handleChange("panel19")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel19-content"
							id="panel19-header">
							Bottom Navigation
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/bottom-navigation"
									style={{ color: "inherit", textDecoration: "none" }}>
									Bottom Navigation
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel20"}
						onChange={handleChange("panel20")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel20-content"
							id="panel20-header">
							Avatar
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/avatar"
									style={{ color: "inherit", textDecoration: "none" }}>
									Avatar
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel21"}
						onChange={handleChange("panel21")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel21-content"
							id="panel21-header">
							List
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/list"
									style={{ color: "inherit", textDecoration: "none" }}>
									List
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel22"}
						onChange={handleChange("panel22")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel22-content"
							id="panel22-header">
							Tooltip
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/tooltip"
									style={{ color: "inherit", textDecoration: "none" }}>
									Tooltip
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel23"}
						onChange={handleChange("panel23")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel23-content"
							id="panel23-header">
							Alert
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/alert"
									style={{ color: "inherit", textDecoration: "none" }}>
									Alert
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel24"}
						onChange={handleChange("panel24")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel24-content"
							id="panel24-header">
							Dialog
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/dialog"
									style={{ color: "inherit", textDecoration: "none" }}>
									Dialog
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel25"}
						onChange={handleChange("panel25")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel25-content"
							id="panel25-header">
							SnackBar
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/snackbar"
									style={{ color: "inherit", textDecoration: "none" }}>
									SnackBar
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel26"}
						onChange={handleChange("panel26")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel26-content"
							id="panel26-header">
							Progress
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/progress"
									style={{ color: "inherit", textDecoration: "none" }}>
									Progress
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel27"}
						onChange={handleChange("panel27")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel27-content"
							id="panel27-header">
							Skeleton
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/skeleton"
									style={{ color: "inherit", textDecoration: "none" }}>
									Skeleton
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel28"}
						onChange={handleChange("panel28")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel28-content"
							id="panel28-header">
							Loading Button
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/loading-button"
									style={{ color: "inherit", textDecoration: "none" }}>
									Loading Button
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel29"}
						onChange={handleChange("panel29")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel29-content"
							id="panel29-header">
							Table
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/table"
									style={{ color: "inherit", textDecoration: "none" }}>
									Table
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel30"}
						onChange={handleChange("panel30")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel30-content"
							id="panel30-header">
							Date Picker & Time Picker
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/datepicker-timepicker"
									style={{ color: "inherit", textDecoration: "none" }}>
									Date Picker & Time Picker
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel31"}
						onChange={handleChange("panel31")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel31-content"
							id="panel31-header">
							Date Range
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/daterange"
									style={{ color: "inherit", textDecoration: "none" }}>
									Date Range
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel32"}
						onChange={handleChange("panel32")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel32-content"
							id="panel32-header">
							Tabs
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/tabs"
									style={{ color: "inherit", textDecoration: "none" }}>
									Tabs
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel33"}
						onChange={handleChange("panel33")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel33-content"
							id="panel33-header">
							Masonry
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/masonry"
									style={{ color: "inherit", textDecoration: "none" }}>
									Masonry
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel34"}
						onChange={handleChange("panel34")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel34-content"
							id="panel34-header">
							Timeline
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/timeline"
									style={{ color: "inherit", textDecoration: "none" }}>
									Timeline
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
				<Grid item xs={12} sm={5} md={3} lg={2}>
					<Accordion
						expanded={expanded === "panel35"}
						onChange={handleChange("panel35")}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel35-content"
							id="panel35-header">
							Theme Customize
						</AccordionSummary>
						<AccordionActions>
							<Button variant="contained">
								<NavLink
									to="/theme-customize"
									style={{ color: "inherit", textDecoration: "none" }}>
									Theme Customize
								</NavLink>
							</Button>
						</AccordionActions>
					</Accordion>
				</Grid>
			</Grid>
		</Box>
	);
};
