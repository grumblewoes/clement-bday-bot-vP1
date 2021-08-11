//counter for amount
//user-specific counters
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const Discord = require('discord.js'); //imports discord module
require("dotenv").config(); //imports dotenv package to store sensitive variables
const client = new Discord.Client();

//bot token placed here 
client.login(process.env.BOTTOKEN); //logs bot in with token

client.once('ready', readyDiscord); //listens for an event, lists the function name
function readyDiscord() {
	console.log("Sup fuckers");
}

const replies = [ //for when murder is directed at the bot
'do it pussy no balls',
'all bark no bite??? woof woof headass bitch. maybe actually back up ur threats and ill give a shit. damn',
'thats my kink',
'k :thumbsup:',
'ur mom gey',
'ur mom ENORMOUS gey',
'finally',
'try and catch me. trickass bitch. what shoes ur mom got on in her casket? :eyes::eyes:',
'jenges',
'about fuckin time. damn',
'uwu do it daddy :weary:',
'do it daddy :persevere::tongue::sweat_drops:',
':flushed: ok',
'LITERALLY dont front on me like that. i will fuck u up big time',
'nah',
'nah fam',
'no :heart:',
'you smell like butt',
'bread :thumbsup:',
'octapus,',
'not with _those_ noodle arms :face_with_raised_eyebrow:',
':billed_cap:',
'all lies, i tell you. kids these days smh',
'sure champ :thumbsup:',
'aight',
'why tho',
'i am innocent, officer',
'i am an innocent bystander',
'i\'m just a little guy',
'`sus`',
'we haven\'t even gone on a date yet, this relationship is going so fast :flushed:',
'¯\_ (ツ)_/¯',
'i literally just _exist_ and ppl wanna kill me. can\'t have shit in detroit',
'no need to be feral, damn'
];


const contenderThreats = [ //for when someone says something kinda sus
'kill you', 'kill u', 'kill me', 'death', 'murder', 'violence','chaos', 'evil', 'hate', 'violent', 'horny', 'shut up', 'whitty',
'uwu', 'owo', 'choke', 'strangle', 'grave', 'pee', ':3', 'bruh', 'me perdonas', 'commit', 'white', '>_>', 'haram', 'halal',
'muslim', 'islam', 'nya', ' bot', 'allah', 'yell heah', 'step on me', 'weeb', 'angel', 'yessir', 'kys', 'bread', 'cringe', 'sus', 'amogus',
'among us', 'ur mom', 'jenges', 'daddy', 'papi', '413', 'QwQ', 'cock', 'cawk', 'cockg', 'kowk', 'quawk', 'number 12', '8=D'
];

const greetings = [ //hi jenges bby
'yo',
'wassup',
'ay',
'sup hoe',
'hi',
'hey',
'sup :b:',
'what up bicth',
'greetings',
'hi :)',
'hello',
'hi ho',
'tis i, jenges',
'whos jenges',
'mmm i am jenges'
];

const noFanks = [//i will not shut up thanks
'no??',
'y doe',
'nah',
'I acknowledge the suggestion, but as it is a shit suggestion, I shall be ignoring it.',
'nuh uh',
'i dont feel like it',
'>:/',
'dude im literally just vibing',
'maybe YOU shut up. world doesnt revolve around what u want 24/7. stoopid',
'hmmm i must say it do be smellin like bitch in here',
'yyyyyeah thats a no from me, dawg',
'no fanks luv',
':pleading_face:',
'i am. attacked,'
'no comprendo',
'mm? yall hear sum?',
'no :heart:',
'shut up deez nuts',
'لن أتحمل هذا السلوك الحرام'
];


client.on('message', message => {
	if (message.author.bot)
    return;
	console.log(message.content);
	let str = message.content.toLowerCase().trim();
	
	switch (str) //checks for total string matches to construct responses other than reactions
	{
		case 'i will kill you':
		case 'i will kill u':
		case 'ill kill you':
		case 'i\'ll kill you':
		case 'ill kill u':
		case 'i\'ll kill u':
		case 'imma kill u':
		case 'imma kill you':
		case 'im going to kill you':
		case 'i\'m going to kill you':
		case 'im going to kill u':
		case 'i\'m going to kill u':
		case 'im gonna kill u':
		case 'i\'m gonna kill u':
		case 'im gonna kill you':
		case 'i\'m gonna kill you':
		case 'i kill you':
		case 'i kill u':
		case 'die':
		const r = Math.floor(Math.random() * replies.length);
		message.channel.send(replies[r]);
		break;
		case 'shut up jenges':
		case 'jenges shut up':
		case 'shut the fuck up jenges':
		case 'shut the heck up jenges':
		case 'jenges shut the fuck up':
		case 'jenges shut the heck up':
		const s = Math.floor(Math.random() * noFanks.length);
		message.channel.send(noFanks[s]);
		break;
	}
		
	for (i = 0; i < contenderThreats.length; i++) //checks for sus words in general
	{
		if (str.includes(contenderThreats[i]))
		{
			switch (contenderThreats[i])
			{
				case 'horny': case 'stan': case 'shut up': case 'sus': case 'amogus': case 'among us':
				message.react('🙄');
				break;
				case 'whitty': case 'uwu': case 'owo': case 'daddy': case 'papi': case "cock": case 'cawk': case 'cockg': case "kowk": case "quawk": case '8=D': case "number 12":
				message.react('🥴');
				break;
				case 'allah': case 'muslim': case 'islam': case 'me perdonas':
				message.react('🙏');
				break;
				case 'white': case 'haram': case 'pee': case 'step on me': case 'weeb': case 'cringe':
				message.react('😷');
				break;
				case 'yell heah': 
				message.react('🤠');
				break;
				case 'bread': case 'yessir':
				message.react('👍');
				break;
				case ' bot': case 'angel': case 'jenges':
				message.react('😇');
				break;
				default:
				message.react('😳');
				break;
			}
			
		}
	}
});

client.on('message', message => {
	if (message.author.bot)
    return;
	console.log(message.content);
	let str = message.content.toLowerCase().trim();
	if (str.includes('say hi jenges') || str.includes('hi jenges') || str.includes('hello jenges') || str.includes('sup jenges') || str.includes('hey jenges') || str.includes('hi bestie'))
	{
		const s = Math.floor(Math.random() * greetings.length);
		message.channel.send(greetings[s]);
	}
	
	else if (str.includes('clement') ||  str.includes('clem'))
	{
		message.channel.send('clement? i know that guy');
	}

});

/*
- 





*/