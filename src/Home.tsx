import { Alert } from "@mui/material";
import { Nav } from "./components/Nav";

const Home = () => {
	return (
		<>
			<Nav />
			<Alert severity="info">
				This is a project that contains MaterialUI Components
			</Alert>
		</>
	);
};

export default Home;
