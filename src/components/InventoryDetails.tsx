import { useEffect, useState } from "react";
import { AppDataDetailsResponse, AppDetails } from "../interfaces/AppDataDetails";
import { Box, Typography } from "@mui/material";
import UsersList from "./UsersList";

function InventoryDetails({appId}) {
	const [inventoryDetails, setInventoryDetails] = useState<AppDetails>();

  const fetchAppInventoryDetails = async () => {
    const response = await fetch('/app_details.mock.json');
    const jsonData: AppDataDetailsResponse = await response.json();
    setInventoryDetails(jsonData);
  }

  useEffect(() => {
    fetchAppInventoryDetails();
  }, [])

	return (
		<Box sx={{ maxWidth: '40vw', p: 3 }}>
			<Typography variant="h6" gutterBottom>
        App Overview
      </Typography>
			<Typography variant="body2" gutterBottom>{inventoryDetails?.name}</Typography>
			<Typography variant="body2" gutterBottom>{inventoryDetails?.category}</Typography>
			<Typography variant="body2" gutterBottom>{inventoryDetails?.users.length}</Typography>
			<Typography variant="body2" gutterBottom>{inventoryDetails?.connector.name}</Typography>
			<Typography variant="body2" gutterBottom>{inventoryDetails?.lastClassification}</Typography>
			<UsersList users={inventoryDetails?.users}></UsersList>
		</Box>
	);
}

export default InventoryDetails;