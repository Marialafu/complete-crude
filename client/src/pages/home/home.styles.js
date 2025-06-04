import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	padding: 0 1.875rem;
`;

const StyledCardContainer = styled.div`
	background-color: white;
	padding: 0.625rem;
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
`;

const StyledImg = styled.img`
	width: 3.125rem;
	border-radius: 100%;
`;

const StyledUserName = styled.h2`
	margin: 0;
`;

export { StyledCardsContainer, StyledCardContainer, StyledImg, StyledUserName };
