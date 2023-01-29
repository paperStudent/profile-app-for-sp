import styled from 'styled-components';
import { useMemo } from "react";
import imgTransition from "img/icon_transition.svg";

export const SubPage = (props: any) => {

	//ブラウザの高さ取得
	const windowHeightCss = useMemo(() => {
		return window.innerHeight;
	}, []);

	const StyleSubPage = styled.div`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: ${windowHeightCss}px;
		background-color: #2C2B2F;
		border-bottom: 1px solid #fff;
		padding-top: 60px;
		box-sizing: border-box;

		.title{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			background-color: #fff;
			padding: 30px 0;
			white-space: nowrap;

			img{
				width: 100px;
				height: auto;
			}

			p{
				width: 50%;
				font-family: 'Lora', serif;
				font-size: 22px;
				font-weight: 400;
				margin-left: 10px;
				text-align: center;
			}
		}

		.contents-list{
			width: 100%;
			box-sizing: border-box;
			padding: 54px 20px 20px;
			li{
				width: 100%;
				color: #fff;
				div{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					line-height: 30px;
					box-sizing: border-box;
					.link-button{
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #fff;
						color: #333;
						width: 214px;
						height: 60px;
						border-radius: 60px;
						padding-right: 16px;
						margin-top: 40px;
						box-sizing: border-box;
						::before{
							position: absolute;
							content: '';
							background-image: url(${imgTransition});
							background-repeat: no-repeat;
							background-size: contain;
							top: 16px;
							right: 20px;
							width: 30px;
							height: 30px;
						}
					}
				}
				.text{
						font-size: 13px;
				}
			}
		}
	`;

	return (

		<StyleSubPage>

			<div className='title'>
				<img src={props.img} alt={props.alt} />
				<p>{props.title}</p>
			</div>

			<ul className='contents-list'>
				<li>
					<div className='text'>
						{props.text}
					</div>
					<div>
						<a className='link-button' href={props.href}>
							サイトを見る
						</a>
					</div>
				</li>
			</ul>

		</StyleSubPage>

	);

};