import {
	StyledCardContainer,
	StyledCardsContainer,
	StyledImg,
	StyledUserName
} from './home.styles';

const Home = () => {
	return (
		<StyledCardsContainer>
			<StyledCardContainer>
				<StyledImg />
				<StyledUserName>Nombre</StyledUserName>
			</StyledCardContainer>
		</StyledCardsContainer>
	);
};

export default Home;
