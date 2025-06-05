import { Link, useNavigate } from 'react-router-dom';
import { deleteDataById } from '../../lib/utils/api';
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
	const navigateToPrevious = useNavigate();
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
				<span>Phone Number: {formatedPhoneNumber(user.phoneNumber)}</span>
			</StyledPersonalDataContainer>
			<StyledFooter>
				<StyledButton onClick={() => setEditProfile(true)}>EDIT</StyledButton>
				<StyledDeleteButton
					onClick={() => deleteUser(user.userId, navigateToPrevious(-1))}
				>
					DELETE
				</StyledDeleteButton>
			</StyledFooter>
		</>
	);
};

const defineUserStatus = active => {
	const status = active ? 'Activo' : 'Inactivo';
	return status;
};

const deleteUser = async (id, navigateToPrevious) => {
	try {
		await deleteDataById(id);
		await navigateToPrevious();
	} catch (error) {
		return console.log(error);
	}
};

const formatedPhoneNumber = phoneNumber => {
	//como hacer bien
	const intro = '+';
	const unifyDigits = phoneNumber.replace(/\D/g, '');
	const divideDigits = unifyDigits.match(/.{1,4}/g).join('-');

	return intro + divideDigits;
};

export default UserProfileData;
