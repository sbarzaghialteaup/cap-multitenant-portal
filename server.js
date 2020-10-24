const cds = require("@sap/cds");

var myLogger = function (req, res, next) {
	console.log("XXX_LOGGED");
	console.log("XXX_==== method: " + req.method + " + " + req.url);
	console.log("XXX_==== headers:" + JSON.stringify(req.headers, null, 2) + "====");
	console.log("XXX_==== body:" + JSON.stringify(req.body, null, 2) + "====");
	next();
};

cds.on("bootstrap", async (app) => {
	await cds.mtx.in(app); // serve cds-mtx APIs

	console.log("🤷‍♂️ Activating my logs... ");
	app.use(myLogger);

	console.log("🤷‍♂️ Overriding Default Provisioning... ");
	const provisioning = await cds.connect.to("ProvisioningService");
	provisioning.impl(require("./srv/saas-provisioning/provisioning"));
});

// Delegate bootstrapping to built-in server.js
module.exports = cds.server;
