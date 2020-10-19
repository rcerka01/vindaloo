var secret = require("./secret");

module.exports = {
    app: {
        protocol: "http",
        port: "3011"
    },
    login: {
        user: secret.user,
        password: secret.password
    }
}
