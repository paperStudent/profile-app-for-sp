import { SubPage } from "components/organisms/SubPage";
import imgPc from "img/icon_pc.jpg";

export const DevManagementSystem = () => {

	return (

		<>
			<SubPage
				img={imgPc}
				alt="代理店管理システム"
				title="代理店管理システム"
				href="http://newworldmr.php.xdomain.jp/?test=1"
				text="PC用サイトです。PHPでログイン処理をし、MySQLを用いてデータの入出力をしています。"
			/>
		</>

	);

};