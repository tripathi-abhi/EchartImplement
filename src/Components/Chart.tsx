import { useEffect, useRef } from "react";
import * as echarts from "echarts"; // This is the safest way to import echarts.

// type and template are two ways to specify the content of an etnity. type is generally used for objects.
// ChartProps object has a object options and a resize object with again has a function observe (takes a html div as parameter and returns nothing or void).

type ChartProps = {
	options: {};
	resizeObserver: {
		observe: (arg0: HTMLDivElement) => void;
	};
};

// options and resizeObserver are the props of Chart compoenent passed to it by the parent component i.e., App component.

const Chart = ({ options, resizeObserver }: ChartProps) => {
	const myChart = useRef(null);
	useEffect(() => {
		const castDiv = myChart.current!; // myChart.current may be null which cannot be a valid HTML div passed to the echarts.init.
		const chart = echarts.init(castDiv); // echarts.init() takes a HTML div reference as parameter and that div is not the chart div.
		chart.setOption(options); // chart.setOptions() takes the options of the graph as parameter and set it on the chart div.
		if (resizeObserver) {
			resizeObserver.observe(castDiv); // observe() function on the resizeObserver object takes a div ref as parameter and watches it for a resize.
		}
	}, [options, resizeObserver]); // The useEffect has two dependencies. Whenever options or the size of the window changes the chart component re-renders.

	return <div ref={myChart} className="div__chart"></div>;
};

export default Chart;
