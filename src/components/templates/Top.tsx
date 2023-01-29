import { ProfileContents } from "components/organisms/ProfileContents";
import styled from 'styled-components';



export const Top = () => {


	return (
		<>
			<Stylemain>
				<ProfileContents />
			</Stylemain>
		</>
	);

};

const Stylemain = styled.div`
		padding: 55px 0 50px;
`;