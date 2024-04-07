import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Paper,
	styled,
	Typography,
} from "@mui/material";
import React from "react";

export const CardComponent = () => {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} lg={6}>
				<Item>
					<Card
						sx={{
							maxWidth: "750px",
						}}>
						<CardMedia
							height="200px"
							component="img"
							image="https://source.unsplash.com/random"
						/>
						<CardContent>
							<Typography variant="h5" component="div">
								Card Title
							</Typography>
							<Typography variant="body2" component="p">
								Card Content Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. Modi quas excepturi impedit quia odit dolores, tenetur
								dolorem similique iste, quod nam hic ratione nihil laborum
								suscipit facilis quae corrupti quidem?
							</Typography>
						</CardContent>
						<CardActions
							sx={{
								justifyContent: "center",
							}}>
							<Button variant="contained" color="error">
								Clear
							</Button>
							<Button variant="contained" color="success">
								Save
							</Button>
						</CardActions>
					</Card>
				</Item>
			</Grid>
			<Grid item xs={12} lg={6}>
				<Item>
					<Card
						sx={{
							maxWidth: "750px",
						}}>
						<CardMedia
							height="200px"
							component="img"
							image="https://source.unsplash.com/random"
						/>
						<CardContent>
							<Typography variant="h5" component="div">
								Card Title
							</Typography>
							<Typography variant="body2" component="p">
								Card Content Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. Modi quas excepturi impedit quia odit dolores, tenetur
								dolorem similique iste, quod nam hic ratione nihil laborum
								suscipit facilis quae corrupti quidem?
							</Typography>
						</CardContent>
						<CardActions
							sx={{
								justifyContent: "center",
							}}>
							<Button variant="contained" color="error">
								Clear
							</Button>
							<Button variant="contained" color="success">
								Save
							</Button>
						</CardActions>
					</Card>
				</Item>
			</Grid>
			<Grid item xs={12} lg={6}>
				<Item>
					<Card
						sx={{
							maxWidth: "750px",
						}}>
						<CardMedia
							height="200px"
							component="img"
							image="https://source.unsplash.com/random"
						/>
						<CardContent>
							<Typography variant="h5" component="div">
								Card Title
							</Typography>
							<Typography variant="body2" component="p">
								Card Content Lorem ipsum dolor sit, amet consectetur adipisicing
								elit. Modi quas excepturi impedit quia odit dolores, tenetur
								dolorem similique iste, quod nam hic ratione nihil laborum
								suscipit facilis quae corrupti quidem?
							</Typography>
						</CardContent>
						<CardActions
							sx={{
								justifyContent: "center",
							}}>
							<Button variant="contained" color="error">
								Clear
							</Button>
							<Button variant="contained" color="success">
								Save
							</Button>
						</CardActions>
					</Card>
				</Item>
			</Grid>
		</Grid>
	);
};
