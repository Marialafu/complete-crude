import {
	StyledButton,
	StyledDeleteButton,
	StyledFooter,
	StyledImg,
	StyledPersonalDataContainer,
	StyledProfileContainer,
	StyledStatus,
	StyledUserName
} from './user-profile-data.styles';

const UserProfileData = ({ user, setEditProfile }) => {
	return (
		<>
			<StyledProfileContainer>
				<StyledImg src={user.profilePicture} />
				<StyledUserName>{user.username}</StyledUserName>
				<span>{user.email}</span>
				<span>{user.fullName}</span>
			</StyledProfileContainer>
			<StyledPersonalDataContainer>
				<StyledStatus $active={user.active}>
					{defineUserStatus(user.active)}
				</StyledStatus>
				<span>Gender: {user.gender}</span>
				<span>Date of Birth: {user.dateOfBirth}</span>
				<span>Phone Number: {user.phoneNumber}</span>
			</StyledPersonalDataContainer>
			<StyledFooter>
				<StyledButton onClick={() => setEditProfile(true)}>EDIT</StyledButton>
				<StyledDeleteButton>DELETE</StyledDeleteButton>
			</StyledFooter>
		</>
	);
};

const defineUserStatus = active => {
	const status = active ? 'Activo' : 'Inactivo';
	return status;
};

export default UserProfileData;
