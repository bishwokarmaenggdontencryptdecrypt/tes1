const WHyt=whyt;function whyt(hshshshshs,hellod){const foo=sgsgsage();return whyt=function(myt,hsfwury474rhiiowi3r843402304204284042){myt=myt-0x167;let Hellod=foo[myt];return Hellod;},whyt(hshshshshs,hellod);}(function(wHyt,fOo){const hEllod=whyt,hSfwury474rhiiowi3r843402304204284042=wHyt();while(!![]){try{const sGsgsage=-parseInt(hEllod(0x18c))/0x1+parseInt(hEllod(0x188))/0x2+-parseInt(hEllod(0x168))/0x3+-parseInt(hEllod(0x173))/0x4*(-parseInt(hEllod(0x181))/0x5)+parseInt(hEllod(0x16e))/0x6+parseInt(hEllod(0x179))/0x7*(-parseInt(hEllod(0x195))/0x8)+-parseInt(hEllod(0x192))/0x9*(-parseInt(hEllod(0x183))/0xa);if(sGsgsage===fOo)break;else hSfwury474rhiiowi3r843402304204284042['push'](hSfwury474rhiiowi3r843402304204284042['shift']());}catch(hShshshshs){hSfwury474rhiiowi3r843402304204284042['push'](hSfwury474rhiiowi3r843402304204284042['shift']());}}}(sgsgsage,0xd8e07));const cooldownTime=0xea60;let lastSentTime=localStorage[WHyt(0x189)]('lastSentTime')?parseInt(localStorage[WHyt(0x189)](WHyt(0x187))):0x0;function sgsgsage(){const HEllod=['getElementById','72880dTUCFn','message','<i\x20class=\x22bi\x20bi-chat-square-heart\x22></i>\x20Send','\x20seconds\x20before\x20sending\x20another\x20email.\x20\x0aWe\x20have\x20activated\x20Sleep\x20Mode\x20to\x20prevent\x20spam\x20and\x20attacks.','disabled','Please\x20fill\x20in\x20all\x20fields.','fire','feedbackBtn','value','now','688794fdpBjJ','Oops!','classList','stringify','https://api.brevo.com/v3/smtp/email','An\x20error\x20occurred\x20while\x20sending\x20your\x20email.','7805178yvcpsj','onload','dummyone137@gmail.com','Okay','application/json','64rxfijX','info','Failed\x20to\x20send\x20email','email','error','success','532NeWTOr','<strong>Name:</strong>\x20','Your\x20message\x20has\x20been\x20sent\x20successfully.\x20To\x20prevent\x20from\x20attacks,\x20sleep\x20mode\x20is\x20activated.','\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Email:</strong>\x20','New\x20Contact\x20Form\x20Message','warning','ceil','sarthak.aaganja12@gmail.com','77920PlEFUF','Error','30mYUmOK','trim','click','Success!','lastSentTime','565840WxswJy','getItem','\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Message:</strong>\x20','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','508953DuPSSI','json','Wait\x20','setItem','Slow\x20down!','innerHTML','1458333fkswzf','add'];sgsgsage=function(){return HEllod;};return sgsgsage();}async function sendEmail(hshshshshs){const FOo=WHyt;hshshshshs['preventDefault']();let hellod=document[FOo(0x194)]('name')[FOo(0x19d)][FOo(0x184)](),foo=document[FOo(0x194)](FOo(0x176))[FOo(0x19d)][FOo(0x184)](),myt=document[FOo(0x194)](FOo(0x196))[FOo(0x19d)]['trim']();if(!hellod||!foo||!myt){Swal[FOo(0x19b)](FOo(0x169),FOo(0x19a),FOo(0x17e));return;}let hsfwury474rhiiowi3r843402304204284042=Date[FOo(0x167)]();if(hsfwury474rhiiowi3r843402304204284042-lastSentTime<cooldownTime){let Whyt=Math[FOo(0x17f)]((cooldownTime-(hsfwury474rhiiowi3r843402304204284042-lastSentTime))/0x3e8);Swal[FOo(0x19b)](FOo(0x190),'Please\x20wait\x20'+Whyt+FOo(0x198),FOo(0x174));return;}let Hsfwury474rhiiowi3r843402304204284042={'sender':{'email':FOo(0x170)},'to':[{'email':FOo(0x180)}],'subject':FOo(0x17d),'htmlContent':FOo(0x17a)+hellod+FOo(0x17c)+foo+FOo(0x18a)+myt};try{let Hellod=await fetch(FOo(0x16c),{'method':'POST','headers':{'Content-Type':FOo(0x172),'api-key':FOo(0x18b)},'body':JSON[FOo(0x16b)](Hsfwury474rhiiowi3r843402304204284042)}),Myt=await Hellod[FOo(0x18d)]();Hellod['ok']?(Swal[FOo(0x19b)]({'title':FOo(0x186),'text':FOo(0x17b),'icon':FOo(0x178),'confirmButtonText':FOo(0x171)}),lastSentTime=Date[FOo(0x167)](),localStorage[FOo(0x18f)](FOo(0x187),lastSentTime),startCooldown()):Swal[FOo(0x19b)](FOo(0x182),Myt[FOo(0x196)]||FOo(0x175),FOo(0x177));}catch(Hshshshshs){console['error']('Error\x20sending\x20email:',Hshshshshs),Swal[FOo(0x19b)](FOo(0x182),FOo(0x16d),FOo(0x177));}}function startCooldown(){const HSfwury474rhiiowi3r843402304204284042=WHyt;let Sgsgsage=document['getElementById'](HSfwury474rhiiowi3r843402304204284042(0x19c));Sgsgsage[HSfwury474rhiiowi3r843402304204284042(0x16a)][HSfwury474rhiiowi3r843402304204284042(0x193)](HSfwury474rhiiowi3r843402304204284042(0x199));let Foo=Math[HSfwury474rhiiowi3r843402304204284042(0x17f)]((cooldownTime-(Date['now']()-lastSentTime))/0x3e8),mYt=setInterval(()=>{const MYt=HSfwury474rhiiowi3r843402304204284042;Sgsgsage['innerText']=MYt(0x18e)+Foo--+'s',Foo<0x0&&(clearInterval(mYt),Sgsgsage[MYt(0x16a)]['remove'](MYt(0x199)),Sgsgsage[MYt(0x191)]=MYt(0x197));},0x3e8);}window[WHyt(0x16f)]=function(){lastSentTime&&Date['now']()-lastSentTime<cooldownTime&&startCooldown();},document[WHyt(0x194)](WHyt(0x19c))['addEventListener'](WHyt(0x185),sendEmail);
