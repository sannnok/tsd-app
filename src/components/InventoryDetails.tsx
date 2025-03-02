import { useEffect, useState } from "react";
import { AppDataDetailsResponse, AppDetails } from "../interfaces/AppDataDetails";
import { Box, Card, CardContent, Typography } from "@mui/material";
import UsersList from "./UsersList";
import { getRelativeTime } from "../utils/utils";

function InventoryDetails({appId}) {
	const [inventoryDetails, setInventoryDetails] = useState<AppDetails>();

  const fetchAppInventoryDetails = async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}/app_details.mock.json`);
    const jsonData: AppDataDetailsResponse = await response.json();
    setInventoryDetails(jsonData);
  }

  useEffect(() => {
    fetchAppInventoryDetails();
  }, [])

	const getHumanreadableDateAgo = (dateStr?: string) => {

		return getRelativeTime(dateStr)
	}

	return (
		<Box sx={{ maxWidth: '40vw', p: 3 }}>
			<Typography variant="h6" gutterBottom sx={{
				fontWeight: 400,
				color: '#404040'
			}}>
        App Overview
      </Typography>
			<Card sx={{border: '1px solid #4A90E2', borderRadius: 2, backgroundColor: '#F7F9FC'}}>
				<CardContent>
					<Typography variant="body2" gutterBottom>App name: {inventoryDetails?.name}</Typography>
					<Typography variant="body2" gutterBottom>Category: {inventoryDetails?.category}</Typography>
					<Typography variant="body2" gutterBottom>Users: {inventoryDetails?.users.length}</Typography>
					<Typography variant="body2" gutterBottom>Connector: <img src={inventoryDetails?.connector.logo} alt="connector logo" style={{height: '14px'}}/></Typography>
					<Typography variant="body2" gutterBottom>Last classification: {getHumanreadableDateAgo(inventoryDetails?.lastClassification)}</Typography>
				</CardContent>
			</Card>
			<UsersList users={inventoryDetails?.users}></UsersList>
		</Box>
	);
}

export default InventoryDetails;