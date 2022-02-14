const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log(`
      [===========================================]
             Discord Bot Network System#7248
                   Developed by Zedge#9417

                    Achievements =)
      [===========================================]
      `)
      console.log("\x1b[32m", "System loading, please wait...")
console.clear();
console.log('\x1b[36m%s\x1b[0m', "[category]: General routers loading...");
  console.log("_______________________");
   console.log("|  help.js loaded.    |");
   console.log("|  addbot.js loaded.  |");
   console.log("|  accept.js loaded.  |");
   console.log("|  decline.js loaded. |");
   console.log("|  eval.js loaded.    |");
   console.log("|  usage.js loaded.   |");
   console.log("_______________________");
}); 

const aoijs =  require("aoi.js");

const bot = new aoijs.Bot({

  token: "OTEwMzY1NTM5MjYyNjcyODk3.YZRx-g.-M8_pculkAiaE1CmSDYKHFqFc5w",

  prefix: "!",

    intents: "all",
    suppressAllErrors: {
        errorMessage: ["{newEmbed:{title:Error Code 503}{description::x: Something went wrong. Please try again later!}{footer:Error Code 503}{color:RED}{timestamp}}"]

    }
});

bot.variables({
MSGID: "",
TSID: ""
})

bot.command({

    name: "$alwaysExecute",

    code:`

$textSplit[$channelSendMessage[$get[id];<@$authorID>{newEmbed:{author:Welcome!}{description:Welcome <@$authorID>,

this is your private channel,

you can add your bot (or any bot) in this channel,

you also have more commands to manage the channel,

you can find them below.

\`\`\`

!add <bot ID> - To add your bot or any bot in this channel 

!remove <bot ID> - To remove your bot or any bot from this channel

!setnsfw - To set the channel as NSFW

!unsetnsfw - To unset the channel as NSFW 

!delete or !close - To delete the channel, you can open other later

!clear - To clear the latest 100 messages from the channel.\`\`\`}{color:#589AFE}};yes]; ]

$modifyChannelPerms[$authorid;$get[id];+managechannel;+viewchannel;+managemessages;+readmessagehistory;+attachfiles;+embedlinks]

$let[id;$createChannel[your server id;$username-prvtchnl;Text;yes;your private category id]]

$deletecommand

$setUserVar[TSTID;$authorid]

$onlyForChannels[your private bot testing channel where people message and create a private testing channel of the owner;]

`

});

bot.command({

    name: "add",
description: "Add a bot your private channel.",
 usage: "add <bot id>",
 category: "Bot Developer",
    code:`

$setUserVar[MSGID;$message[1]]

$modifyChannelPerms[$message[1];$channelID;+viewchannel;+sendmessage;+attachfiles;+embedlinks;+managemessages;+externalemojis]

Successfully added <@$message[1]> to this channel.

$argsCheck[1;:x: Please add a valid bot id.]

$suppressErrors[:x: Please add a valid bot id.]

$onlyIf[$checkContains[$channelCategoryID;your category id where people cant use this commands]==false;This isn't your private bot testing.]

`

});

bot.command({

    name: "remove",
description: "Remove a bot your private channel.",
 usage: "remove <bot id>",
 category: "Bot Developer",
    code:`

$modifyChannelPerms[$message[1];$channelID;-viewchannel]

Successfully remove <@$message[1]> to this channel.

$argsCheck[1;:x: Please add a valid bot id.]

$suppressErrors[:x: Please add a valid bot id.]

$onlyIf[$checkContains[$channelCategoryID;your category id where people cant use this commands]==false;This isn't your private bot testing.]
`

});

bot.command({

    name: "setnsfw",
description: "Set your private channel to NSFW.",
 usage: "setnsfw",
 category: "Bot Developer",
    code:`

$editChannel[$channelID;$default;$message;$default;$default;yes;$default;yes]

Successfully added the **NSFW** from this channel.

$onlyIf[$checkContains[$channelCategoryID;your category id where people cant use this commands]==false;This isn't your private bot testing.]

`

});

bot.command({

    name: "unsetnsfw",
description: "Set your private channel to Normal.",
 usage: "unsetnsfw",
 category: "Bot Developer",
    code:`

$editChannel[$channelID;$default;$message;$default;$default;no;$default;yes]

Successfully removed the **NSFW** from this channel.

$onlyIf[$checkContains[$channelCategoryID;your category id where people cant use this commands]==false;This isn't your private bot testing.]

`

});

bot.command({

    name: "clear",
description: "Clear a message your private channel.",
 usage: "clear [amount message]",
 category: "Bot Developer",
    code:`

$clear[$message]

Successfully cleared $message messages.

$argsCheck[1;:x: Please add a number of amount you want to clear.]

$suppressErrors[:x: Please add a number of amount you want to clear.]

$onlyIf[$checkContains[$channelCategoryID;your category id where people cant use this commands]==false;This isn't your private bot testing.]

`

});

bot.command({

    name: "delete",

    aliases: ["close"],
description: "Delete your private channel.",
 usage: "close",
 category: "Bot Developer",
    code:`

$deletechannel[$channelid]

$wait[10s]

$channelSendMessage[$channelID;Deleting the channel in 10 seconds.]

$onlyIf[$checkContains[$channelCategoryID;your category id where people cant use this commands]==false;This isn't your private bot testing.]

`

});