import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { User } from "../interfaces/AppDataDetails";

function UsersList({users}) {
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{users?.map((user: User) => (
				<>
					<ListItem key={user.id} alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src={user.pic} />
						</ListItemAvatar>
						<ListItemText
							primary={<>
								<Typography
									component="span"
									variant="body2"
									sx={{ color: 'text.primary', display: 'inline' }}
								>
									{user.name}
								</Typography>
							</>}
							secondary={'alex@acme.ai'} />
					</ListItem>
					<Divider variant="inset" component="li" />
				</>
			))}
		</List>
	);
}

export default UsersList;