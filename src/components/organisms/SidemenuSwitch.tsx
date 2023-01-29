import { IconMenu } from 'components/atoms/IconMenu';
import { IconClose } from 'components/atoms/IconClose';
import styled from 'styled-components';

type Props = {
	sidemenuState: boolean,
};


export const SidemenuSwitch = (props: Props) => {

	let switchType = props.sidemenuState ? <IconClose /> : <IconMenu /> ;

	return (

			<StyledSidemenuSwitch >
				{ switchType }
			</StyledSidemenuSwitch>
	);

};

const StyledSidemenuSwitch = styled.div`
	display: flex;
	align-items: center;
`;