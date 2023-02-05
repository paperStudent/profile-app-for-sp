import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "mySwipeStyle.css";
import { Pagination } from "swiper";
import imgMain from "img/main.jpg";
import imgMain2 from "img/main_2.jpg";
import imgGuitar from "img/guitar.jpg";
import imgWork from "img/work.jpg";
import imgWork2 from "img/work2.jpg";
import imgSkills from "img/skills.jpg";

type Props = {
	//propsの型を定義
};


export const ProfileContents = () => {

	return (
		<StyleProfileContents>
			<Swiper pagination={true} modules={[Pagination]} className="mySwiper">

				<SwiperSlide>
					<StyleUnit>
						<img className='image main' />
						<p className='sub-title'>自己紹介</p>
						<div className='description-wrap'>
							<p className='description'>
								Soichiro Niwa<br />
								1996年 岐阜県生まれ<br />
								職業：フロントエンドエンジニア
							</p>
						</div>
					</StyleUnit>
				</SwiperSlide>

				<SwiperSlide>
					<StyleUnit>
						<img className='image main2' />
						<p className='sub-title'>自己紹介②</p>
						<div className='description-wrap'>
							<p className='description'>
								大学入学とともに上京。<br />
								学生寮にて毎晩遅くまでマリオカートにいそしんだ結果<br />
								午前中に起きることができず卒業の危機に瀕していたが<br />
								定期試験で火事場の馬鹿力を発揮し無事卒業。<br />
								現在では一人暮らしを始めたため夜更かしをすることもなくなり、まっとうな生活を送っている。
							</p>
						</div>
					</StyleUnit>
				</SwiperSlide>

				<SwiperSlide>
					<StyleUnit>
						<img className='image guitar' />
						<p className='sub-title'>趣味・特技</p>
						<div className='description-wrap'>
							<p className='description'>
								趣味：音楽ライブやお笑いライブに行くこと<br />
								特技：大喜利, ギター
							</p>
						</div>
					</StyleUnit>
				</SwiperSlide>

				<SwiperSlide>
					<StyleUnit>
						<img className='image work' />
						<p className='sub-title'>経験した業務</p>
						<div className='description-wrap'>
							<p className='description'>
								・音声通話アプリケーションのフロントエンド開発<br />
								・社内向けアプリケーションのDB設計、<br />
								　バックエンド・フロントエンド開発<br />
								・集客サイト制作&SEO対策
							</p>
						</div>
					</StyleUnit>
				</SwiperSlide>

				<SwiperSlide>
					<StyleUnit>
						<img className='image skills' />
						<p className='sub-title'>スキル</p>
						<div className='description-wrap'>
							<div className='description'>
								<p>HTML5</p>
								<p>CSS3</p>
								<p className="framework">・sass</p>
								<p>JavaScript</p>
								<p className="framework">・jQuery</p>
								<p>TypeScript</p>
								<p className="framework">・React</p>
							</div>
							<div className='description'>
								<p>PHP</p>
								<p className="framework">・laravel</p>
								<p>MySQL</p>
								<p>Git</p>
								<p>AWS</p>
								<p>Lighthouse</p>
								<p>Google Analytics 4</p>
							</div>
						</div>
					</StyleUnit>
				</SwiperSlide>

				<SwiperSlide>
					<StyleUnit>
						<img className='image work2' />
						<p className='sub-title'>この仕事について</p>
						<div className='description-wrap'>
							<p className='description'>
								一心不乱でコーディングしている時がとても幸せです。<br />
								定時の鐘が鳴り、<br />
								「もうこんな時間なんだ」と毎日思えるぐらい、<br />
								没入できる仕事をこれからもしていきたいです。<br />
								また自分の習得した技術によって利益が生まれたり、<br />
								案件が前進したりする感覚に快感を覚えます。
							</p>
						</div>
					</StyleUnit>
				</SwiperSlide>

			</Swiper>
		</StyleProfileContents>
	);

};

const StyleProfileContents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyleUnit = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 500px;
	
	.image{
		width: 170px;
		height:170px;
		max-height: 300px;
		border-radius: 50%;
		background-size:cover;
		background-repeat: no-repeat;

		&.main{
			background-image:url(${imgMain});
		}
		&.main2{
			background-image:url(${imgMain2});
		}
		&.guitar{
			background-image:url(${imgGuitar});
		}
		&.work{
			background-image:url(${imgWork});
		}
		&.work2{
			background-image:url(${imgWork2});
		}
		&.skills{
			background-image:url(${imgSkills});
		}
	}

	.sub-title{
		position: relative;
		color: #AA4FC6;
		font-size: 16px;
		font-weight: bold;
		margin: 28px 0 12px;
	}

	.description-wrap{
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 230px;
		padding: 0 10px;
		box-sizing: border-box;
		overflow: scroll;
		
		.description{
			line-height: 28px;
			box-sizing: border-box;
			font-size: 13px;
			font-weight: bold;
			text-align: justify;

			+ .description{
				margin-left: 30px;
			}

			.framework{
				padding-left: 18px;
			}

		}

	}

`;
