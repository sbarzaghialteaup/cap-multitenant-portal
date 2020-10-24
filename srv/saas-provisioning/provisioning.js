module.exports = (service) => {
	service.on("UPDATE", "tenant", async (req, next) => {
		const res = await next(); // first call default implementation which is doing the HDI container creation
		let url = `https://${req.data.subscribedSubdomain}http://ccp-customera.dt.cpp.cfapps.eu10.hana.ondemand.com/`;
		console.log("[INFO ][ON_UPDATE_TENANT] " + "Application URL is " + url);
		return url;
	});
};
