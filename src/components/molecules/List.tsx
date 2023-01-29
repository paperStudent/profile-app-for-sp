import styled from 'styled-components';
import iconArrowWhite from "img/icon_arrow_white.svg";

export const List = (props) => {
	return(
		<StyleList>
			{props.children}
			<StyleArrow src={iconArrowWhite} />
		</StyleList>
	);
}

const StyleList = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	border-top: 1px solid #fff;
	border-bottom: 1px solid #fff;
	width: 275px;
	height: 50px;
	padding-left: 13px;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
	text-align: left;
	&:hover{
		background-color: rgba(255,255,255,0.1);
	}
	
	+ button{
		border-top: none;
	}

`;

const StyleArrow = styled.img`
	position: absolute;
	top: 13px;
	right: 8px;
	width: 24px;
	height: 24px;
`;