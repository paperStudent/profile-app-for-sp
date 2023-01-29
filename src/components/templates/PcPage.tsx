import styled from 'styled-components';
import { useMemo } from "react";

export const PcPage = () => {

	//ブラウザの高さ取得
	const windowHeightCss = useMemo(() => {
		return window.innerHeight;
	}, []);

	const StyleWrapper = styled.div`
		width: 100%;
		height: ${windowHeightCss}px;
		background-color: #2C2B2F;
		color: #fff;
	`;

	return (

		<StyleWrapper>
			ご覧いただきありがとうございます。<br/>
			当サイトはスマートフォン専用のサイトですので、<br />
			ブラウザの開発者ツールからスマートフォン表示に切り替えるか、<br />
			下記のQRコードをお手持ちの端末で読み取ってご覧ください。<br /><br />
			niwa	
		</StyleWrapper>

	);

};
