import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
	padding: 0 1.875rem;
	margin-bottom: 1.875rem;
`;

const StyledCardContainer = styled.div`
	background-color: white;
	padding: 0.625rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 0.625rem;
	width: 90%;
	box-shadow: 0 0.3125rem 1.25rem 0 rgba(0, 0, 0, 0.54);
	border-radius: 0.625rem;
`;

const StyledImg = styled.img`
	width: 3.125rem;
	border-radius: 100%;
`;

const StyledUserName = styled.h2`
	margin: 0;
`;

const StyledStatus = styled.span`
	color: ${({$active}) => $active ? 'green' : 'red'};
	position: relative;
	display: flex;
	align-items: center;

	&::before{
	content: '';
	position: absolute;
	left: -0.9375rem;
	width: 0.625rem;
	height: 0.625rem;
	background-color: ${({$active}) => $active ? 'green' : 'red'};
	border-radius: 100%;
	}
`

const StyledButton = styled.button`
	border: 1px solid rgb(45, 141, 219);
	border-radius: 0.625rem;
	color: rgb(45, 141, 219);
	font-weight: bold;
	background-color: white;
	padding: 0.625rem;
`

export { StyledCardsContainer, StyledCardContainer, StyledImg, StyledUserName, StyledStatus, StyledButton };
