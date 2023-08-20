const Migrations = artifacts.require("EventContract");

module.exports = function (deployer) {

  deployer.deploy(Migrations,"3600","3600","3");
};