import { alcoholData, malicAcidData, scatterPlotData } from "../Utils/plotData";

export const barGraphOptions = {
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
		trigger: "axis",
		axisPointer: {
			type: "shadow",
		},
	},
	grid: {
		bottom: 90,
	},
	dataZoom: [
		{
			type: "inside",
		},
		{
			type: "slider",
		},
	],
	media: [
		{
			query: {
				maxWidth: 500, // when container width is smaller than 500
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
	yAxis: {
		splitArea: {
			show: true,
		},
	},
	series: [
		{
			type: "bar",
			data: malicAcidData,
			large: true,
		},
	],
};

export const scatterGraphOptions = {
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
	legend: {
		data: ["class 1", "class 2", "class 3"],
		bottom: 0,
	},
	xAxis: {},
	yAxis: {},
	media: [
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
