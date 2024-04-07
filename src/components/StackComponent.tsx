import { Divider, Stack } from "@mui/material";

export const StackComponent = () => {
	return (
		<>
			<Stack
				justifyContent="center"
				alignItems="center"
				direction={{
					xs: "column",
					md: "row",
				}}
				spacing={{
					xs: 1,
					sm: 2,
					lg: 4,
				}}
				divider={<Divider orientation="vertical" flexItem />}>
				<div>Item1</div>
				<div>Item2</div>
				<div>Item3</div>
			</Stack>
		</>
	);
};
