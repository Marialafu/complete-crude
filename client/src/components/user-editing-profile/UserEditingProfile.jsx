import { useEffect } from 'react';
import { StyledTagContainer } from '../../pages/user-profile/user-profile.styles';
import {
	StyledErrorMessage,
	StyledImg,
	StyledPersonalDataContainer
} from './user-editing-profile.styles';
import { updateDataById } from '../../lib/utils/api';
import { StyledButton } from '../user-profile-data/user-profile-data.styles';
import { useForm } from 'react-hook-form';
import { VALIDATIONS } from '../../constants/validationsData';

const UserEditingProfile = ({ user, setEditProfile }) => {
	// useEffect(() => {
	// 	updateUser(user.userId, );
	// }, [user]);

	const {
		handleSubmit,
		register,
		formState: { errors },
		watch
	} = useForm({
		defaultValues: {
			active: user.active,
			name: user.fullName,
			email: user.email,
			phone: user.phoneNumber
		}
	});

	return (
		<>
			<StyledImg src={user.profilePicture} />
			<StyledPersonalDataContainer
				onSubmit={handleSubmit(event =>
					updateUser(user.userId, event, setEditProfile)
				)}
			>
				<StyledTagContainer>
					<label htmlFor='active'>Active</label>
					<input type='checkbox' id='active' {...register('active')} />
				</StyledTagContainer>
				<StyledTagContainer>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						{...register('name', VALIDATIONS.name)}
					/>
					<StyledErrorMessage>{errors?.name?.message}</StyledErrorMessage>
				</StyledTagContainer>
				<StyledTagContainer>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						{...register('email', VALIDATIONS.email)}
					/>
					<StyledErrorMessage>{errors?.email?.message}</StyledErrorMessage>
				</StyledTagContainer>
				<StyledTagContainer>
					<label htmlFor='phone'>Phone</label>
					<input
						type='text'
						id='phone'
						{...register('phone', VALIDATIONS.phone)}
					/>
					<StyledErrorMessage>{errors?.phone?.message}</StyledErrorMessage>
				</StyledTagContainer>
				<StyledButton type='submit'>SAVE</StyledButton>
			</StyledPersonalDataContainer>
		</>
	);
};

const updateUser = async (id, body, setEditProfile) => {
	console.log(body);

	try {
		const user = await updateDataById(id, body);
		await setEditProfile(false);
	} catch (error) {
		console.log(error);
	}
};

export default UserEditingProfile;
