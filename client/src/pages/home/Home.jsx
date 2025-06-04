import { useEffect } from 'react';
import { getAllData } from '../../lib/utils/api';
import {
	StyledCardContainer,
	StyledCardsContainer,
	StyledImg,
	StyledStatus,
	StyledUserName
} from './home.styles';

const Home = ({ users }) => {
	const [users, setUsers] = useState();

	useEffect(() => {
		getUsers(setUsers);
	}, []);

	if (!users) return;

	return (
		<StyledCardsContainer>
			{users.map(user => (
				<StyledCardContainer key={user.userId}>
					<StyledImg src={user.profilePicture} />
					<StyledUserName>@{user.username}</StyledUserName>
					<span>{user.email}</span>
					<span>{user.fullName}</span>
					<StyledStatus $active={user.active}>
						{defineUserStatus(user.active)}
					</StyledStatus>
				</StyledCardContainer>
			))}
			;
		</StyledCardsContainer>
	);
};

const getUsers = async setUsers => {
	try {
		const users = await getAllData();
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};

const defineUserStatus = active => {
	const status = active ? 'Activo' : 'Inactivo';
	return status;
};

export default Home;
