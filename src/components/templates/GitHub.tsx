import { SubPage } from "components/organisms/SubPage";
import imgGitHub from "img/icon_github.svg";


export const GitHub = () => {
	
	return (
		<>
			<SubPage
				img={imgGitHub}
				alt="GitHub"
				title="GitHub"
				href="https://github.com/paperStudent"
				text="React HooksやTailwind CSS、TypeScriptの学習の成果をGitHubにあげています。"
			/>
		</>

	);

};