import { Box, Button, ButtonGroup, Skeleton } from "@mui/material";
import { useState } from "react";

export const SkeletonComponent = () => {
	const [loading, setLoading] = useState<boolean>(true);
	return (
		<>
			<Box
				sx={{
					marginTop: "90px",
				}}>
				{loading ? (
					<Skeleton width={400} height={250} animation="wave" />
				) : (
					<img
						src="https://source.unsplash.com/random/450*300"
						alt="skeleton"
						width={450}
						height={300}
					/>
				)}
			</Box>
			<Box>
				<ButtonGroup>
					<Button onClick={() => setLoading(false)}>Get photo</Button>
					<Button onClick={() => setLoading(true)}>Hide photo</Button>
				</ButtonGroup>
			</Box>
		</>
	);
};
