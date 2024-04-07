import {
	ArrowCircleDown,
	ArrowCircleLeft,
	ArrowCircleRight,
	ArrowCircleUp,
} from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const DrawerComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	return (
		<>
			<Stack
				sx={{
					marginTop: "90px",
				}}>
				<IconButton size="large" onClick={() => setIsOpen(true)}>
					<ArrowCircleLeft titleAccess="Left Panel" />
					<Typography variant="h6" color="secondary" component="p">
						Left Panel
					</Typography>
				</IconButton>
				<IconButton size="large" onClick={() => setIsOpen2(true)}>
					<ArrowCircleUp />
					<Typography variant="h6" color="secondary" component="p">
						Top Panel
					</Typography>
				</IconButton>
				<IconButton size="large" onClick={() => setIsOpen3(true)}>
					<ArrowCircleRight />
					<Typography variant="h6" color="secondary" component="p">
						Right Panel
					</Typography>
				</IconButton>
				<IconButton size="large" onClick={() => setIsOpen4(true)}>
					<ArrowCircleDown />
					<Typography variant="h6" color="secondary" component="p">
						Bottom Panel
					</Typography>
				</IconButton>
				<Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="left">
					<Box width={200} height={200} textAlign="center">
						<Typography variant="h5" component="div">
							Left Panel
						</Typography>
					</Box>
				</Drawer>
				<Drawer open={isOpen2} onClose={() => setIsOpen2(false)} anchor="top">
					<Box width={200} height={200} textAlign="center">
						<Typography variant="h5" component="div">
							Top Panel
						</Typography>
					</Box>
				</Drawer>
				<Drawer open={isOpen3} onClose={() => setIsOpen3(false)} anchor="right">
					<Box width={200} height={200} textAlign="center">
						<Typography variant="h5" component="div">
							Right Panel
						</Typography>
					</Box>
				</Drawer>
				<Drawer
					open={isOpen4}
					onClose={() => setIsOpen4(false)}
					anchor="bottom">
					<Box width={200} height={200} textAlign="center">
						<Typography variant="h5" component="div">
							Bottom Panel
						</Typography>
					</Box>
				</Drawer>
			</Stack>
		</>
	);
};
