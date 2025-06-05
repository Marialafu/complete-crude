import { useEffect } from 'react';
import { StyledTagContainer } from '../../pages/user-profile/user-profile.styles';
import {
	StyledImg,
	StyledPersonalDataContainer
} from './user-editing-profile.styles';
import { updateDataById } from '../../lib/utils/api';
import { StyledButton } from '../user-profile-data/user-profile-data.styles';

const UserEditingProfile = ({ user }) => {
	// useEffect(() => {
	// 	updateUser(user.userId, );
	// }, [user]);

	return (
		<>
			<StyledImg src={user.profilePicture} />
			<StyledPersonalDataContainer onSubmit={saveNewUserData}>
				<StyledTagContainer>
					<label htmlFor='active'>Active</label>
					<input type='checkbox' id='active' />
				</StyledTagContainer>
				<StyledTagContainer>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' defaultValue={user.fullName} />
				</StyledTagContainer>
				<StyledButton type='submit'>SAVE</StyledButton>
			</StyledPersonalDataContainer>
		</>
	);
};

// const updateUser = async (id, string) => {
// 	try {
// 		const user = await updateDataById(id, string);
// 		console.log(user);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

const saveNewUserData = event => {
	console.log(event);
};

export default UserEditingProfile;
