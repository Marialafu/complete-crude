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
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		getUserById(setUser, id, setLoading);
	}, [id]);

	if (loading) return <h2>Loading user...</h2>;

	if (!user)
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
				<UserEditingProfile
					user={user}
					setEditProfile={setEditProfile}
					setUser={setUser}
					setLoading={setLoading}
				/>
			)}
		</StyledCardContainer>
	);
};

const getUserById = async (setUser, id, setLoading) => {
	try {
		const user = await getDataById(id);
		setUser(user);
		setLoading(false);
	} catch (error) {
		console.log(error);
	}
};

export default UserProfile;
