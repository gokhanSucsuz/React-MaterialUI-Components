import { Add, Delete, List, Update } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";

export const ToolTipComponent = () => {
	return (
		<>
			<Stack
				direction="row"
				gap={8}
				sx={{
					marginTop: "110px",
				}}>
				<Tooltip title="Add" placement="left" color="info">
					<IconButton>
						<Add />
					</IconButton>
				</Tooltip>
				<Tooltip title="Delete" placement="top" color="error">
					<IconButton>
						<Delete />
					</IconButton>
				</Tooltip>
				<Tooltip title="Update" placement="right" color="warning">
					<IconButton>
						<Update />
					</IconButton>
				</Tooltip>
				<Tooltip title="List" placement="bottom" color="secondary">
					<IconButton>
						<List />
					</IconButton>
				</Tooltip>
			</Stack>
		</>
	);
};
