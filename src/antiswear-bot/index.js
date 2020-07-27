// Request the discord.js modules
// To install do npm install discord.js
const discord = require("discord.js");

// Request the Discord Client
const client = discord.Client();

// Find the config file/request it.
// If you're file from the config is located
// somewhere else please change it here.
const config = require("./config.json");

// Request the FileServer
const fs = require("fs");

// Login the discord bot using Discord Client
client.login(config.token)

// Log the startup + make a status
client.on("ready", async => {
    // Log that the bot started
    console.log(`Antiswear-bot started.`)
})

// Create the antiswear message event
client.on("message", async => {
    
    // Request the file
    var noWords = JSON.parse(fs.readFileSync("./words/blockedWords.json"));
    // Check if CAPS or cApS are
    var msg = message.content.toLowerCase();

    // Check the blockedWords, and if so remove the message 
    // And tell the user to not say that.

    for (let i = 0; i < noWords["blockedWords"].length; i++) {

        // Check the message
        if (msg.includes(noWords["blockedWords"] [i])) {
            // Remove message
            message.delete()
        
            // Send the message and remove the message after 1 second.
        return message.channel.send(`✖ You are not allowed to say that.`).then(msg => msg.delete({ timeout: 1000 }));

        }
    }
})