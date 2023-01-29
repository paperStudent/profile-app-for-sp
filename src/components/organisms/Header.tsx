import styled from 'styled-components';
import { HeaderTitle } from "components/molecules/HeaderTitle";

export const Header = () => {

	return (
		<StyleHeader>
				<HeaderTitle/>
		</StyleHeader>
	);

}

const StyleHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding-left: 24px;
	padding-right: 20px;
	background-color: #4B3A49;
	z-index: 2;
`;