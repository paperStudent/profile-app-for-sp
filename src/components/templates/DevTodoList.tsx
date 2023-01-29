import { SubPage } from "components/organisms/SubPage";
import imgPc from "img/icon_pc.jpg";

export const DevTodoList = () => {

	return (

		<>
			<SubPage
				img={imgPc}
				alt="TodoList"
				title="TodoList"
				href="https://react-tutorial-201a3.web.app/"
				text="React hooksの学習用に作成したTodolistに、Tailwind CSSでスタイルをつけました。それをFirebaseでデプロイしています。"
			/>
		</>

	);

};