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

const UserEditingProfile = ({ user, setUser, setEditProfile, setLoading }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		defaultValues: {
			active: user.active,
			fullName: user.fullName,
			email: user.email,
			phoneNumber: user.phoneNumber,
			dateOfBirth: user.dateOfBirth
		}
	});

	return (
		<>
			<StyledImg src={user.profilePicture} />
			<StyledPersonalDataContainer
				onSubmit={handleSubmit(event =>
					updateUser(user.userId, event, setEditProfile, setUser, setLoading)
				)}
			>
				<StyledTagContainer>
					<label htmlFor='active'>Active</label>
					<input type='checkbox' id='active' {...register('active')} />
				</StyledTagContainer>
				<StyledTagContainer>
					<label htmlFor='fullName'>Name</label>
					<input
						type='text'
						id='fullName'
						{...register('fullName', VALIDATIONS.fullName)}
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
					<label htmlFor='dateOfBirth'>Date of Birth</label>
					<input type='date' id='dateOfBirth' {...register('dateOfBirth')} />
					<StyledErrorMessage>{errors?.email?.message}</StyledErrorMessage>
				</StyledTagContainer>
				<StyledTagContainer>
					<label htmlFor='phoneNumber'>Phone</label>
					<input type='text' id='phoneNumber' {...register('phoneNumber')} />
					<StyledErrorMessage>{errors?.phone?.message}</StyledErrorMessage>
				</StyledTagContainer>
				<StyledButton type='submit'>SAVE</StyledButton>
			</StyledPersonalDataContainer>
		</>
	);
};

const updateUser = async (id, body, setEditProfile, setUser, setLoading) => {
	const userUpdated = await updateDataById(id, body);
	setEditProfile(false);
	setUser(userUpdated);
	setLoading(false);
};

export default UserEditingProfile;
