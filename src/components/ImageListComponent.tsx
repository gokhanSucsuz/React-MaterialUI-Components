import { Info } from "@mui/icons-material";
import {
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar,
} from "@mui/material";
import React from "react";

export const ImageListComponent = () => {
	return (
		<>
			<ImageList
				cols={3}
				rowHeight={164}
				sx={{
					width: "500px",
					height: "450px",
					marginTop: "120px",
				}}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img src={item.img} alt="" loading="lazy" />
					</ImageListItem>
				))}
			</ImageList>
			<ImageList
				sx={{ width: "500px", height: "450px" }}
				variant="woven"
				cols={2}>
				{itemData2.map((item) => (
					<ImageListItem key={item.img}>
						<ImageListItemBar
							title={item.title}
							subtitle={item.author}
							actionIcon={
								<IconButton title={item.title}>
									<Info
										sx={{
											backgroundColor: "white",
											borderRadius: "10px",
										}}
									/>
								</IconButton>
							}
						/>
						<img src={item.img} alt="" loading="lazy" />
					</ImageListItem>
				))}
			</ImageList>
		</>
	);
};

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		cols: 2,
	},
];
const itemData2 = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		cols: 2,
	},
];
