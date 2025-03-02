import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function TopBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{display: 'flex', gap: '16px'}}>
						<img src={`${import.meta.env.BASE_URL}img/company_logo.svg`} alt="company logo" style={{
							height: '30px'
						}}/>
						<Typography variant="h6" sx={{fontWeight: '400', borderBottom: '3px solid white'}}>Apps</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default TopBar;
