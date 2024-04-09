import { Breadcrumbs, Link } from "@mui/material";

export const BreadcrumbsComponent = () => {
	return (
		<div
			style={{
				marginTop: "90px",
			}}>
			<Breadcrumbs separator="-" maxItems={2}>
				<Link href="/" underline="always">
					Home
				</Link>
				<Link href="/" underline="always">
					Home
				</Link>
				<Link href="/" underline="hover">
					Home
				</Link>
			</Breadcrumbs>
		</div>
	);
};
