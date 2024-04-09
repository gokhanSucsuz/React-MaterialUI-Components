import { ContentCopy, Edit, MenuOpen, Print, Share } from "@mui/icons-material";
import {
	SpeedDial,
	SpeedDialAction,
	SpeedDialIcon,
	Stack,
} from "@mui/material";

export const SpeedDialComponent = () => {
	return (
		<>
			<Stack
				sx={{
					marginTop: "90px",
				}}>
				<SpeedDial
					ariaLabel="Navigation"
					icon={<SpeedDialIcon openIcon={<MenuOpen />} />}>
					<SpeedDialAction
						icon={<ContentCopy />}
						tooltipTitle="Copy"
						tooltipOpen
					/>
					<SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />
					<SpeedDialAction icon={<Edit />} tooltipTitle="Edit" tooltipOpen />
					<SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
				</SpeedDial>
			</Stack>
		</>
	);
};
