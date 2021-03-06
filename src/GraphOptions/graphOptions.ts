// This file contains the options of the charts according to the apache echarts documentation.

import { TooltipComponentOption, LegendComponentOption,GridComponentOption,ToolboxComponentOption  } from "echarts/components";
import { XAXisComponentOption, YAXisComponentOption} from "echarts/";
import { alcoholData, malicAcidData, scatterPlotData } from "../Utils/plotData";

// type toolboxTemplate = {
// 		feature: {
// 			dataZoom?: { yAxisIndex: boolean };
// 			saveAsImage?: { pixelRatio: number };
// 		};
// }

// type tooltipTemplate = {
// 		trigger?:string;
// 		axisPointer:{};
// }

// type gridTemplate = {
// 	top?:number|string;
// 	left?:number|string;
// 	right?:number|string;
// 	bottom?: number | string;
// }

// export type optionsTemplate = {
// 	toolbox?: toolboxTemplate;
// 	tooltip?: tooltipTemplate;
// 	dataZoom?:{type:string;}[];
// 	grid?: gridTemplate;
// 	media?: mediaTemplate[];
// 	xAxis: {
// 		data?:(number)[];
// 		silent?:boolean;
// 		splitLine?:{
// 			show:boolean,
// 		};
// 		splitArea?:{
// 			show:boolean,
// 		};
// 	};
// 	yAxis: {};
// 	series?: seriesTemplate[];
// 	legend?:{
// 		data?:string[],
// 		bottom?:string|number;
// 	}
// };

type mediaTemplate = {
			query?:{
				aspectRatio?:string,
				minWidth?:number,
				maxWidth?: number,
			},
			option: {
				title: {
					text?: string,
				},
			}
};

type seriesTemplate = {
			symbolSize?: number,
			name?: string,
			data: number[]|number[][],
			type: string,
			large?:boolean,
}

export type optionsTemplate = {
	toolbox?: ToolboxComponentOption;
	tooltip?: TooltipComponentOption;
	dataZoom?: { type: string }[];
	grid?: GridComponentOption;
	media?: mediaTemplate[];
	xAxis: XAXisComponentOption;
	yAxis: YAXisComponentOption;
	series?: seriesTemplate[];
	legend?: LegendComponentOption;
};

export const barGraphOptions : optionsTemplate = {
	// For the toolbox (Data zoom and picture save tools)  at the top right of the chart.
	toolbox: {
		feature: {
			dataZoom: {
				yAxisIndex: false,
			},
			saveAsImage: {
				pixelRatio: 2,
			},
		},
	},
	// For the hover affect on the bars.
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow",
		},
	},
	grid: {
		bottom: 90,
	},
	// For the data zoom feature at the bottom. This feature is best for dense bars and graph.
	dataZoom: [
		{
			type: "inside",
		},
		{
			type: "slider",
		}
	],
	// Similar to css media query. The very last media option doesn't need query as it is the base property i.e., when no other property is applicable.
	media: [
		{
			query: {
				maxWidth: 500,
			},
			option: {
				title: {
					text: "Alcohol vs \nMalic Acid",
				},
			},
		},
		{
			option: {
				title: {
					text: "Alcohol vs Malic Acid",
				},
			},
		},
	],
	// Details about the x-axis. With split area and splitting line showing up.
	xAxis: {
		data: alcoholData,
		silent: false,
		splitLine: {
			show: true,
		},
		splitArea: {
			show: true,
		},
	},
	// Details about the y-axis.
	yAxis: {
		splitArea: {
			show: true,
		},
	},
	// This is where the series type and the data for the series is mentioned. Can be more than one series.
	series: [
		{
			type: "bar",
			data: malicAcidData,
			large: true,
		},
	],
};

export const scatterGraphOptions : optionsTemplate = {
	// This is same as for bar graph options.
	toolbox: {
		feature: {
			dataZoom: {
				yAxisIndex: false,
			},
			saveAsImage: {
				pixelRatio: 2,
			},
		},
	},
	tooltip: {
		axisPointer: {
			type: "shadow",
		},
	},
	// The legend is used to mark various series with color and tells about the label for that series data (differentiates data of various series).
	legend: {
		data: ["class 1", "class 2", "class 3"],
		bottom: 0, // At bottom basically css absolute positioning.
	},
	xAxis: {},
	yAxis: {},
	media: [
		// Media query like for the bar graph. Has three properties min-width,max-width and aspect-ratio
		{
			query: {
				maxWidth: 500, // when container width is smaller than 500
			},
			option: {
				title: {
					text: "Color Intensity \nvs Hue",
				},
			},
		},
		{
			option: {
				title: {
					text: "Color Intensity vs Hue",
				},
			},
		},
	],
	series: [
		// More than one series based on the class. All the data here is in utility folder.
		{
			symbolSize: 10,
			name: "class 1",
			data: scatterPlotData.class1,
			type: "scatter",
		},
		{
			symbolSize: 10,
			name: "class 2",
			data: scatterPlotData.class2,
			type: "scatter",
		},
		{
			symbolSize: 10,
			name: "class 3",
			data: scatterPlotData.class3,
			type: "scatter",
		},
	],
};
