import { Box } from "@mui/material";
import AppsPage from "../pages/AppsPage";

function RoutingContent() {
	return (
		<Box sx={{ p: 3, width: '100%', boxSizing: 'border-box' }}>
			<AppsPage></AppsPage>
		</Box>
	);	
}

export default RoutingContent;