//  DOM Contronling
var musicLyricsParagraph = document.getElementById("musicLyricsParagraph");
var musicButton = document.getElementById("musicButton");
var musicSelect = document.getElementById("musicSelect");
var selectedMusic = document.getElementById("selectedMusic");
var videoButton = document.getElementById("videoButton");
var videoSelect = document.getElementById("videoSelect");
var selectedVideo = document.getElementById("selectedVideo");
// var previousPageBoolean = false;

//  Musics Data Base
var oneOption = document.createElement("option");
var twoOption = document.createElement("option");
var threeOption = document.createElement("option");
var fourOption = document.createElement("option");
var fiveOption = document.createElement("option");
var sixOption = document.createElement("option");
var sevenOption = document.createElement("option");
var eightOption = document.createElement("option");
var nineOption = document.createElement("option");
var tenOption = document.createElement("option");
var elevenOption = document.createElement("option");
var twelveOption = document.createElement("option");
var thirteenOption = document.createElement("option");
var fourteenOption = document.createElement("option");
var fifteenOption = document.createElement("option");

var updatedMusics = [oneOption, twoOption, threeOption, fourOption,
fiveOption, sixOption, sevenOption, eightOption, nineOption, 
tenOption, elevenOption, twelveOption, thirteenOption, 
fourteenOption, fifteenOption];

var musicsNamesArray = ["Hollywood Undead - Believe", "Hollywood Undead - Lion", 
"Hollywood Undead - Bullet", "Crosses - Bitches Brew", "Metallica - The Unforgiven I ", 
"Brains - AKKOR", "Eminem - Lose Yourself ", "Eminem - Godzilla", "Brains - Take you high", 
"Coldrain - We're not alone", "2CELLOS - Thunderstruck", "Evanecence - My last breath",
"TFK - Courtsey call", "Imagine Dragond - Bones", "Brains - Take you high"];

for (var i = 0; i < 15; i++) {
    updatedMusics[i].value = i;
    updatedMusics[i].text = musicsNamesArray[i];   
    musicSelect.appendChild(updatedMusics[i]);   
}
  

var musicLyricsArray = ["I can't believe that when I breathe There's something good inside of me Just one good thing inside So close to me, that memory Of that one good thing inside of me Just one good thing inside of me, yeah If I ran out the backdoor, nobody would stop me But where would I go? 'Cause I ain't ever had a real home So what do I know? So I could keep running, hide until they find me But what would that do? If they could only know what I knew What would it prove? I should've seen the writing on the wall Instead, I'm left to fall 'Cause the longer I'm away The more we stay the same Looking back, \
would've thought I knew it all Instead, I'm left to fall, did I throw it all away? I can't believe that when I breathe There's something good inside of me Just one good thing inside So close to me, that memory Of that one good thing inside of me Just one good thing inside of me, yeah Don't you know, little boy, they'll lay you to waste, man? Little do they know every song has a lifespan Never taken one, but I'm taking my last chance To hold all we know and let go with both hands So don't you know the clouds are made from concrete? Right through the stone, can you hear my heartbeat? Beats through my bones like the \
memory left me Not for a second or a minute when I dream I wanna go home, like the home that I keep You can dig six or 66 feet We could live forever, still your misery missed me Hold this song together with a bottle of whiskey Look into the mirror at the lines that time drew See them painted white and the eyes that shine through My heart beats heavy in an open chest And I wanna say goodbye, but there's nobody left I can't believe that when I breathe There's something good inside of me Just one good thing inside So close to me, that memory Of that one good thing inside of me Just one good thing inside of me, yeah I \
broke it all and I put it to test Put your hand to mine and feel this emptiness There's no beat in my chest 'cause there's nothing left No, it ain't goodbye, it's a last caress What's another dream? You can hardly sleep Can you believe bad things only happen to me? God knows one day you will finally see That scars will heal but were meant to bleed Did you realized I would lie for you? Please, have my last breath, I would die for you I know I'm no good, but my heart beats true You know I'm gonna fight, though I might be scared to lose You took me in and I fucked it up again An empty promise? No, I won't pretend 'Cause \
in the end, we need someone to solve 'em Nobody can fix me if I'm part of the problem I can't believe that when I breathe There's something good inside of me Just one good thing inside So close to me, that memory Of that one good thing inside of me Just one good thing inside of me, yeah",
"I am a lion and I want to be free Do you see a lion when you look inside of me? Outside the window just to watch you as you sleep 'Cause I am a lion, born from things you cannot be How can I sleep at night? There's a war inside my head I found a lion hidden right beneath my bed I will not hide myself from the tears that you have shed 'Cause I am a lion, and you are dead Here's a story of everything we'll ever be You can hide but some of us can never leave And if you go I don't need those little things They remind me of all our little dreams Can you hear the words, all I can say We can watch the world even if they walk away\
Forget about tomorrow, tomorrow is today You were born a lion, and a lion you will stay I am a lion and I want to be free Do you see a lion when you look inside of me? Outside the window just to watch you as you sleep 'Cause I am a lion, born from things you cannot be Remember an army of all those little kids Livin' life like they only get a little bit It's hard to fight when you're born in the middle-end I'd rather die, won't watch you givin' in I'm sorry daughter, but you're father's not the same I can look into your eyes and I swear that I will change But tomorrow is tomorrow, so forgive me if I stay You can hide beneath\
the covers while I hide behind the pain After all, only so much we can say Words can lose their meaning, once we walk away Promise me that you'll love me, watch me as I fade I'll give you all the things that these lions never gave The hands on the clock and the things we cannot change Is tearin' out the pieces and take back what I made If there's one thing I'd keep, it's you that I would save 'Cause I am just a lion, and a lion I will stay I am a lion and I want to be free Do you see a lion when you look inside of me? Outside the window just to watch you as you sleep 'Cause I am a lion, born from things you cannot be Hey! I\
never meant to let go You're all I want, and you're all I ever wanna know Can't hide in the attic of a pretty home Of a pretty home, of a pretty home Hey! I never meant to let go You're all I want, and you're all I ever wanna know Can't hide in the attic of a pretty home Of a pretty home, of a pretty home I am a lion and I want to be free Do you see a lion when you look inside of me? Outside the window just to watch you as you sleep 'Cause I am a lion, born from things you cannot be",
"My legs are dangling off the edge The bottom of the bottle is my only friend I think I'll slit my wrist again, and I'm gone, gone, gone, gone My legs are dangling off the edge A stomach full of pills didn't work again I'll put a bullet in my head, and I'm gone, gone, gone, gone Gone too far, yeah, I'm gone again It's gone on too long, tell you how it ends I'm sitting on the edge with my two best friends One's a bottle of pills, and one's a bottle of gin I'm 20 stories up, yeah, up at the top I polished off this bottle, now it's pushing me off Asphalt to me has never looked so soft I bet my momma found my letter, now she's \
calling the cops I gotta take this opportunity before I miss it 'Cause now I hear the sirens and they're off in the distance Believe me when I tell you that I've been persistent 'Cause I'm more scarred, more scarred than my wrist is I've been trying too long with too dull of a knife But tonight, I made sure that I sharpened it twice I never bought a suit before in my life But when you go to meet God, you know, you wanna look nice So if I survive, then I'll see you tomorrow Yeah, I'll see you tomorrow My legs are dangling off the edge The bottom of the bottle is my only friend I think I'll slit my wrist again, and I'm gone, gone,\
gone, gone My legs are dangling off the edge A stomach full of pills didn't work again I'll put a bullet in my head, and I'm gone, gone, gone, gone We hit the sky, there goes the light No more sun, why's it always night? When you can't sleep, well, you can't dream When you can't dream, well, what's life mean? We feel a little pity, but don't empathize The old are getting older, watch a young man die A mother and a son and someone you know Smile at each other and realize you don't You don't know what happened to that kid you raised Or what happened to the father who swore he'd stay I didn't know 'cause you didn't say Now mama feels\
guilt, yeah, mama feels pain When you were young, you never thought you'd die Found that you could, but too scared to try Looked in the mirror and you said goodbye Climbed to the roof to see if you could fly So if I survive, then I'll see you tomorrow Yeah, I'll see you tomorrow My legs are dangling off the edge The bottom of the bottle is my only friend I think I'll slit my wrist again, and I'm gone, gone, gone, gone My legs are dangling off the edge A stomach full of pills didn't work again I'll put a bullet in my head, and I'm gone, gone, gone, gone I wish that I could fly Way up in the sky Like a bird so high Oh, I might just\
try I wish that I could fly Way up in the sky Like a bird so high Oh, I might just try Oh, I might just try",
"As the moon ascends The wolves come out to see the end They hide from view and wait To watch the ghost inside you come awake And when the shots go off, you'll hear them call My heart is racing just to see it all To watch it crawl out of your changing shape To take out your breath and watch it come awake From the flames of the fire I feel you crawl into my bed Throwing shapes at the sky I watch you climb into me With your knees open On display, you taunt the beast again 'Cause when you move and shake That thing inside you comes awake As you dance against the breathing wall My claws are out, I want to feel it all Feel it crawl\
inside you, changing shape Take out your breath and feel you come awake From the flames of the fire I feel you crawl into my bed Throwing shapes at the sky I watch you crying into me Say something, pray for something Say something, pray or something Say something, pray for something Say something, pray or something Say something, pray for something From the flames of the fire I feel you crawling to my bed Throwing shapes at the sky I watch you crying to me Throwing shapes at the sky I watch you climb into me Say something, pray for something Say something, pray to something Say",
"New blood joins this Earth And quickly he's subdued Through constant pained disgrace The young boy learns their rules With time the child draws in This whipping boy done wrong Deprived of all his thoughts The young man struggles on and on, he's known Ooh, a vow unto his own That never from this day His will they'll take away What I've felt, what I've known Never shined through in what I've shown Never be, never see Won't see what might have been What I've felt, what I've known Never shined through in what I've shown Never free, never me So I dub thee unforgiven They dedicate their lives To running all of his He tries to please\
them all This bitter man he is Throughout his life the same He's battled constantly This fight he cannot win A tired man they see no longer cares The old man then prepares To die regretfully That old man here is me What I've felt, what I've known Never shined through in what I've shown Never be, never see Won't see what might have been What I've felt, what I've known Never shined through in what I've shown Never free, never me So I dub thee unforgiven What I've felt, what I've known Never shined through in what I've shown Never be, never see Won't see what might have been What I've felt, what I've known Never shined through in what\
I've shown Never free, never me So I dub thee unforgiven Oh-ooh-oh Never free, never me So I dub thee unforgiven You labeled me, I'll label you So I dub thee unforgiven Never free, never me So I dub thee unforgiven You labeled me, I'll label you So I dub thee unforgiven Never free, never me So I dub thee unforgiven",
"Naponta változol de hetekre eltűnsz Nekem mindent el kell neked semmi amit eltűrsz Bekopogsz csöngetsz kivagy ha kint vagy Kiborulsz pik pak semmi sincs úgy ahogy én akarom beg Mondd meg miért nem lehet ahogy én akarom Mondd meg ahogy én akarom néha néha néha néha Csak még ezt elnézem ha mással vagy mindig falnak nézel A pendriveomat is elvitted néha elárul mindent egy tekintet Neked apró kis jegyzet egy könyvtárban Csak egy fájl vagyok neked a lomtárban Amit kitörölnél de néha visszaállítod Miért csak akkor hívsz ha mást már nem érsz el? Mindig akkor hívsz ha mást már nem érsz el Cseréltem számot és cseréltem telefont ne hidd,\
hogy megadom Leszedem az appokat ne írj hogy what's up? Pár ruhád még itt van vár rá az ablak Valaki majd felveszi zaklass mást A müzlidet megeszem a pendriveot tartsd meg úgysem szerettem mindig megakadt ha filmet néztünk A komoly dolgoknál félrenéztünk Te vagy a stop gomb a magnónom egy átmásolt kazetta a polcomon Mikor én továbbmennék te visszalöksz mindig búcsúzunk de visszajössz Neked apró kis jegyzet egy könyvtárban Csak egy fájl vagyok neked a lomtárban Amit kitörölnél de néha visszaállítod Miért csak akkor hívsz ha mást már nem érsz el? Mindig akkor hívsz ha mást már nem érsz el",
"Look If you had One shot Or one opportunity To seize everything you ever wanted In one moment Would you capture it Or just let it slip? Yo His palms are sweaty, knees weak, arms are heavy There's vomit on his sweater already, mom's spaghetti He's nervous, but on the surface he looks calm and ready To drop bombs, but he keeps on forgettin' What he wrote down, the whole crowd goes so loud He opens his mouth, but the words won't come out He's chokin', how, everybody's jokin' now The clocks run out, times up, over, blaow Snap back to reality, ope there goes gravity Ope, there goes Rabbit, he choked He's so mad, but he won't \
give up that easy? No He won't have it, he knows his whole back's to these ropes It don't matter, he's dope, he knows that, but he's broke He's so stagnant, he knows, when he goes back to this mobile home, that's when it's Back to the lab again, yo, this whole rhapsody Better go capture this moment and hope it don't pass him You better lose yourself in the music, the moment You own it, you better never let it go You only get one shot, do not miss your chance to blow This opportunity comes once in a lifetime You better lose yourself in the music, the moment You own it, you better never let it go You only get one shot, do not \
miss your chance to blow This opportunity comes once in a lifetime You better His soul's escaping, through this hole that is gaping This world is mine for the taking Make me king, as we move toward a New World Order A normal life is borin', but super stardom's close to post mortem It only grows harder, only grows hotter He blows, it's all over, these hoes is all on him Coast to coast shows, he's known as the Globetrotter Lonely roads, God only knows, he's grown farther from home, he's no father He goes home and barely knows his own daughter But hold your nose 'cause here goes the cold water These hoes don't want him no mo', \
he's cold product They moved on to the next schmo who flows, he nose dove and sold nada So the soap opera is told and unfolds, I suppose it's old partna, but the beat goes on Da-da-dum, da-dum, da-da You better lose yourself in the music, the moment You own it, you better never let it go You only get one shot, do not miss your chance to blow This opportunity comes once in a lifetime You better lose yourself in the music, the moment You own it, you better never let it go You only get one shot, do not miss your chance to blow This opportunity comes once in a lifetime You better No more games, I'ma change what you call rage Tear this motherfuckin' roof off like two dogs caged I was playin' in the beginnin', the mood all changed I been chewed up and spit out and booed off stage But I kept rhymin' and stepped right in the next cypher Best believe somebody's payin' the Pied Piper All the pain inside amplified by the Fact that I can't get by with my nine to Five and I can't provide the right type of Life for my family 'cause man, these goddamn food stamps don't buy diapers And its no movie, there's no Mekhi Phifer This is my life and these times are so hard And it's getting even harder tryna feed and water my seed, plus Teeter totter, caught up between bein' a father and a prima donna Baby mama drama, screamin' on her, too much For me to wanna stay in one spot, another day of monotony's Gotten me to the point, I'm like a snail I've got To formulate a plot or end up in jail or shot Success is my only motherfuckin' option, failure's not Mom, I love you, but this trailer's got to go, I cannot grow old in Salem's Lot So here I go, is my shot Feet, fail me not, this may be the only opportunity that I got You better lose yourself in the music, the moment You own it, you better never let it go You only get one shot, do not miss your chance to blow This opportunity comes once in a lifetime You better lose yourself in the music, the moment You own it, you better never let it go You only get one shot, do not miss your chance to blow This opportunity comes once in a lifetime You better You can do anything you set your mind to, man",
"I can swallow a bottle of alcohol and I'll feel like Godzilla Better hit the deck like the card dealer My whole squad's in here, walkin' around the party A cross between a zombie apocalypse and B-Bobby, 'The Brain' Heenan which is probably the same reason I wrestle with mania Shady's in this bitch, I'm posse'd up Consider it to cross me a costly mistake If they sleepin' on me, the hoes better get insomnia, ADHD, Hydroxycut Pass the Courvoisi' (hey, hey) In AA, with an AK, melee, finna set it like a playdate Better vacate, retreat like a vacay, mayday (ayy) This beat is cray-cray, Ray J, H-A-H-A-H-A Laughin' all the way to the bank, I spray flames They cannot tame or placate the (ayy) Monster You get in my way? I'ma feed you to the monster (yeah) I'm normal during the day, but at night turn to a monster (yeah) When the moon shines like Ice Road Truckers I look like a villain outta those blockbusters Godzilla, fire spitter, monster Blood on the dance floor, and on the Louis V carpet Fire, Godzilla, fire, monster Blood on the dance floor, and on the Louis V carpet I'm just a product of Slick Rick, at Onyx, told 'em lick the balls Had 'em just appalled at so many things that pissed 'em off It's impossible to list 'em all And in the midst of all this I'm in a mental hospital with a crystal ball Tryna see, will I still be like this tomorrow? Risperdal, voices whisper My fist is balled back up against the wall, pencil drawn This is just the song to go ballistic on You just pulled a pistol on the guy with the missile launcher I'm just a Loch Ness, the mythological Quick to tell a bitch screw off like a fifth of Vodka When you twist the top of the bottle, I'm a Monster You get in my way? I'ma feed you to the monster (yeah) I'm normal during the day, but at night turn to a monster (yeah) When the moon shines like Ice Road Truckers I look like a villain outta those blockbusters Godzilla, fire spitter, monster Blood on the dance floor, and on the Louis V carpet Fire, Godzilla, fire, monster Blood on the dance floor, and on the Louis V carpet If you never gave a damn, raise your hand 'Cause I'm about to set trip, vacation \
plans I'm on point, like my index is, so all you will ever get is The motherfuckin' finger (finger), prostate exam ('xam) How can I have all these fans and perspire? Like a liar's pants, I'm on fire And I got no plans to retire and I'm still the man you admire These chicks are spazzin' out, I only get more handsome and flier I got 'em passin' out like what you do, when you hand someone flyers What goes around, comes around just like the blades on a chainsaw 'Cause I caught the flaps of my dollar stack Right off the bat like a baseball, like Kid Ink Bitch, I got them racks with so much ease that they call me Diddy 'Cause I make bands and I call getting cheese a cakewalk (cheesecake!) Bitch, I'm a player, I'm too motherfuckin' stingy for Cher Won't even lend you an ear, ain't even pretendin' to care But I tell a bitch I'll marry her, if she'll bury her Face on my genital area, the original Richard Ramirez Christian Rivera 'Cause my lyrics never sit well, so they wanna give me the chair Like a paraplegic, and it's scary, call it Harry Carry 'Cause every Tom and Dick and Harry Carry a Merriam motherfuckin' dictionary Got 'em swearin' up and down, they can't spit, this shit's hilarious It's time to put these bitches in the obituary column We wouldn't see eye to eye with a staring problem Get the shaft like a steering column (monster) Trigger happy, pack heat, but it's black ink Evil half of the Bad Meets Evil That means take a back seat Take it back to Fat Beats with a maxi single Look at my rap sheets, what attracts these people Is my gangster, bitch, like Apache with a catchy jingle I stack these chips, you barely got a half-eaten Cheeto Fill 'em with the venom, and eliminate 'em Other words, I Minute Maid 'em I don't wanna hurt 'em, but I did, I'm in a fit of rage I'm murderin' again, nobody will evade I'm finna kill 'em, I'm dumpin' their fuckin' bodies in the lake Obliteratin' everything, incinerate a renegade I'm here to make anybody who want it with the pen afraid But don't nobody want it but they're gonna get it anyway 'Cause I'm beginnin' to feel like I'm mentally ill I'm Atilla, kill or be killed, I'm a \
killer bee, the vanilla gorilla You're bringin' the killer within me, out of me You don't want to be the enemy of the demon Who went in me, and be on the receiving of me, what stupidity it'd be Every bit of me is the epitome of a spitter When I'm in the vicinity, motherfucker, you better duck Or you finna be dead the minute you run into me A hundred percent of you is a fifth of a percent of me I'm 'bout to fuckin' finish you bitch, I'm unfadable You wanna battle, I'm available, I'm blowin' up like an inflatable I'm undebatable, I'm unavoidable, I'm unevadable I'm on the toilet bowl I got a trailer full of money and I'm paid in full I'm not afraid to pull a-, man, stop Look what I'm plannin' (haha)",
"We will take you, take you, take you Take you higher, cause we're hot like the fire This song will take you high Anytime you need it just come with me Try to stay for a while Burn everything behind you and get free Come baby try to shine bright Rudeboy you rule the whole night This song will take you high Burn everything behind you and get free I've been at so many places but I really don't know Why the people dem around me can't live without dem sorrow I never forget where me come from The country where me born and grow But we have to get over the borders To get to the top tomorrow This song will take you high Anytime you need it just come with me Try to stay for a while Burn everything behind you and get free Come baby try to shine bright Rudeboy you rule the whole night This song will take you high Burn everything behind you and get free Anytime when clouds are above you And sun doesn't have chance to shine Don't give it up and get thru Although it will take your time Never let nobody to hold you down Never let nobody to get your crown Spread your wings and fly over Burn form your soul like a supernova",
"Sunlight was the only thing that felt right before I came here But inside it feels like it keeps raining And every drop is like the tears we couldn't cry Because outside we were all alone But this place gave us something that somehow made us strong If there's a place inside this world Where hopes and dreams are not yet lost We'll stand as one against these walls And fight this fight forevermore Sometimes I feel this anger changing slowly in to A monster that keeps on creeping under And I don't think that I can take anymore I need your help like never before But can you hear me call? If there's a place inside this world Where hopes and dreams are not yet lost We'll stand as one against these walls And fight this fight forevermore If there's a place inside this world Where we must go back to once more Until the day we find that place We're not alone When things go bad When things go wrong When on the verge of letting go There's something that I really want you to know When things go bad When things go wrong When on the verge of letting go There's something that I really want you to know You're not alone You're not alone anymore You're not alone You're not alone anymore If there's a place inside this world Where hopes and dreams are not yet lost We'll stand as one against these walls And fight this fight forevermore If there's a place inside this world Where we must go back to once more Until the day we find that place We're not alone We're not alone When things go bad When things go wrong When on the verge of letting go There's something that I really want you to know",
"The song has no lyrics!",
"Hold on to me love, You know I can't stay long, All I wanted to say was, I love you and I'm not afraid, Can you hear me?, Can you feel me in your arms, Holding my last breath, Safe inside myself, Are all my thoughts of you, Sweet raptured light,, It ends here tonight., I'll miss the winter, A world of fragile things, Look for me in the white forest, Hiding in a hollow tree (come find me), I know you hear me,, I can taste it in your tears., Holding my last breath, Safe inside myself, Are all my thoughts of you, Sweet raptured light,, It ends here tonight., Closing your eyes to disappear, You pray your dreams will leave you here,\
But still you wake and know the truth -, No one's there., Say goodnight, don't be afraid, Calling me, calling me, as you fade to black., Holding my last breath, (Don't be afraid) Safe inside myself, (Holding me) Are all my thoughts of you?, Sweet raptured light,, It ends here tonight., Holding my last breath, Safe inside myself, Are all my thoughts of you?, Sweet raptured light,, It ends here tonight., Holding my last breath",
"Hey-o, here comes the danger up in this club When we get started, man, we ain't gon' stop We gon' turn it out 'til it gets too hot Everybody sing, hey-o Tell 'em turn it up 'til they can't no more Let's get this thing shakin' like a disco ball This is your last warning, a courtesy call Hey-o, here comes the danger up in this club When we get started, man, we ain't gon' stop We gon' turn it out 'til it gets too hot Everybody sing, hey-o Tell 'em turn it up 'til they can't no more Let's get this thing shakin' like a disco ball This is your last warning, a courtesy call I am not afraid of the storm that comes my way When it hits it\
shakes me to the core And makes me stronger than before It's not a question about trust But will you stand with us? Can you feel it? Make it real and I think it might wash away tonight Awaken from this never ending fight It takes more than meets the eye This war we're fighting it's not just rotting Hey-o, here comes the danger up in this club When we get started, man, we ain't gon' stop We gon' turn it out 'til it gets too hot Everybody sing, hey-o Tell 'em turn it up 'til they can't no more Let's get this thing shakin' like a disco ball This is your last warning, a courtesy call There's a rumble in the floor So get prepared for\
war When it hits it'll knock you to the ground When it shakes up everything around But survival is a must So will you stand with us? Can you feel it? Make it real and (make me feel it) I think it might wash away tonight Awaken from this never ending fight It takes more than meets the eye This war we're fighting it's not just rotting Hey-o, here comes the danger up in this club When we get started, man, we ain't gon' stop We gon' turn it out 'til it gets too hot Everybody sing, hey-o Tell 'em turn it up 'til they can't no more Let's get this thing shakin' like a disco ball This is your last warning, a courtesy call Hey-o, here comes\
the danger up in this club When we get started, man, we ain't gon' stop We gon' turn it out 'til it gets too hot Everybody sing, hey-o Tell 'em turn it up 'til they can't no more Let's get this thing shakin' like a disco ball This is your last warning, a courtesy call",
"Gimme, gimme, gimme some time to think, I'm in the bathroom, looking at me, Face in the mirror is all I need (ooh), Wait until the reaper takes my life, Never gonna get me out alive, I will live a thousand million lives (ooh), My patience is waning, Is this entertaining?, Our patience is waning, Is this entertaining?, I-I-I got this feeling, yeah, you know, Where I'm losing all control, 'Cause there's magic in my bones, I-I-I got this feeling in my soul, Go ahead and throw your stones, 'Cause there's magic in my bones, Playing with a stick of dynamite, There was never gray in black and white, There was never wrong 'til there was right\
(ooh, oh), Feeling like a boulder hurtling, Seeing all the vultures circling, Burning in the flames I'm working in, Turning in a bed that's darkening, My patience is waning, Is this entertaining?, Our patience is waning, Is this entertaining?, I-I-I got this feeling, yeah, you know, Where I'm losing all control, 'Cause there's magic in my bones (in my bones), I-I-I got this feeling in my soul, Go ahead and throw your stones, 'Cause there's magic in my bones, 'Cause there's magic in my bones, Look in the mirror of my mind, Turning the pages of my life, Walking the path so many paced a million times, Drown out the voices in the air, Leaving\
the ones that never cared, Picking the pieces up and building to the sky, My patience is waning, Is this entertaining?, My patience is waning, Is this entertaining?, I-I-I got this feeling, yeah, you know, Where I'm losing all control, 'Cause there's magic in my bones (magic in my bones), I-I-I got this feeling in my soul (soul), Go ahead and throw your stones, 'Cause there's magic in, There goes my mind (I-I-I), Don't mind, There goes my mind (there it goes, there it goes), There goes my mind (I-I-I), Don't mind (there it goes), There goes my mind, 'Cause there's magic in my bones",
"We will take you, take you, take you, Take you higher, cause we're hot like the fire, This song will take you high, Anytime you need it just come with me, Try to stay for a while, Burn everything behind you and get free, Come baby try to shine bright, Rudeboy you rule the whole night, This song will take you high, Burn everything behind you and get free, I've been at so many places but I really don't know, Why the people dem around me can't live without dem sorrow, I never forget where me come from, The country where me born and grow, But we have to get over the borders, To get to the top tomorrow, This song will take you high, Anytime you\
need it just come with me, Try to stay for a while, Burn everything behind you and get free, Come baby try to shine bright, Rudeboy you rule the whole night, This song will take you high, Burn everything behind you and get free, Anytime when clouds are above you, And sun doesn't have chance to shine, Don't give it up and get thru, Although it will take your time, Never let nobody to hold you down, Never let nobody to get your crown, Spread your wings and fly over, Burn form your soul like a supernova"];

var quotesArray = ["Strength does not come from physical capacity. It comes from an indomitable will. - Mahatma Gandhi",
"Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
"If you want something you've never had, you must be willing to do something you've never done. -Thomas Jefferson",
"The body achieves what the mind believes.",
"Once you are exercising regularly, the hardest thing is to stop it. - Erin Gray",
"If you don't make time for exercise, you'll probably have to make time for illness. -Robin Sharma",
"The best way to predict the future is to create it. -Abraham Lincoln",
"Rome wasn't built in a day, but they worked on it every single day.",
"All progress takes place outside the comfort zone. -Michael John Bobak",
"What seems impossible today will one day become your warm-up.",
"The only bad workout is the one that didn't happen.",
"Your health is an investment, not an expense.",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
"Don't count the days; make the days count. - Muhammad Ali",
"The only way to do great work is to love what you do. - Steve Jobs",
"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
"Your body can stand almost anything. It's your mind that you have to convince.",
"The pain you feel today will be the strength you feel tomorrow.",
"Strive for progress, not perfection.",
"The secret to getting ahead is getting started. - Mark Twain",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"The harder you work for something, the greater you'll feel when you achieve it.",
"Success is not the destination; it's the journey.",
"The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
"Challenges are what make life interesting, and overcoming them is what makes life meaningful. - Joshua J. Marine",
"Dream big and dare to fail. - Norman Vaughan",
"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
"You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
"The secret of getting ahead is getting started. - Mark Twain",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
"The future depends on what you do today. - Mahatma Gandhi",
"Don't count the days; make the days count. - Muhammad Ali",
"The only way to do great work is to love what you do. - Steve Jobs",
"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
"Your body can stand almost anything. It's your mind that you have to convince.",
"The pain you feel today will be the strength you feel tomorrow.",
"Strive for progress, not perfection.",
"The secret to getting ahead is getting started. - Mark Twain",
"You miss 100% of the shots you don't take. - Wayne Gretzky"];

var musicArray = ["../../ProjectMedia/ProjectMusics/y2meta.com - Hollywood Undead - _Believe_ (Official Lyric Video) (320 kbps).mp3",
"../../ProjectMedia/ProjectMusics/y2meta.com - Hollywood Undead - _Lion_ (Official Lyric Video) (320 kbps).mp3",
"../../ProjectMedia/ProjectMusics/y2meta.com - Hollywood Undead - Bullet (Lyric Video) (320 kbps).mp3",
"../../ProjectMedia/ProjectMusics/††† (Crosses) - Bitches Brew (Official Music Video).mp3",
"../../ProjectMedia/ProjectMusics/04 The Unforgiven.mp3",
"../../ProjectMedia/ProjectMusics/BRAINS - AKKOR HÍVSZ feat. HALOTT PÉNZ (1).mp3",
"../../ProjectMedia/ProjectMusics/eminem  lose yourself  lyrics.mp3",
"../../ProjectMedia/ProjectMusics/Eminem - Godzilla ft. Juice WRLD.mp3",
"../../ProjectMedia/ProjectMusics/BRAINS - Take You High (Official Video).mp3",
"../../ProjectMedia/ProjectMusics/Coldrain_-_We_re_not_alone_Rainbow_Nisha_Rokubou_no_Shichinin_OST_Opening_(mp3.pm).mp3",
"../../ProjectMedia/ProjectMusics/2CELLOS - Thunderstruck [OFFICIAL VIDEO].mp3",
"../../ProjectMedia/ProjectMusics/10 - my last breath.mp3",
"../../ProjectMedia/ProjectMusics/Courtesy Call - Thousand Foot Krutch.mp3",
"../../ProjectMedia/ProjectMusics/y2meta.com - Imagine Dragons - Bones (Official Lyric Video) (320 kbps).mp3",
"../../ProjectMedia/ProjectMusics/BRAINS - Take You High (Official Video).mp3"];

var videoArray = ["../../ProjectMedia/ProjectVideos/WhatsApp Video 2022-12-04 at 5.53.04 PM.mp4",
"../../ProjectMedia/ProjectVideos/WhatsApp Video 2022-12-04 at 5.52.59 PM.mp4",
"../../ProjectMedia/ProjectVideos/WhatsApp Video 2022-12-04 at 5.52.57 PM.mp4",
"../../ProjectMedia/ProjectVideos/WhatsApp Video 2022-12-04 at 5.52.56 PM.mp4",
"../../ProjectMedia/ProjectVideos/WhatsApp Video 2022-12-04 at 5.51.41 PM.mp4",
"../../ProjectMedia/ProjectVideos/WhatsApp Video 2022-12-04 at 5.49.51 PM.mp4",
"../../ProjectMedia/ProjectVideos/WhatsApp Video 2022-12-04 at 5.49.50 PM.mp4"];

//  Videos And Musics Delay
if (window.location.href.includes("iBulk.html")) {for (var i = 0; i < musicArray.length; i++) {musicArray[i] = musicArray[i].substring(6);}}
if (window.location.href.includes("iBulk.html")) {for (var i = 0; i < videoArray.length; i++) {videoArray[i] = videoArray[i].substring(6);}}

musicButton.onclick = function() {
    if (musicSelect.value == "choose a music") {
        alert("Choose a Music From The List!");
        selectedMusic.currentTime = 0;
        selectedMusic.src = "";
        musicLyricsParagraph.style.color = "grey";
        musicLyricsParagraph.innerHTML = "Pick a music to have its lyrics here!";
    }
    else {
        selectedMusic.src = musicArray[musicSelect.value];
        musicLyricsParagraph.style.color = "black";
        musicLyricsParagraph.innerHTML = musicLyricsArray[musicSelect.value];
    }
}

videoButton.onclick = function() {
    if (videoSelect.value == "choose a video") alert("Choose a Video From The List!");
    selectedVideo.src = videoArray[videoSelect.value];
}
var quotes = document.getElementById("quotes");
var quotesParagraph = document.getElementById("quotesParagraph");
var timeThree = 0;	
var quotesArrayIndex = 1;	

quotesParagraph.innerHTML = quotesArray[Math.floor(Math.random() * quotesArray.length)];
function quotesTimer() {
    if (timeThree >= 4) {
        quotesParagraph.innerHTML = quotesArray[Math.floor(Math.random() * quotesArray.length)];
        timeThree = 0;
    }
    else {timeThree++;}
}

quotesInterval = setInterval(quotesTimer, 1000);
quotes.addEventListener("mouseenter", () => {clearInterval(quotesInterval);});
quotes.addEventListener("mouseleave", () => {quotesInterval = setInterval(quotesTimer, 1000);});

//  Exchange Media Data
var RecievingMusicCurrentTime = Number(localStorage.getItem("sendingMusicCurrentTime")); //  Recieving the music data
var RecievingMusicCurrentSRC = localStorage.getItem("sendingMusicCurrentSRC");
var RecievingMusicCurrentName = localStorage.getItem("sendingMusicCurrentName");
var RecievingMusicCurrentLyrics = localStorage.getItem("sendingMusicCurrentLyrics");
var continueMusicBackground = document.getElementById("continueMusicBackground");
var continueMusic = document.getElementById("continueMusic");
var yes = document.getElementById("yes");
var no = document.getElementById("no");

function RecievingFunction() {
    if (window.location.href.includes("iBulk.html")) {
        previousPageBoolean = JSON.parse(localStorage.getItem("previousPageBoolean"));
        if (!previousPageBoolean) {
            RecievingMusicCurrentSRC = RecievingMusicCurrentSRC.substring(6);
            previousPageBoolean = true;
            localStorage.setItem("previousPageBoolean", previousPageBoolean);
        }
    }
    else {
        previousPageBoolean = JSON.parse(localStorage.getItem("previousPageBoolean"));
        if (previousPageBoolean) {
            RecievingMusicCurrentSRC = "../../".concat(RecievingMusicCurrentSRC);
            previousPageBoolean = false;
            localStorage.setItem("previousPageBoolean", previousPageBoolean);
        }
    }
    selectedMusic.src = RecievingMusicCurrentSRC;
    musicArray[musicSelect.value] = RecievingMusicCurrentSRC;
    selectedMusic.currentTime = RecievingMusicCurrentTime;
    musicLyricsParagraph.innerHTML = RecievingMusicCurrentLyrics;
    musicLyricsArray[musicSelect.value] = RecievingMusicCurrentLyrics;
    continueMusicBackground.style.visibility = "hidden";
    continueMusic.style.visibility = "hidden";
}
if (RecievingMusicCurrentTime != 0) {
    continueMusicBackground.style.visibility = "visible";
    continueMusic.style.visibility = "visible";
    window.addEventListener("keydown", RecievingFunction, {once:true}) //  If user choosed keyboard
    yes.onclick = RecievingFunction;
    no.onclick = function() {
        continueMusicBackground.style.visibility = "hidden";
        continueMusic.style.visibility = "hidden";
        localStorage.setItem("sendingMusicCurrentTime", null);
    }
}
else {/* do none, music data either was lost or continuety has been canceled */}

var links = document.getElementsByClassName("links");

function MediaDataSending() { //  responsable function for media data transefering
    var musicCurrentTime = selectedMusic.currentTime;
    var musicCurrentSRC = musicArray[musicSelect.value];
    var musicCurrentName = musicsNamesArray[musicSelect.value];
    var musicCurrentLyrics = musicLyricsArray[musicSelect.value];
    localStorage.setItem("sendingMusicCurrentTime", musicCurrentTime);
    localStorage.setItem("sendingMusicCurrentSRC", musicCurrentSRC);
    localStorage.setItem("sendingMusicCurrentName", musicCurrentName);
    localStorage.setItem("sendingMusicCurrentLyrics", musicCurrentLyrics);
}

for (let i = 0; i < links.length; i++) {links[i].onclick = MediaDataSending}

// if (window.location.href.includes("nutrition.html")) {
//     var nutritionIMGS = document.getElementsByClassName("nutritionIMGS");
//     for (let i = 0; i < nutritionIMGS.length; i++) {nutritionIMGS[i].onclick = MediaDataSending;}
// }

// var nutritionEmbededPagesArray = ["diets.html", "HealthyFood.html", "iBulkNutritionDictionary.html", "unhealthyFood.html", "PersonaMealPlan.html"];
// for (var i = 0; i < nutritionEmbededPagesArray.length; i++) {
//     if (window.location.href.includes(nutritionEmbededPagesArray[i])) {
//         var linkingPages = document.getElementsByClassName("linkingPages");
//         for (let i = 0; i < linkingPages.length; i++) {linkingPages[i].onclick = MediaDataSending;}
//     }
// }