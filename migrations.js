const Usuario = require("./models/Usuario");

(async () => {
  await Usuario.sync();
})();
