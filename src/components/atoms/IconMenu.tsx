import styled from 'styled-components';
import iconMenuSvg from "img/icon_menu.svg";

export const IconMenu = () => {
	return <StyleIconMenu src={iconMenuSvg} alt="閉じる" />;
}

const StyleIconMenu = styled.img`
	width: 40px;
	height: 40px;
`;