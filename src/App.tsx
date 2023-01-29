import { Header } from "components/organisms/Header";
import { Sidemenu } from "components/organisms/Sidemenu";
import { SidemenuSwitch } from "components/organisms/SidemenuSwitch";
import { Top } from "components/templates/Top";
import { GitHub } from "components/templates/GitHub";
import { useState, useEffect, useMemo } from "react";
import styled from 'styled-components';
import { BrowserRouter,	Routes,	Route } from 'react-router-dom';
import { DevTodoList } from "components/templates/DevTodoList";
import { DevManagementSystem } from "components/templates/DevManagementSystem";
import { PcPage } from "components/templates/PcPage";
import { UAParser } from "ua-parser-js";


function App() {

	const [sidemenuState, setSidemenuState] = useState<boolean>(false);

	const clickSidemenu = (): void => {
		setSidemenuState(!sidemenuState);
	};

	const SidemenuSwitchWrapStyle = styled.button`
		position: absolute;
		right: 14px;
		top: 10px;
		background: transparent;
		border: none;
		z-index: 5;
	`;

	const uaParserDevice = useMemo<string>(() => {
		return UAParser(window.navigator.userAgent).device.type;
	}, []);

	return (
		<div className="App">

			{uaParserDevice === 'mobile' || uaParserDevice === 'tablet'
			
			?

				<BrowserRouter>

					<Header />

					<SidemenuSwitchWrapStyle onClick={clickSidemenu}>
						<SidemenuSwitch sidemenuState={sidemenuState} />
					</SidemenuSwitchWrapStyle>

					<Sidemenu sidemenuState={sidemenuState} onClick={clickSidemenu} />

					<main>
						<Routes>
							<Route path="/" element={<Top />} />
							<Route path="GitHub" element={<GitHub />} />
							<Route path="DevTodoList" element={<DevTodoList />} />
							<Route path="DevManagementSystem" element={<DevManagementSystem />} />
						</Routes>
					</main>

				</BrowserRouter>

			:
				<PcPage />
			}

		</div>
	);
};

export default App;
 