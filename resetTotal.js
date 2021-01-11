
const { Analysis, Device, Utils } = require("@tago-io/sdk");

// The function myAnalysis will run when you execute your analysis
async function myAnalysis(context) {
  // reads the values from the environment and saves it in the variable env_vars
  const env_vars = Utils.envToJson(context.environment);
  if (!env_vars.device_token) {
    return context.log("Missing device_token environment variable");
  }

  const device = new Device({ token: env_vars.device_token });
  // print to the console at TagoIO
  /*
  context.log(
    `The last record of the water_level is ${totValue}. It was inserted at ${totTime}`
  );
  */
  // Multiplies the water_level value by 2 and inserts it in another variable
  const obj_to_save = {
    variable: "totppl15_12",
    value: 0,
  };
  /*
  const obj_to_save2 = {
    variable: "pplin",
    value: pplinValue,
  };
  */
  try {
    await device.sendData(obj_to_save);
    context.log(
      `Succesfully reseted total`
      );
  } catch (error) {
    context.log("Error when inserting:", error);
  }
}

module.exports = new Analysis(myAnalysis);

// To run analysis on your machine (external)
// module.exports = new Analysis(myAnalysis, { token: "YOUR-TOKEN" });