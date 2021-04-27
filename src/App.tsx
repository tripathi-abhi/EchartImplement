import "./App.css";
import {
	barGraphOptions,
	scatterGraphOptions,
} from "./GraphOptions/graphOptions";
import Chart from "./Components/Chart";
import resizeObserver from "./Helpers/resizeObserver";

// This is the main App where both the charts are used. I prefer BEM naming convention for classNames.

const App = () => {
	return (
		<div className="App container__graph">
			<div className="chart__wrapper">
				{/* This chart component is for bar graph. The props are explained in the chart component itself. */}
				<Chart options={barGraphOptions} resizeObserver={resizeObserver} />
			</div>
			<div className="chart__wrapper">
				{/* This chart component is for scatter plot. */}
				<Chart options={scatterGraphOptions} resizeObserver={resizeObserver} />
			</div>
		</div>
	);
};

export default App;
