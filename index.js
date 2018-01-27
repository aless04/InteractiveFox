const Discord = require ("discord.js")
const embedhelp = {
    "embed": {
      "description": "\n**Voici toutes les commandes disponibles sur ce serveur Discord :**\n\n|``!help`` | Affiche le __Menu !help__ et toutes les autres commandes disponibles.|",
      "color": 4886754,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/4.png",
        "text": "Commande (!help)"
      },
      "author": {
        "name": "Menu !help",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/2.png"
      },
      "fields": [
        {
          "name": "\nCommandes avec |!| :",
          "value": "\n1-  ``!roulette`` | **Pour jouer à la roulette (les règles sont éxpliquées une fois la commande efféctuée).**"
        },
        {
          "name": "\nCommandes sans |!| :",
          "value": "\n1-  ``(P/p)ing`` | **Le bot repond (P/p)ong. :ping_pong:**"
        }
      ]
    }
  }
const embedbienvenue = {
    "embed": {
      "description": "\n**Bienvenue sur notre serveur Discord !**\n\nNotre équipe éspère que tu te sentiras à ta place parmis nous ! :raised_hands:",
      "color": 4886754,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/4.png",
        "text": "Commande (guildMemberAdd)"
      },
      "author": {
        "name": "Menu de bienvenue",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/2.png"
      }
    }
  }
var bot = new Discord.Client()
var prefixbot = ("!")
var reactemojisrandom = 0

bot.on("ready", () => {
    console.log("Bot INTERACTIVEFOX prêt !")
    bot.user.setGame("vous aider (!help)")
})

bot.on("guildMemberAdd", member => {
  member.createDM().then(channel => {
    return channel.send("**Bienvenue sur notre serveur Discord **" + member.toString() +"! :grinning:\nPuisque tu es nouveau(elle), nous te conseillons d'effectuer la commande ``!help`` qui te permettra de voir toutes les commandes. :wink:\nLes deux salons textuels __regles__ et __annonce__ peuvent t'être très utiles pour comprendre le serveur. :busts_in_silhouette:\nNous éspérons que tu te sentiras bien dans notre serveur ! :grin:")
  })
})
bot.on("guildMemberRemove", member => {
 member.guild.channels.find("name", "general").sendMessage(member.toString() + " a quitté le serveur .. :cry: ")
})

bot.on("guildMemberAdd", member => {
 member.guild.channels.find("name", "general").sendMessage(member.toString() + " nous a rejoints ! :grinning:")
})

bot.login(process.env.TOKEN)

bot.on('message', message => {
    if(message.content == "Ping"){
        message.reply("Pong :ping_pong:")
        console.log("Ping Pong")
    }
    
    if(message.content == "ping"){
        message.reply("pong :ping_pong:")
        console.log("ping pong")
        }

    if(message.content == prefixbot + "help"){
        message.channel.sendMessage(embedhelp)
        console.log("Help demandé")
    }
})
bot.on("message", message => {
    console.log("[" + message.createdAt + "]" + "<" + message.channel.name + ">" + message.member.displayName + ">" + message)
})
