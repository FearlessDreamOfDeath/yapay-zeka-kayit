const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  //fofgcode
  async execute(client) {
    console.log(`${client.user.tag} HAZIR.`)
  }
}