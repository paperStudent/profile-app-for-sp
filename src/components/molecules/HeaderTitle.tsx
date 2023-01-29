import styled from 'styled-components';

type Props = {
	//propsの型を定義
};

export const HeaderTitle = () => {

	return (
		<StyledHeaderTitle>
			ポートフォリオ
		</StyledHeaderTitle>
	);

};

const StyledHeaderTitle = styled.div`
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	letter-spacing: 8px;
`;