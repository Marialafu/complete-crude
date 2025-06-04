import { useEffect, useState } from 'react';
import { StyledCardContainer } from './user-profile.styles';
import { getDataById } from '../../lib/utils/api';

const UserProfile = () => {
	console.log(getDataById('e65e1490-c230-4043-80bc-ea32fee5f57c'));

	const [user, setUser] = useState();
	if (!user) return <h2>Loading user...</h2>;

	useEffect(() => {
		getUserById(setUser);
	});

	return <StyledCardContainer>USER</StyledCardContainer>;
};

const getUserById = async setUser => {
	try {
		const user = await getDataById('e65e1490-c230-4043-80bc-ea32fee5f57c');
		console.log(user);
	} catch (error) {
		console.log(error);
	}
};

export default UserProfile;
