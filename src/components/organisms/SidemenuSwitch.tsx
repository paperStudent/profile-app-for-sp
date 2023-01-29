import { IconMenu } from 'components/atoms/IconMenu';
import { IconClose } from 'components/atoms/IconClose';
import styled from 'styled-components';

type Props = {
	sidemenuState: boolean,
};

export const SidemenuSwitch = (props: Props) => {

	return (
			<StyledSidemenuSwitch >
				{props.sidemenuState ? <IconClose /> : <IconMenu /> }
			</StyledSidemenuSwitch>
	);

};

const StyledSidemenuSwitch = styled.div`
	display: flex;
	align-items: center;
`;