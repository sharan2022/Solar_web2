//#region node_modules/.nitro/vite/services/ssr/assets/solar-calculations-DVI2jf0S.js
var STORAGE_KEY = "aaryon-solar-calculations";
var pricingTable = [
	{
		capacityBand: 1,
		total: 102e3,
		subsidy: 3e4,
		afterSubsidy: 72e3
	},
	{
		capacityBand: 2,
		total: 18e4,
		subsidy: 6e4,
		afterSubsidy: 12e4
	},
	{
		capacityBand: 3,
		total: 228e3,
		subsidy: 78e3,
		afterSubsidy: 15e4
	},
	{
		capacityBand: 4,
		total: 275e3,
		subsidy: 78e3,
		afterSubsidy: 197e3
	},
	{
		capacityBand: 5,
		total: 334500,
		subsidy: 78e3,
		afterSubsidy: 256500
	},
	{
		capacityBand: 6,
		total: 395500,
		subsidy: 78e3,
		afterSubsidy: 317500
	},
	{
		capacityBand: 7,
		total: 454e3,
		subsidy: 78e3,
		afterSubsidy: 376e3
	},
	{
		capacityBand: 8,
		total: 514200,
		subsidy: 78e3,
		afterSubsidy: 436200
	},
	{
		capacityBand: 9,
		total: 562900,
		subsidy: 78e3,
		afterSubsidy: 484900
	},
	{
		capacityBand: 10,
		total: 62e4,
		subsidy: 78e3,
		afterSubsidy: 542e3
	}
];
function getPricing(capacity) {
	const capacityBand = Math.max(1, Math.ceil(capacity));
	const listedPrice = pricingTable.find((item) => item.capacityBand === capacityBand);
	if (listedPrice) return listedPrice;
	const tenKw = pricingTable[pricingTable.length - 1];
	const extraCapacity = capacityBand - tenKw.capacityBand;
	const extraKwPrice = tenKw.total - pricingTable[pricingTable.length - 2].total;
	const total = tenKw.total + extraCapacity * extraKwPrice;
	const subsidy = tenKw.subsidy;
	return {
		capacityBand,
		total,
		subsidy,
		afterSubsidy: total - subsidy
	};
}
function formatCurrency(value) {
	return `₹${Math.round(value).toLocaleString("en-IN")}`;
}
function createCsv(calculations) {
	return ["Name,Phone,Monthly units,Required capacity (kW),Submitted at,Approx. total,Government subsidy,Approx. cost after subsidy", ...calculations.map((item) => {
		const pricing = getPricing(item.capacity);
		return [
			item.name,
			item.phone,
			item.units,
			item.capacity,
			item.createdAt,
			pricing.total,
			pricing.subsidy,
			pricing.afterSubsidy
		].map((value) => `"${String(value).replaceAll("\"", "\"\"")}"`).join(",");
	})].join("\n");
}
function downloadCsv(calculations) {
	const blob = new Blob([createCsv(calculations)], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "aaryon-solar-leads.csv";
	link.click();
	URL.revokeObjectURL(url);
}
//#endregion
export { getPricing as i, downloadCsv as n, formatCurrency as r, STORAGE_KEY as t };
