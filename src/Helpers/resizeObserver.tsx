import * as echarts from "echarts";

// resizeObserver API is the modern web API to listen to resize of the component it is set to observe (resizeObserver.observe(element)).

export default new ResizeObserver(entries => {
	// console.log(entries);
	entries.map(({ target }) => {
		const castTarget = target as HTMLDivElement; // target is a property on entry object. It misses some property which a div html element has. So a type cast is necessary.
		const instance = echarts.getInstanceByDom(castTarget); // castTarget is the chart div ref and the API listens for its resize.
		if (target) {
			return instance.resize();
		}
		return null; // Just to return something from the function.
	});
});
