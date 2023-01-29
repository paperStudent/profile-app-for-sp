import { List } from 'components/molecules/List';
import styled from 'styled-components';
import { useMemo } from "react";
import { Link } from 'react-router-dom';


type Props = {
	sidemenuState: boolean,
	onClick: any//要修正
};

export const Sidemenu = (props: Props) => {

	//ブラウザの高さ取得
	const windowHeightCss = useMemo(() => {
		return window.innerHeight;
	}, []);

	const display = props.sidemenuState ? 'flex' : 'none' ;


	const StyleSidemenu = styled.div`
		position: fixed;
		display: ${display};
		flex-direction: column;
		align-items: center;
		top: 0;
		left: 0;
		width: 100%;
		height: ${windowHeightCss}px;
		padding-top: 40px;
		background-color: rgb(54 42 42 / 45%);
		backdrop-filter: blur(10px);
		z-index: 2;

		a{
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #fff;
			width: 100%;
			height: 100%;;
		}

	`;

	const Styletitle = styled.p`
		color: #fff;
		font-size: 18px;
		font-weight: 500;
		padding-bottom: 4px;
	`;

	return (
		<StyleSidemenu>
			<Styletitle>menu</Styletitle>

			<List>
				<Link to="/" onClick={props.onClick}>
					トップページ
				</Link>
			</List>
			<List>
				<Link to="GitHub" onClick={props.onClick}>
					GitHub
				</Link>
			</List>
			<List>
				<Link to="DevTodoList" onClick={props.onClick}>
					個人開発: TodoList
				</Link>
			</List>
			<List>
				<Link to="DevManagementSystem" onClick={props.onClick}>
					個人開発: 代理店管理システム<br />
					※PC用サイト
				</Link>
			</List>

		</StyleSidemenu>
	);

}
