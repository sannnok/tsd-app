import { useEffect, useState } from "react";
import { AppData, AppDataResponse } from "../interfaces/AppData.interface";
import { Avatar, Box, Drawer, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import InventoryDetails from "../components/InventoryDetails";


function AppsPage() {
	const [appsInventory, setAppsInventory] = useState<AppDataResponse>([]);
	const [selectedInventory, setSelectedInventory] = useState<AppData>();

	const [order, setOrder] = useState<'asc' | 'desc' >('asc');
	const [orderBy, setOrderBy] = useState('');

  const fetchAppsInventory = async () => {
    const response = await fetch('/apss_inventory.mock.json');
    const jsonData: AppDataResponse = await response.json();
    setAppsInventory(jsonData);
  }

	const handleInventoryClick = (inventory: AppData) => {
		setSelectedInventory(inventory)
	}

	const closeDrawer = () => {
		setSelectedInventory(undefined)
	}

	const handleSort = (property: string) => {
		const isAscending = orderBy === property && order === 'asc';
		setOrder(isAscending ? 'desc' : 'asc');
		setOrderBy(property);
	}

  useEffect(() => {
    fetchAppsInventory();
  }, [])

	return (
		<div>
			<Typography variant="h5" gutterBottom>App Inventory</Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="Apps data table">
					<TableHead>
						<TableRow>
							<TableCell>
								<TableSortLabel
									active={orderBy === 'name'}	
									direction={orderBy === 'name' ? order : 'asc'}
									onClick={() => handleSort('name')}
								>
									Name
								</TableSortLabel>
							</TableCell>
							<TableCell>
								<TableSortLabel
										active={orderBy === 'category'}	
										direction={orderBy === 'category' ? order : 'asc'}
										onClick={() => handleSort('category')}
									>
									Category
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appsInventory.map(inventory => (
							<TableRow key={inventory.appId} onClick={() => handleInventoryClick(inventory)} hover>
								<TableCell sx={{cursor: 'pointer'}}>
									<Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
										<Avatar alt="Remy Sharp" src={inventory.logos.app} />
										{inventory.name}
									</Box>
								</TableCell>
								<TableCell>{inventory.category}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Drawer open={!!selectedInventory} onClose={closeDrawer} anchor="right" hideBackdrop sx={{
				'& > .MuiPaper-root': {
					height: 'calc(100vh - 64px)',
					marginTop: '64px'
				}
			}}>
				<InventoryDetails appId={selectedInventory?.appId}></InventoryDetails>
			</Drawer>
		</div>
	);
}

export default AppsPage;