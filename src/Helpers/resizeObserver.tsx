import * as echarts from "echarts";

export default new ResizeObserver(entries => {
	entries.map(({ target }) => {
		const castTarget = target as HTMLDivElement;
		const instance = echarts.getInstanceByDom(castTarget);
		if (target) {
			instance.resize();
		}
		return null;
	});
});
