import { SubPage } from "components/organisms/SubPage";
import imgPc from "img/icon_pc.jpg";

export const TwitterAnalysis = () => {

	return (

		<>
			<SubPage
				img={imgPc}
				alt="TwitterAnalysis"
				title="TwitterAnalysis"
				href="https://bazzreach.xyz/bazzreach"
				text="TwitterAPIでツイートを取得し、Amazon Comprehendを利用した簡易な感情分析を行っています。Laravel9でサイトを構築し、AWSにデプロイしています。"
			/>
		</>

	);

};