import styled from 'styled-components';
import iconCloseSvg from "img/icon_close.svg";

export const IconClose = () => {
	return <StyleIconClose src={iconCloseSvg} alt="閉じる" />;
}

const StyleIconClose = styled.img`
	width: 40px;
	height: 40px;
`;