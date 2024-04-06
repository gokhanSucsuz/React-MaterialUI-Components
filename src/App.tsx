import "./App.css";
import Buttons from "./components/Buttons";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Container } from "@mui/material";
import Typography from "./components/Typography";
import { TextFieldPage } from "./components/TextFieldPage";
import { RadioButtonElement } from "./components/RadioButtonElement";
import { RadioGroupExample } from "./components/RadioGroupExample";
import { SelectComponent } from "./components/SelectComponent";

function App() {
	return (
		<>
			<Container maxWidth="sm">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/buttons" element={<Buttons />} />
					<Route path="/typography" element={<Typography />} />
					<Route path="/textfield" element={<TextFieldPage />} />
					<Route path="/radiogroup" element={<RadioButtonElement />} />
					<Route path="/radiogroupexample" element={<RadioGroupExample />} />
					<Route path="/select" element={<SelectComponent />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
