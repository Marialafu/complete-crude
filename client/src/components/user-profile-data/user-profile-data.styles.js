import styled from 'styled-components';

const StyledButton = styled.button`
	border: 1px solid rgb(45, 141, 219);
	border-radius: 0.625rem;
	color: rgb(45, 141, 219);
	font-weight: bold;
	background-color: white;
	padding: 0.625rem;
	margin-bottom: 0.625rem;
`;

const StyledDeleteButton = styled(StyledButton)`
	color: red;
	border: 1px solid red;
`;

const StyledProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3125rem;
	align-items: center;
	margin-bottom: 0.625rem;
`;

const StyledUserName = styled.h2`
	margin: 0;
`;

const StyledPersonalDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3125rem;
	margin-bottom: 0.625rem;
`;

const StyledStatus = styled.span`
	color: ${({ $active }) => ($active ? 'green' : 'red')};
	position: relative;
	display: flex;
	align-items: center;
	left: 0.9375rem;

	&::before {
		content: '';
		position: absolute;
		left: -0.9375rem;
		width: 0.625rem;
		height: 0.625rem;
		background-color: ${({ $active }) => ($active ? 'green' : 'red')};
		border-radius: 100%;
	}
`;

const StyledFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledImg = styled.img`
	width: 6.25rem;
	border-radius: 100%;
`;

export {
	StyledButton,
	StyledDeleteButton,
	StyledProfileContainer,
	StyledUserName,
	StyledPersonalDataContainer,
	StyledStatus,
	StyledFooter,
	StyledImg
};
