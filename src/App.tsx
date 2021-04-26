import React from "react";
import "./App.css";
import {
	barGraphOptions,
	scatterGraphOptions,
} from "./GraphOptions/graphOptions";
import Chart from "./Components/Chart";
import resizeObserver from "./Helpers/resizeObserver";

const App = () => {
	return (
		<div className="App container__graph">
			<div className="div__chart">
				<Chart options={barGraphOptions} resizeObserver={resizeObserver} />
			</div>
			<div className="div__chart">
				<Chart options={scatterGraphOptions} resizeObserver={resizeObserver} />
			</div>
		</div>
	);
};

export default App;
