const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "ok"
const prefix = "Troy "
const AdminID = '199562922383507457'
const dankdom = Math.floor((Math.random() * 999999999) + 100);

const playingmsgs = [
    "Overwatch",
    "diddly doodly doddly dingus",
    "http://imgur.com/YsphXhE.png",
    "http://imgur.com/6jPrXtO.png",
    "http://i.imgur.com/H6aX9xS.png",
    "http://i.imgur.com/BgUtSnR.png",
    "https://i.imgur.com/l0h9jnp.png",
    "In "+dankdom+" servers!",
    "Dingus for hire"
]

const koolquotes = [
    "Don't follow your dreams, follow my instagram account",
    "ur a dinkity donkity dingus",
    "All aboard the dingus train"
]
bot.on("ready", () => {
    console.log("dingus")
    let rand = Math.floor(Math.random()*playingmsgs.length);
    bot.user.setStatus('online', playingmsgs[rand])
})
const commands = {
    "ping": (message) => {
        message.channel.sendMessage("pong! took "+ dankdom+ "ms")
    },
    "myid": (message) => {
      message.reply("227440290695348224")
    },
    "disconnect": (message) => {
        if (message.author.id !== AdminID) {
            message.reply("Dinguses like you can't use this command")
        }
        message.channel.sendMessage("ok nerd").then(() => bot.destroy())
    },
    "roll": (message) => {
        message.reply("rolled "+ dankdom)
    },
    "restart": (message) => {
        let dannkdom = Math.floor((Math.random() * koolquotes.length));
        if (message.author.id !== AdminID) {
            message.reply("Dinguses like you can't use this command")
        }
        message.channel.sendMessage(koolquotes[dannkdom]).then(() => process.exit(0))
    },
    "search": (message) => {
    message.reply("Search failed! Use the `Troy support` command and tell FrankenMan you got error code: "+dankdom)
    },
    "say": (message) => {
        message.reply("Did your keyboard quit it's job or something")
    },
    "invite": (message) => {
        message.reply("The only real command https://discordapp.com/oauth2/authorize?client_id=227440290695348224&scope=bot&permissions=0")
    },
    "support": (message) => {
        message.reply("Who needs support when you've got FrankenCord https://discord.gg/mTbjnq4")
    },
    "status": (message) => {
        message.reply("```xl\nUptime: "+dankdom+" days\nVersion: v6.9\nShards: "+dankdom+"\nGuilds: "+dankdom*2+"\n```")
    },
    "info": (message) => {
        message.channel.sendMessage("Troy is a joke bot built by FrankenMan#1971 to ridicule all the popular bot commands ~~because FrankenMan is a jealous fellow who can't code for his life~~.")
    },
    "help": (message) => {
        message.reply("Done! Check your DM's!")
        message.author.sendMessage("Done! Check your DM's!")
    }
}
//command handler by HyperCoder
bot.on('message', message => {
    const thisPrefix = prefix ? prefix : `${client.user.toString()} `;

    if (message.author.bot) return; // Just to be sure the author of the message isn't a bot
    if (!message.content.startsWith(thisPrefix)) return; // Just to make sure a command is being used

    const content = message.content.slice(thisPrefix.length);

    const command = commands[content.split(' ')[0]];
    if (!command) return;
    command(message, content);
});

bot.login(token)
 
