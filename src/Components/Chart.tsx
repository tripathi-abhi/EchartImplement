import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

type ChartProps = {
	options: {};
	resizeObserver: {
		observe: (arg0: HTMLDivElement) => void;
	};
};

const Chart = ({ options, resizeObserver }: ChartProps) => {
	const myChart = useRef(null);
	useEffect(() => {
		const castDiv = myChart.current!;
		const chart = echarts.init(castDiv);
		chart.setOption(options);
		if (resizeObserver) {
			resizeObserver.observe(castDiv);
		}
	}, [options, resizeObserver]);

	return <div ref={myChart} className="chart__wrapper"></div>;
};

export default Chart;
