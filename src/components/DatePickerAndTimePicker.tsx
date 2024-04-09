import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { useState } from "react";
import { Moment } from "moment";

export const DatePickerAndTimePicker = () => {
	const [date, setDate] = useState<Moment | null>(null);
	const [time, setTime] = useState<Moment | null>(null);

	console.log(date);
	console.log(time);

	return (
		<>
			<Box sx={{ marginTop: "90px" }}>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DatePicker
						value={date}
						onChange={(newValue: Moment | null) => {
							setDate(newValue);
						}}
						label="Date"
						slotProps={{ textField: { variant: "outlined" } }}
					/>

					<TimePicker
						label="Controlled picker"
						value={time}
						onChange={(newValue) => setTime(newValue)}
					/>
				</LocalizationProvider>
			</Box>
		</>
	);
};
