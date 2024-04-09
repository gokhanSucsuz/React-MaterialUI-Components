import { ButtonGroup, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

export const LoadingComponent = () => {
	const [value, setValue] = useState<boolean>(false);
	return (
		<>
			<Stack direction="row" sx={{ marginTop: "90px" }}>
				<ButtonGroup>
					<LoadingButton
						loading={value}
						variant="outlined"
						onClick={() => setValue(true)}>
						Save
					</LoadingButton>
					<LoadingButton variant="outlined">Save</LoadingButton>
				</ButtonGroup>
			</Stack>
		</>
	);
};
