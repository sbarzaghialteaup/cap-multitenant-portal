const cds = require("@sap/cds");

module.exports = async function (srv) {
  const externalNorthwind = await cds.connect.to("Northwind");

  srv.on("READ", "Products", async (req) => {
    const externalNorthwindTransaction = externalNorthwind.transaction(req);
    try {
      let result = await externalNorthwindTransaction.run(req.query);
      return result;
    } catch (error) {
      console.error("Error Message: " + error.message);
      if (error.request && error.request.path) {
        console.error("Request Patch: " + error.request.path);
      }
    }
  });
};
