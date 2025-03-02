import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { User } from "../interfaces/AppDataDetails";
import React from "react";

function UsersList({users}) {
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{users?.map((user: User) => (
				<>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src={user.pic} />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									sx={{ color: 'text.primary', display: 'inline' }}
								>
									{user.name}
								</Typography>
								{" — I'll be in your neighborhood doing errands this…"}
							</React.Fragment>} />
					</ListItem>
					<Divider variant="inset" component="li" />
				</>
			))}
		</List>
	);
}

export default UsersList;