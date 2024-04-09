import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { useState } from "react";
import moment, { Moment } from "moment";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { DateRange } from "@mui/lab";

export const DateRangeComponent = () => {
	const [date, setDate] = useState<DateRange<Moment>>([
		moment("2024-01-04"),
		moment("2024-10-04"),
	]);

	return (
		<>
			<Box sx={{ marginTop: "90px" }}>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DateRangePicker
						label="Controlled picker"
						value={date}
						onChange={(newValue: DateRange<Moment>) => setDate(newValue)}
					/>
				</LocalizationProvider>
			</Box>
		</>
	);
};
