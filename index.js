const Discord = require ("discord.js")
var bot = new Discord.Client()
var prefixbot = ("!")
var GAME = 0
var hasard = 0
var prefix = ("/")

bot.on("ready", () => {
    console.log("Bot prêt prêt à être utilisé !")
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
        message.channel.sendMessage("```Voici les commandes du bot:\n1.  !help   =>  afficher les commandes du bot.\n2.  !roulette   =>  jouer à la roulette (les règles sont éxpliquées une fois la commande efféctuée).\n**----------** Les commandes sans |!| **----------**\n1.  (P/p)ing  =>  Le bot repond (P/p)ong```")
        console.log("Help demandé")
    }

    
    if(message.content == prefixbot + "roulette" & message.channel.name == "general"){
        message.reply("Tu ne peut pas utiliser cette commande ici,\nessaye le salon espace-bot :wink: !")
    }
    if((message.content == prefixbot + "roulette" & message.channel.name == "espace-bot") & (GAME == 1)){
        message.reply("Tu ne peut pas effectuer cette commande tant qu'une autre partie de roulette est en cours !")
    }
    if((message.content == prefixbot + "roulette" & message.channel.name == "espace-bot") & (GAME == 0)){
        message.channel.sendMessage("C'est partit pour la roulette :raised_hands: !")
        message.channel.sendMessage("Tu dois essayer de trouver un nombre compris entre 0 et 1000 :neutral_face: \nLe premier à trouver le nombre gagne la partie :upside_down: !\nPour gagner il te suffit de dire un nombre et je te dirai si c'est + ou - :wink: ")
        GAME = 1
        hasard = Math.floor ( Math.random() * 1001 )

    }
    if(GAME === 1 & message.channel.name == "espace-bot"){
        if(message.content == hasard){
            message.reply("Bravo ! Tu remportes la partie !")
            GAME = 0
        }
        if(message.content < hasard){
            message.reply("c'est +")
        }
        if(message.content > hasard){
            message.reply("c'est -")
        }
    }
    
})

