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
import { CheckBoxComponent } from "./components/CheckBoxComponent";
import { AutoCompleteComponent } from "./components/AutoCompleteComponent";
import { BoxComponent } from "./components/BoxComponent";
import { StackComponent } from "./components/StackComponent";
import { GridComponent } from "./components/GridComponent";
import { CardComponent } from "./components/CardComponent";
import { AppBarComponent } from "./components/AppBarComponent";
import { ImageListComponent } from "./components/ImageListComponent";
import { PaperComponent } from "./components/PaperComponent";
import { LinkComponent } from "./components/LinkComponent";

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
					<Route path="/checkbox" element={<CheckBoxComponent />} />
					<Route path="/autocomplete" element={<AutoCompleteComponent />} />
					<Route path="/box" element={<BoxComponent />} />
					<Route path="/stack" element={<StackComponent />} />
					<Route path="/grid" element={<GridComponent />} />
					<Route path="/card" element={<CardComponent />} />
					<Route path="/imagelist" element={<ImageListComponent />} />
					<Route path="/paper" element={<PaperComponent />} />
					<Route path="/link" element={<LinkComponent />} />
				</Routes>
			</Container>
			<AppBarComponent />
		</>
	);
}

export default App;
