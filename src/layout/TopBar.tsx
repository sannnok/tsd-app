import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function TopBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{display: 'flex', gap: '16px'}}>
						<Typography variant="h6" component="div">'Logo'</Typography>
						<Typography variant="h6" component="div">Apps</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default TopBar;
