import styled from 'styled-components';

const StyledImg = styled.img`
	width: 6.25rem;
	border-radius: 100%;
`;

const StyledPersonalDataContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.3125rem;
	margin-bottom: 0.625rem;
`;

const StyledButton = styled.button`
	border: 1px solid rgb(45, 141, 219);
	border-radius: 0.625rem;
	color: rgb(45, 141, 219);
	font-weight: bold;
	background-color: white;
	padding: 0.625rem;
	margin-bottom: 0.625rem;
`;

const StyledErrorMessage = styled.span`
	color: red;
`

export { StyledImg, StyledPersonalDataContainer, StyledButton, StyledErrorMessage };
