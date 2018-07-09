const discord =require("discord.js");
const client = new discord.Client();
memes= "./img/1.jpg";
meme3="https://cdn.discordapp.com/attachments/408801219235282955/465350201692127232/IMG-20180707-WA0013.jpg";//nos amenazaron
meme4="https://cdn.discordapp.com/attachments/465350324274593802/465350497713258516/9de38f5729a20c1a4eb4232fe658048f9cd8c205ab38b68bd75c194a556ff3aa.jpg";//da way
meme5="https://cdn.discordapp.com/attachments/465350324274593802/465352436106788874/26992695_2037082843204594_105823832669448312_n.png";//da way
meme6="https://cdn.discordapp.com/attachments/465350324274593802/465352487088685066/26731411_180601202540550_2849957325447835583_n.png";//da way
meme7="https://cdn.discordapp.com/attachments/465350324274593802/465352557548666912/26220157_1744680482238191_2489609797248723948_n.png";//da way
meme12="https://cdn.discordapp.com/attachments/465350324274593802/465352630089154602/26731094_564695140535035_412415735362711487_n.png";//da way
meme8="https://cdn.discordapp.com/attachments/465350324274593802/465350615996825611/2476a0bec80491f5636996c7f42e82acd8ae0d5ef5f64ff8f0ab0a4533150154.jpg";//mi nave
meme9="https://cdn.discordapp.com/attachments/465350324274593802/465350724050485249/634cd1b286af95291a952596e7a651631a46ccc14812a39b12d426a4608aefbe.png";//harry ayudalo
meme10="https://cdn.discordapp.com/attachments/465350324274593802/465351440353853441/IMG-20180602-WA0017.jpg";//pinguino
meme11="https://cdn.discordapp.com/attachments/465350324274593802/465352686628241418/28056506_907005332810946_1665469237289874823_n.png";//da way
meme33="https://cdn.discordapp.com/attachments/465350324274593802/465352803766763530/26814841_887749598069853_5563129867437675000_n.png";//da way
meme13="https://cdn.discordapp.com/attachments/465350324274593802/465353154968420364/59c283cb6b279.png";//mi nave
meme14="https://cdn.discordapp.com/attachments/465350324274593802/465353194877222912/c901ce174d65f2745e32886fa988b8f515a7ca7e_00.png";//mi nave
meme15="https://cdn.discordapp.com/attachments/465350324274593802/465353258253156373/a3384d0edcf32483e54b31817bf3f04d6d649e14_00.png";//mi nave
meme16="https://cdn.discordapp.com/attachments/465350324274593802/465353371201699840/IMG-20180516-WA0022.jpg";//pinguino
meme17="https://cdn.discordapp.com/attachments/465350324274593802/465353916956016651/29416923_373750209796384_4001805876485685248_n.png";//mi nave
meme18="https://cdn.discordapp.com/attachments/465350324274593802/465353998329708544/FB_IMG_1531019399519.jpg";//nos amenazaron
meme19="https://cdn.discordapp.com/attachments/465350324274593802/465354040105238528/66E.png";//mi nave
meme20="https://cdn.discordapp.com/attachments/465350324274593802/465354460877684738/5a7811413f501.png";//mi nave
meme21="https://cdn.discordapp.com/attachments/465350324274593802/465354706420629504/2c5cbc4ce3eca52f2962929c530395d068dceb01_00.png";//harry ayudalo
meme22="https://cdn.discordapp.com/attachments/465350324274593802/465355178707648512/images.png";//harry ayudalo
meme23="https://cdn.discordapp.com/attachments/465350324274593802/465355528797814804/cuando-estas-en-untorneo-de-kof-2002-yleestan-metiendo-una-18638021.png";//harry ayudalo
meme24="https://cdn.discordapp.com/attachments/465350324274593802/465356610324135951/08120d597d157b5c5b610502603c531cd10ee77f40ce8e76ceb02d31e01f655a.jpg";//momo
meme25="https://cdn.discordapp.com/attachments/465350324274593802/465356697104285697/6sDlF2P.png";//xd
meme26="https://cdn.discordapp.com/attachments/465350324274593802/465356788900954113/original_4.jpg";//momo
meme27="https://cdn.discordapp.com/attachments/465350324274593802/465356854365782023/437251fa74317246aed13de60a5035ed0b35b6bfc60fc777cfa01efc5a820a6a.jpg";//momo
meme28="https://cdn.discordapp.com/attachments/465350324274593802/465356919704518657/ec6e4c83c40ad94dcf876378bae3cad79ec9faf7e5a6b37c5321b83ffb975cf4.jpg";//momo
meme29="https://cdn.discordapp.com/attachments/465350324274593802/465356974733787157/c73d7a3353b3d23035947ac599bd6844d28633b2cfcddb722af86b9456e82e73.jpg";//momo
meme30="https://cdn.discordapp.com/attachments/465350324274593802/465356981851652106/92be357c139365ae2e2ac44d0cd31608b981c739f07f194568ccc1543bc00a6e.jpg";//momo
meme31="https://cdn.discordapp.com/attachments/465350324274593802/465356984376623104/32247250_1068426696658333_960228509836378112_n.jpg";//momo
meme32="https://cdn.discordapp.com/attachments/465350324274593802/465356996594630667/36224413_1743827815713956_8868788195551084544_n.jpg";//momo
meme33="https://cdn.discordapp.com/attachments/465350324274593802/465357002005282817/36414727_2079389938945614_7931941891401056256_n.jpg";//momo-----
meme34="https://cdn.discordapp.com/attachments/465350324274593802/465357002005282817/36414727_2079389938945614_7931941891401056256_n.jpg";//momo
meme35="https://cdn.discordapp.com/attachments/465350324274593802/465357006211907595/33943770_1667895876639534_8892038137719554048_n.jpg";//momo
meme36="https://cdn.discordapp.com/attachments/465350324274593802/465357006887190590/36391101_1042597979227107_2941828967402831872_n.jpg";//momo
meme37="https://cdn.discordapp.com/attachments/465350324274593802/465357010947538944/36398144_2071784619530818_105454374968360960_n.jpg";//momo
meme38="https://cdn.discordapp.com/attachments/465350324274593802/465357010918047751/36307388_604076786630887_5367265628736454656_n.jpg";//momo
meme39="https://cdn.discordapp.com/attachments/465350324274593802/465357015515004928/36448095_10216432642385586_7355693705619046400_n.jpg";//momo
meme40="https://cdn.discordapp.com/attachments/465350324274593802/465357154988064769/30411540_1759269740818385_1448122634378239769_n.jpg";//momo
meme41="https://cdn.discordapp.com/attachments/465350324274593802/465357161996877845/30442809_632307467161047_4988974241265606729_n.jpg";//momo
meme42="https://cdn.discordapp.com/attachments/465350324274593802/465357163599233035/30415630_1370356503068959_7815248553386704896_n.jpg";//momo
meme43="https://cdn.discordapp.com/attachments/465350324274593802/465357167025979395/30572244_1756445617749100_1791867644450701312_n.jpg";//momo
meme44="https://cdn.discordapp.com/attachments/465350324274593802/465357170158862336/30530793_1004769446352922_3577168928150913024_n.jpg";//momo
meme45="https://cdn.discordapp.com/attachments/465350324274593802/465357224420704257/FB_IMG_1531020164614.jpg";//momo
meme46="https://cdn.discordapp.com/attachments/465350324274593802/465357368469749770/16195989_744700855682060_9012066658119742832_n.jpg";//momo
meme47="https://cdn.discordapp.com/attachments/465350324274593802/465357645138624514/nms.jpg";//momo
meme48="https://cdn.discordapp.com/attachments/465350324274593802/465357745105928205/f49959cf8e8439d04952453bcf1fd4cfdc8cda2508837107917d6bb3726e5c8c.jpg";//momo
meme49="https://cdn.discordapp.com/attachments/465350324274593802/465357862315491331/get_1.jpg";//momo
meme50="https://cdn.discordapp.com/attachments/465350324274593802/465357980842459146/d308fd721d938797fe1d9de550beb9403f109301bbf5fd33a5bab5e7679a4549.jpg";//momo
meme51="https://cdn.discordapp.com/attachments/465350324274593802/465358290696798239/29ea4131da72e0fa3775d0eaf734a1ad725c6e83ee961ea89c9b17eb4a1f7311.jpg";//momo
meme52="https://cdn.discordapp.com/attachments/465350324274593802/465358424595759115/f8054c9710d5683c4009444fa39146d8431a72d4ee3fd7f57d1ee8a04987ee1c.jpg";//momo
meme53="https://cdn.discordapp.com/attachments/465350324274593802/465358890813358090/41885_5b3035fbd35c2.png";//momo
meme54="https://cdn.discordapp.com/attachments/465350324274593802/465359568361357312/FB_IMG_1531020731146.jpg";//momo
meme55="https://cdn.discordapp.com/attachments/465350324274593802/465359878173622272/37533_5a733ca9ec54a.png";//momo
meme56="https://cdn.discordapp.com/attachments/465350324274593802/465360496737124352/36805424_2026584810738684_2304926080940638208_n.png";//momo
meme57="https://cdn.discordapp.com/attachments/465350324274593802/465360622629027841/36245772_545870015814859_3953331548438134784_n.png";//momo
meme58="https://cdn.discordapp.com/attachments/465350324274593802/465361132388089868/36723826_480183795757131_1358739386857947136_n.png";//momo
meme59="https://cdn.discordapp.com/attachments/465350324274593802/465361713617960961/19959202_1102667516543677_1009838040235307943_n.png";//momo
meme60="https://cdn.discordapp.com/attachments/465350324274593802/465362500259676160/36736104_1876078952412943_7564969427385450496_n.png";//momo
meme61="https://cdn.discordapp.com/attachments/465350324274593802/465732045407125505/36927778_1811510498914187_4095629415591968768_n.jpg";//momo

client.on("ready", () => {
  console.log("que hongo que pecks");
});
var prefix = config.prefix;

client.on("message", (message)=>{

  if(message.content.startsWith("momo")){ //26,27,28,29,30,31,32
  numero=36;
var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch(random){
    case 1: message.channel.send ({ files: [meme26]}); break;
    case 2: message.channel.send ({ files: [meme27]}); break;
    case 3: message.channel.send ({ files: [meme28]}); break;
    case 4: message.channel.send ({ files: [meme29]}); break;
    case 5: message.channel.send ({ files: [meme30]}); break;
    case 6: message.channel.send ({ files: [meme31]}); break;
    case 7: message.channel.send ({ files: [meme32]}); break;
    case 8: message.channel.send ({ files: [meme33]}); break;
    case 9: message.channel.send ({ files: [meme34]}); break;
    case 10: message.channel.send ({ files: [meme35]}); break;
    case 11: message.channel.send ({ files: [meme36]}); break;
    case 12: message.channel.send ({ files: [meme37]}); break;
    case 13: message.channel.send ({ files: [meme38]}); break;
    case 14: message.channel.send ({ files: [meme39]}); break;
    case 15: message.channel.send ({ files: [meme40]}); break;
    case 16: message.channel.send ({ files: [meme41]}); break;
    case 17: message.channel.send ({ files: [meme42]}); break;
    case 18: message.channel.send ({ files: [meme43]}); break;
    case 19: message.channel.send ({ files: [meme44]}); break;
    case 20: message.channel.send ({ files: [meme45]}); break;
    case 21: message.channel.send ({ files: [meme46]}); break;
    case 22: message.channel.send ({ files: [meme47]}); break;
    case 23: message.channel.send ({ files: [meme48]}); break;
    case 24: message.channel.send ({ files: [meme49]}); break;
    case 25: message.channel.send ({ files: [meme50]}); break;
    case 26: message.channel.send ({ files: [meme51]}); break;
    case 27: message.channel.send ({ files: [meme52]}); break;
    case 28: message.channel.send ({ files: [meme53]}); break;
    case 29: message.channel.send ({ files: [meme54]}); break;
    case 30: message.channel.send ({ files: [meme55]}); break;
    case 31: message.channel.send ({ files: [meme56]}); break;
    case 32: message.channel.send ({ files: [meme57]}); break;
    case 33: message.channel.send ({ files: [meme58]}); break;
    case 34: message.channel.send ({ files: [meme59]}); break;
    case 35: message.channel.send ({ files: [meme60]}); break;
    case 36: message.channel.send ({ files: [meme61]}); break;

  }
}
if(message.content.startsWith("da way")){//4,5,6,7,12,11,33
  numero=7;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch(random){
    case 1: message.channel.send ({ files: [meme4]}); break;
    case 2: message.channel.send ({ files: [meme5]}); break;
    case 3: message.channel.send ({ files: [meme6]}); break;
    case 4: message.channel.send ({ files: [meme7]}); break;
    case 5: message.channel.send ({ files: [meme12]}); break;
    case 6: message.channel.send ({ files: [meme11]}); break;
    case 7: message.channel.send ({ files: [meme33]}); break;
  }
}
if(message.content.startsWith("nos amenazaron")){ //3,18
  numero=2;
    var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
    switch(random){
      case 1: message.channel.send ({ files: [meme3]});break;
      case 2: message.chhanel.send ({ files: [meme18]});break;
    }
}
if(message.content.startsWith("mi nave")){//8,13,14,15,17,19,20
  numero=7;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch(random){
    case 1: message.channel.send ({ files: [meme8]}); break;
    case 2: message.channel.send ({ files: [meme13]}); break;
    case 3: message.channel.send ({ files: [meme14]}); break;
    case 4: message.channel.send ({ files: [meme15]}); break;
    case 5: message.channel.send ({ files: [meme17]}); break;
    case 6: message.channel.send ({ files: [meme19]}); break;
    case 7: message.channel.send ({ files: [meme20]}); break;
  }
}
if(message.content.startsWith("harry ayudalo")){//9,21,22,23
  numero=4;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch(random){
   case 1: message.channel.send ({ files: [meme9]}); break;
   case 2: message.channel.send ({ files: [meme21]}); break;
   case 3: message.channel.send ({ files: [meme22]}); break;
   case 4: message.channel.send ({ files: [meme23]}); break;
  }
}
if(message.content.startsWith("pinguino")){//10,16
  numero=2;
  var random = Math.floor (Math.random ()* (numero -1 + 1 ) + 1);
  switch (random){
    case 1: message.channel.send ({ files: [meme10]}); break;
    case 2: message.channel.send ({ files: [meme16]}); break;
  }
}
if(message.content.startsWith("xd")){//25
  message.channel.send({ files: [meme25]});
}

});



client.login(process.env.token);
