import styled from 'styled-components';
import { useMemo } from "react";
import imgQrcode from "img/QRcode.png";

export const PcPage = () => {

	//ブラウザの高さ取得
	const windowHeightCss: number = useMemo(() => {
		return window.innerHeight;
	}, []);

	const StyleWrapper = styled.div`
		width: 100%;
		height: ${windowHeightCss}px;
		background-color: #2C2B2F;
		color: #fff;
	`;

	const StyleImg = styled.img`
		width: 150px;
		height: auto;
		margin-top: 100px;
	`;

	return (

		<StyleWrapper>
			ご覧いただきありがとうございます。<br/>
			当サイトはスマートフォン専用になっております。<br />
			ブラウザの開発者ツール(F12)からスマートフォン表示に切り替えるか、<br />
			下記のQRコードをお手持ちの端末で読み取ってご覧ください。<br /><br />
			niwa<br /><br />
			<StyleImg src={imgQrcode} alt="QRコード" />
		</StyleWrapper>

	);

};
