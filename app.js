const discord =require("discord.js");
const client = new discord.Client();
var meme3="https://cdn.discordapp.com/attachments/408801219235282955/465350201692127232/IMG-20180707-WA0013.jpg";//nos amenazaron
var meme4="https://cdn.discordapp.com/attachments/465350324274593802/465350497713258516/9de38f5729a20c1a4eb4232fe658048f9cd8c205ab38b68bd75c194a556ff3aa.jpg";//da way
var meme5="https://cdn.discordapp.com/attachments/465350324274593802/465352436106788874/26992695_2037082843204594_105823832669448312_n.png";//da way
var meme6="https://cdn.discordapp.com/attachments/465350324274593802/465352487088685066/26731411_180601202540550_2849957325447835583_n.png";//da way
var meme7="https://cdn.discordapp.com/attachments/465350324274593802/465352557548666912/26220157_1744680482238191_2489609797248723948_n.png";//da way
var meme12="https://cdn.discordapp.com/attachments/465350324274593802/465352630089154602/26731094_564695140535035_412415735362711487_n.png";//da way
var meme8="https://cdn.discordapp.com/attachments/465350324274593802/465350615996825611/2476a0bec80491f5636996c7f42e82acd8ae0d5ef5f64ff8f0ab0a4533150154.jpg";//mi nave
var meme9="https://cdn.discordapp.com/attachments/465350324274593802/465350724050485249/634cd1b286af95291a952596e7a651631a46ccc14812a39b12d426a4608aefbe.png";//harry ayudalo
var meme10="https://cdn.discordapp.com/attachments/465350324274593802/465351440353853441/IMG-20180602-WA0017.jpg";//pinguino
var meme11="https://cdn.discordapp.com/attachments/465350324274593802/465352686628241418/28056506_907005332810946_1665469237289874823_n.png";//da way
var meme33="https://cdn.discordapp.com/attachments/465350324274593802/465352803766763530/26814841_887749598069853_5563129867437675000_n.png";//da way
var meme13="https://cdn.discordapp.com/attachments/465350324274593802/465353154968420364/59c283cb6b279.png";//mi nave
var meme14="https://cdn.discordapp.com/attachments/465350324274593802/465353194877222912/c901ce174d65f2745e32886fa988b8f515a7ca7e_00.png";//mi nave
var meme15="https://cdn.discordapp.com/attachments/465350324274593802/465353258253156373/a3384d0edcf32483e54b31817bf3f04d6d649e14_00.png";//mi nave
var meme16="https://cdn.discordapp.com/attachments/465350324274593802/465353371201699840/IMG-20180516-WA0022.jpg";//pinguino
var meme17="https://cdn.discordapp.com/attachments/465350324274593802/465353916956016651/29416923_373750209796384_4001805876485685248_n.png";//mi nave
var meme18="https://cdn.discordapp.com/attachments/465350324274593802/465353998329708544/FB_IMG_1531019399519.jpg";//nos amenazaron
var meme19="https://cdn.discordapp.com/attachments/465350324274593802/465354040105238528/66E.png";//mi nave
var meme20="https://cdn.discordapp.com/attachments/465350324274593802/465354460877684738/5a7811413f501.png";//mi nave
var meme21="https://cdn.discordapp.com/attachments/465350324274593802/465354706420629504/2c5cbc4ce3eca52f2962929c530395d068dceb01_00.png";//harry ayudalo
var meme22="https://cdn.discordapp.com/attachments/465350324274593802/465355178707648512/images.png";//harry ayudalo
var meme23="https://cdn.discordapp.com/attachments/465350324274593802/465355528797814804/cuando-estas-en-untorneo-de-kof-2002-yleestan-metiendo-una-18638021.png";//harry ayudalo
var meme24="https://cdn.discordapp.com/attachments/465350324274593802/465356610324135951/08120d597d157b5c5b610502603c531cd10ee77f40ce8e76ceb02d31e01f655a.jpg";//momo
var meme25="https://cdn.discordapp.com/attachments/465350324274593802/465356697104285697/6sDlF2P.png";//xd
var meme26="https://cdn.discordapp.com/attachments/465350324274593802/465356788900954113/original_4.jpg";//momo
var meme27="https://cdn.discordapp.com/attachments/465350324274593802/465356854365782023/437251fa74317246aed13de60a5035ed0b35b6bfc60fc777cfa01efc5a820a6a.jpg";//momo
var meme28="https://cdn.discordapp.com/attachments/465350324274593802/465356919704518657/ec6e4c83c40ad94dcf876378bae3cad79ec9faf7e5a6b37c5321b83ffb975cf4.jpg";//momo
var meme29="https://cdn.discordapp.com/attachments/465350324274593802/465356974733787157/c73d7a3353b3d23035947ac599bd6844d28633b2cfcddb722af86b9456e82e73.jpg";//momo
var meme30="https://cdn.discordapp.com/attachments/465350324274593802/465356981851652106/92be357c139365ae2e2ac44d0cd31608b981c739f07f194568ccc1543bc00a6e.jpg";//momo
var meme31="https://cdn.discordapp.com/attachments/465350324274593802/465356984376623104/32247250_1068426696658333_960228509836378112_n.jpg";//momo
var meme32="https://cdn.discordapp.com/attachments/465350324274593802/465356996594630667/36224413_1743827815713956_8868788195551084544_n.jpg";//momo
var meme73="https://cdn.discordapp.com/attachments/465350324274593802/465357002005282817/36414727_2079389938945614_7931941891401056256_n.jpg";//momo-----
var meme34="https://cdn.discordapp.com/attachments/465350324274593802/465357002005282817/36414727_2079389938945614_7931941891401056256_n.jpg";//momo
var meme35="https://cdn.discordapp.com/attachments/465350324274593802/465357006211907595/33943770_1667895876639534_8892038137719554048_n.jpg";//momo
var meme36="https://cdn.discordapp.com/attachments/465350324274593802/465357006887190590/36391101_1042597979227107_2941828967402831872_n.jpg";//momo
var meme37="https://cdn.discordapp.com/attachments/465350324274593802/465357010947538944/36398144_2071784619530818_105454374968360960_n.jpg";//momo
var meme38="https://cdn.discordapp.com/attachments/465350324274593802/465357010918047751/36307388_604076786630887_5367265628736454656_n.jpg";//momo
var meme39="https://cdn.discordapp.com/attachments/465350324274593802/465357015515004928/36448095_10216432642385586_7355693705619046400_n.jpg";//momo
var meme40="https://cdn.discordapp.com/attachments/465350324274593802/465357154988064769/30411540_1759269740818385_1448122634378239769_n.jpg";//momo
var meme41="https://cdn.discordapp.com/attachments/465350324274593802/465357161996877845/30442809_632307467161047_4988974241265606729_n.jpg";//momo
var meme42="https://cdn.discordapp.com/attachments/465350324274593802/465357163599233035/30415630_1370356503068959_7815248553386704896_n.jpg";//momo
var meme43="https://cdn.discordapp.com/attachments/465350324274593802/465357167025979395/30572244_1756445617749100_1791867644450701312_n.jpg";//momo
var meme44="https://cdn.discordapp.com/attachments/465350324274593802/465357170158862336/30530793_1004769446352922_3577168928150913024_n.jpg";//momo
var meme45="https://cdn.discordapp.com/attachments/465350324274593802/465357224420704257/FB_IMG_1531020164614.jpg";//momo
var meme46="https://cdn.discordapp.com/attachments/465350324274593802/465357368469749770/16195989_744700855682060_9012066658119742832_n.jpg";//momo
var meme47="https://cdn.discordapp.com/attachments/465350324274593802/465357645138624514/nms.jpg";//momo
var meme48="https://cdn.discordapp.com/attachments/465350324274593802/465357745105928205/f49959cf8e8439d04952453bcf1fd4cfdc8cda2508837107917d6bb3726e5c8c.jpg";//momo
var meme49="https://cdn.discordapp.com/attachments/465350324274593802/465357862315491331/get_1.jpg";//momo
var meme50="https://cdn.discordapp.com/attachments/465350324274593802/465357980842459146/d308fd721d938797fe1d9de550beb9403f109301bbf5fd33a5bab5e7679a4549.jpg";//momo
var meme51="https://cdn.discordapp.com/attachments/465350324274593802/465358290696798239/29ea4131da72e0fa3775d0eaf734a1ad725c6e83ee961ea89c9b17eb4a1f7311.jpg";//momo
var meme52="https://cdn.discordapp.com/attachments/465350324274593802/465358424595759115/f8054c9710d5683c4009444fa39146d8431a72d4ee3fd7f57d1ee8a04987ee1c.jpg";//momo
var meme53="https://cdn.discordapp.com/attachments/465350324274593802/465358890813358090/41885_5b3035fbd35c2.png";//momo
var meme54="https://cdn.discordapp.com/attachments/465350324274593802/465359568361357312/FB_IMG_1531020731146.jpg";//momo
var meme55="https://cdn.discordapp.com/attachments/465350324274593802/465359878173622272/37533_5a733ca9ec54a.png";//momo
var meme56="https://cdn.discordapp.com/attachments/465350324274593802/465360496737124352/36805424_2026584810738684_2304926080940638208_n.png";//momo
var meme57="https://cdn.discordapp.com/attachments/465350324274593802/465360622629027841/36245772_545870015814859_3953331548438134784_n.png";//momo
var meme58="https://cdn.discordapp.com/attachments/465350324274593802/465361132388089868/36723826_480183795757131_1358739386857947136_n.png";//momo
var meme59="https://cdn.discordapp.com/attachments/465350324274593802/465361713617960961/19959202_1102667516543677_1009838040235307943_n.png";//momo
var meme60="https://cdn.discordapp.com/attachments/465350324274593802/465362500259676160/36736104_1876078952412943_7564969427385450496_n.png";//momo
var meme61="https://cdn.discordapp.com/attachments/465350324274593802/465732045407125505/36927778_1811510498914187_4095629415591968768_n.jpg";//momo
var meme62="https://cdn.discordapp.com/attachments/465350324274593802/511043140296376320/FB_IMG_1541744355502.jpg"//momo
var meme63="https://cdn.discordapp.com/attachments/465350324274593802/511044252592242698/FB_IMG_1541744797638.jpg"//momo
var meme64="https://cdn.discordapp.com/attachments/465350324274593802/511044381323558930/FB_IMG_1541314697287.jpg"//momo
var meme65="https://cdn.discordapp.com/attachments/465350324274593802/511044381785194528/FB_IMG_1541384011284.jpg"//momo
var meme66="https://cdn.discordapp.com/attachments/465350324274593802/511044382221271051/FB_IMG_1541142498805.jpg"//momo
var meme67="https://cdn.discordapp.com/attachments/465350324274593802/511044382221271053/FB_IMG_1541197021356.jpg"//momo
var meme68="https://cdn.discordapp.com/attachments/465350324274593802/511044382732845056/FB_IMG_1540925349598.jpg"//momo
var meme69="https://cdn.discordapp.com/attachments/465350324274593802/511044508016967700/FB_IMG_1540674378889.jpg"//momo
var meme70="https://cdn.discordapp.com/attachments/465350324274593802/511044508016967701/FB_IMG_1540751289527.jpg"//momo
var meme71="https://cdn.discordapp.com/attachments/465350324274593802/511044508440461332/FB_IMG_1540674774245.jpg"//momo
var meme72="https://cdn.discordapp.com/attachments/465350324274593802/511044508440461333/FB_IMG_1540845159260.jpg"//momo
var meme73="https://cdn.discordapp.com/attachments/465350324274593802/511044509014949898/FB_IMG_1540850457813.jpg"//momo
var meme74="https://cdn.discordapp.com/attachments/465350324274593802/511044697922207765/FB_IMG_1540591095896.jpg"//momo
var meme75="https://cdn.discordapp.com/attachments/465350324274593802/511044698518061076/FB_IMG_1540590087181.jpg"//momo
var meme76="https://cdn.discordapp.com/attachments/465350324274593802/511044698518061078/FB_IMG_1540672466481.jpg"//momo
var meme77="https://cdn.discordapp.com/attachments/465350324274593802/511044699222573056/FB_IMG_1540435564527.jpg"//momo
var meme78="https://cdn.discordapp.com/attachments/465350324274593802/511044831703990273/FB_IMG_1540260846727.jpg"//momo
var meme79="https://cdn.discordapp.com/attachments/465350324274593802/511044832706297856/FB_IMG_1540435461196.jpg"//momo
var meme80="https://cdn.discordapp.com/attachments/465350324274593802/511044832706297858/FB_IMG_1540434646868.jpg"//momo
var meme81="https://cdn.discordapp.com/attachments/465350324274593802/511044833339506699/FB_IMG_1540403522318.jpg"//momo
var meme82="https://cdn.discordapp.com/attachments/465350324274593802/511044833339506701/FB_IMG_1540331055028.jpg"//momo
var meme83="https://cdn.discordapp.com/attachments/465350324274593802/511044983013244929/FB_IMG_1540080188431.jpg"//momo
var meme84="https://cdn.discordapp.com/attachments/465350324274593802/511044983529406494/FB_IMG_1540176149513.jpg"//momo
var meme85="https://cdn.discordapp.com/attachments/465350324274593802/511044983529406496/FB_IMG_1540220914963.jpg"//momo
var meme86="https://cdn.discordapp.com/attachments/465350324274593802/511044984082923521/FB_IMG_1540257172983.jpg"//momo
var meme87="https://cdn.discordapp.com/attachments/465350324274593802/511044984082923523/FB_IMG_1540058184229.jpg"//momo
var meme88="https://cdn.discordapp.com/attachments/441114566223593494/575417508002005022/59563221_2117970748501967_4207059627667357696_n.jpg"//joto
var meme89="https://cdn.discordapp.com/attachments/574464093214343210/576313777042096148/AGQN0pKxj3VHAAAAAElFTkSuQmCC.png"//kraken
client.on("ready", () => {
  console.log("que hongo que pecks");
  client.user.setStatus("Online");
  client.user.setActivity("..ayuda");
});
 
var prefix="..";
client.on("message", (message)=>{

  if(message.content.includes("momo") || message.content.includes ("Momo")){ //26,27,28,29,30,31,32,62,63,64,65
  var numero=62;
var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
    
  switch(random){
    case 1: message.reply ({ files: [meme26]}); break;
    case 2: message.reply ({ files: [meme27]}); break;
    case 3: message.reply ({ files: [meme28]}); break;
    case 4: message.reply ({ files: [meme29]}); break;
    case 5: message.reply ({ files: [meme30]}); break;
    case 6: message.reply ({ files: [meme31]}); break;
    case 7: message.reply ({ files: [meme32]}); break;
    case 8: message.reply ({ files: [meme73]}); break;
    case 9: message.reply ({ files: [meme34]}); break;
    case 10: message.reply ({ files: [meme35]}); break;
    case 11: message.reply ({ files: [meme36]}); break;
    case 12: message.reply ({ files: [meme37]}); break;
    case 13: message.reply ({ files: [meme38]}); break;
    case 14: message.reply ({ files: [meme39]}); break;
    case 15: message.reply ({ files: [meme40]}); break;
    case 16: message.reply ({ files: [meme41]}); break;
    case 17: message.reply ({ files: [meme42]}); break;
    case 18: message.reply ({ files: [meme43]}); break;
    case 19: message.reply ({ files: [meme44]}); break;
    case 20: message.reply ({ files: [meme45]}); break;
    case 21: message.reply ({ files: [meme46]}); break;
    case 22: message.reply ({ files: [meme47]}); break;
    case 23: message.reply({ files: [meme48]}); break;
    case 24: message.reply ({ files: [meme49]}); break;
    case 25: message.reply ({ files: [meme50]}); break;
    case 26: message.reply ({ files: [meme51]}); break;
    case 27: message.reply({ files: [meme52]}); break;
    case 28: message.reply ({ files: [meme53]}); break;
    case 29: message.reply ({ files: [meme54]}); break;
    case 30: message.reply ({ files: [meme55]}); break;
    case 31: message.reply({ files: [meme56]}); break;
    case 32: message.reply ({ files: [meme57]}); break;
    case 33: message.reply ({ files: [meme58]}); break;
    case 34: message.reply ({ files: [meme59]}); break;
    case 35: message.reply ({ files: [meme60]}); break;
    case 36: message.reply ({ files: [meme61]}); break;
    case 37: message.reply ({ files: [meme62]}); break;
    case 38: message.reply ({ files: [meme63]}); break;
    case 39: message.reply ({ files: [meme64]}); break;
    case 40: message.reply ({ files: [meme65]}); break;
    case 41: message.reply ({ files: [meme66]}); break;
    case 42: message.reply ({ files: [meme67]}); break;
    case 43: message.reply ({ files: [meme68]}); break;
    case 44: message.reply ({ files: [meme69]}); break;
    case 45: message.reply ({ files: [meme70]}); break;  
    case 46: message.reply ({ files: [meme71]}); break;
    case 47: message.reply ({ files: [meme72]}); break; 
    case 48: message.reply ({ files: [meme73]}); break; 
    case 49: message.reply ({ files: [meme74]}); break;
    case 50: message.reply ({ files: [meme75]}); break; 
    case 51: message.reply ({ files: [meme76]}); break;
    case 52: message.reply ({ files: [meme77]}); break;
    case 53: message.reply ({ files: [meme78]}); break;
    case 54: message.reply ({ files: [meme79]}); break;
    case 55: message.reply ({ files: [meme80]}); break;
    case 56: message.reply ({ files: [meme81]}); break;
    case 57: message.reply ({ files: [meme82]}); break;
    case 58: message.reply ({ files: [meme83]}); break;
    case 59: message.reply ({ files: [meme84]}); break;
    case 60: message.reply ({ files: [meme85]}); break;
    case 61: message.creply ({ files: [meme86]}); break;
    case 62: message.reply ({ files: [meme87]}); break;
  }
}
if(message.content.includes("da way")){//4,5,6,7,12,11,33
  numero=7;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch(random){
    case 1: message.reply ({ files: [meme4]}); break;
    case 2: message.reply ({ files: [meme5]}); break;
    case 3: message.reply ({ files: [meme6]}); break;
    case 4: message.reply ({ files: [meme7]}); break;
    case 5: message.reply ({ files: [meme12]}); break;
    case 6: message.reply({ files: [meme11]}); break;
    case 7: message.reply ({ files: [meme33]}); break;
  }
}
if(message.content.includes("nos amenazaron")){ //3,18
  numero=2;
    var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
    switch(random){
      case 1: message.reply ({ files: [meme3]});break;
      case 2: message.reply ({ files: [meme18]});break;
    }
}
if(message.content.includes("mi nave")){//8,13,14,15,17,19,20
  numero=7;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch(random){
    case 1: message.reply ({ files: [meme8]}); break;
    case 2: message.reply ({ files: [meme13]}); break;
    case 3: message.reply ({ files: [meme14]}); break;
    case 4: message.reply ({ files: [meme15]}); break;
    case 5: message.reply ({ files: [meme17]}); break;
    case 6: message.reply ({ files: [meme19]}); break;
    case 7: message.reply ({ files: [meme20]}); break;
  }
}
if(message.content.includes("harry ayudalo")){//9,21,22,23
  numero=4;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch(random){
   case 1: message.reply ({ files: [meme9]}); break;
   case 2: message.reply ({ files: [meme21]}); break;
   case 3: message.reply ({ files: [meme22]}); break;
   case 4: message.reply ({ files: [meme23]}); break;
  }
}
if(message.content.includes("pinguino")){//10,16
  numero=2;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch (random){
    case 1: message.reply ({ files: [meme10]}); break;
    case 2: message.reply ({ files: [meme16]}); break;
  }
}
if(message.content.includes("xd")){//25
  message.reply({ files: [meme25]});
}  
  if(message.content.includes("joto")){//25
  message.reply({ files: [meme88]});
}  
  if(message.content.includes("kraken") || message.content.includes("Kraken")){//25
  message.reply({ files: [meme89]});
}  
  if(message.content.startsWith(prefix + "ayuda")){
     message.author.send("https://github.com/SilentAsassin/DealerDeMomos/blob/master/commands.txt");
     }
  if (message.content.startsWith("ayuda") || message.content.startsWith("m.ayuda") | message.content.startsWith("m.hola")){
    message.reply("Que, Tu bot no te responde?jsjsjsjs");
  }
});

client.login("NDY1NzQzNjY4OTM1MTMxMTQ3.DiSrfg.sqJmtFbJkhG5jSE3idzB-C3RcGQ");
