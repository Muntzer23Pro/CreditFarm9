const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`Best Server | Wings Community`);
}, 30)
})

client.login("NTMwNzY2OTU1NDE4ODc3OTcz.DxELQA.Ciol29aa8BUAnT24dMJV8sn6thQ");
