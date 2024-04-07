import { Add, Delete } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";

const Buttons = () => {
	return (
		<div
			style={{
				marginTop: "120px",
			}}>
			<Stack spacing={{ xs: 2, sm: 3, md: 4 }}>
				<Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
					<Typography variant="h4" align="justify">
						Buttons
					</Typography>
					<Stack direction="row" spacing={0} display="block">
						<Button variant="text" size="medium">
							Text
						</Button>
						<Button variant="contained" size="large">
							Contained
						</Button>
						<Button variant="outlined" size="small">
							Outlined
						</Button>
					</Stack>
				</Box>
				<Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
					<Typography variant="h4" align="justify">
						Button Group
					</Typography>

					<ButtonGroup variant="contained" aria-label="Basic button group">
						<Stack display="block">
							<Button color="success" size="small">
								One
							</Button>
							<Button color="secondary" size="medium">
								Two
							</Button>
							<Button color="warning" size="large">
								Three
							</Button>
						</Stack>
					</ButtonGroup>
				</Box>
				<Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
					<Typography variant="h4" align="justify">
						Button Group
					</Typography>

					<ButtonGroup variant="outlined" aria-label="Basic button group">
						<Stack display="block">
							<Button
								color="success"
								size="small"
								startIcon={<Add color="error" />}>
								One
							</Button>
							<Button
								color="secondary"
								size="medium"
								endIcon={<Delete />}
								onClick={() => alert("Clicked!")}>
								Two
							</Button>
							<Button color="warning" size="large">
								Three
							</Button>
						</Stack>
					</ButtonGroup>
				</Box>
			</Stack>
		</div>
	);
};

export default Buttons;
