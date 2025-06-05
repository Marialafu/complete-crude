import { useEffect, useState } from 'react';
import { StyledCardContainer } from './user-profile.styles';
import { getDataById } from '../../lib/utils/api';
import { Link, useParams } from 'react-router-dom';
import UserProfileData from '../../components/user-profile-data/UserProfileData';
import UserEditingProfile from '../../components/user-editing-profile/UserEditingProfile';
import { StyledButton } from '../../components/user-profile-data/user-profile-data.styles';

const UserProfile = () => {
	const [user, setUser] = useState();
	const [editProfile, setEditProfile] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		getUserById(setUser, id);
	}, [id]);

	if (user !== null && !user) return <h2>Loading user...</h2>;
	if (user === null)
		return (
			<>
				<Link to={'/'}>
					<StyledButton>BACK TO USERS</StyledButton>
				</Link>
				<h2>NO USER FOUND</h2>
			</>
		);
	return (
		<StyledCardContainer>
			<Link to={'/'}>
				<StyledButton>BACK TO USERS</StyledButton>
			</Link>
			{!editProfile && (
				<UserProfileData
					user={user}
					setEditProfile={setEditProfile}
					editProfile={editProfile}
				/>
			)}
			{editProfile && (
				<UserEditingProfile user={user} setEditProfile={setEditProfile} />
			)}
		</StyledCardContainer>
	);
};

const getUserById = async (setUser, id) => {
	try {
		const user = await getDataById(id);
		setUser(user);
	} catch (error) {
		console.log(error);
	}
};

export default UserProfile;
