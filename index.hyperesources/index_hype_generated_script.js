//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_674F||null!=window.HYPE_dtl_674F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-674.full.min.js":"HYPE-674.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_674"+c,"HYPE_dtl_674"+c,a,d),false==!0&&(a=a||k("HYPE_w_674","HYPE_wdtl_674","HYPE-674.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_674","HYPE-674.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tgetInfo();\n\thypeDocument.getElementById(\"title1\").innerHTML = window.title;\n\t\n}",identifier:"10"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\t\n\thypeDocument.getElementById(\"infoDisplay\").innerHTML = \"QUESTION \" + (window.currentSlide + 1) + \" OF \" + window.numberOfQuestions;\n\t\n\tif (window.currentScore >= 0) {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: +\" + (\"00000\" + window.currentScore).substr(-5, 5);\n\t} else {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: -\" + (\"00000\" + (Math.abs(window.currentScore))).substr(-5, 5);\n\t}\n\t\n\thypeDocument.getElementById(\"questionDisplay\").innerHTML = window.questions[window.currentSlide];\n\thypeDocument.getElementById(\"answerADisplay\").innerHTML = window.answerA[window.currentSlide];\n\thypeDocument.getElementById(\"answerBDisplay\").innerHTML = window.answerB[window.currentSlide];\n\thypeDocument.getElementById(\"answerCDisplay\").innerHTML = window.answerC[window.currentSlide];\n\thypeDocument.getElementById(\"answerDDisplay\").innerHTML = window.answerD[window.currentSlide];\n\thypeDocument.getElementById(\"answerEDisplay\").innerHTML = window.answerE[window.currentSlide];\n\t\n\thypeDocument.getElementById(\"answerADisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.visibility = \"visible\";\n\t\n\thypeDocument.getElementById(\"answerADisplay\").style.color = \"#8542FF\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.color = \"#8542FF\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.color = \"#8542FF\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.color = \"#8542FF\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.color = \"#8542FF\";\n\n\twindow.temp1 = [\"A\", \"B\", \"C\", \"D\", \"E\" ];\n\t\n\tif (window.correctAnswer[window.currentSlide] == \"A\") { window.temp1.splice(0, 1); } \n\telse if (window.correctAnswer[window.currentSlide] == \"B\") { window.temp1.splice(1, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"C\") { window.temp1.splice(2, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"D\") { window.temp1.splice(3, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"E\") { window.temp1.splice(4, 1); }\n\t\n\t// SHUFFLE THE ARRAY, SEE https://css-tricks.com/snippets/javascript/shuffle-array/ for details\n\tfor(var j, x, i = window.temp1.length; i; j = parseInt(Math.random() * i), x = window.temp1[--i], window.temp1[i] = window.temp1[j], window.temp1[j] = x);\n\t\n\twindow.clickedAnswer = \"\";\n\twindow.timerValue = 0;\n\t\t\t\t\t\n}",identifier:"29"},{name:"removeWrongAnswer",source:"function(hypeDocument, element, event) {\t\n\tvar temp2 = \"answer\" + window.temp1[0] + \"Display\";\n\thypeDocument.getElementById(temp2).style.visibility = \"hidden\";\n\twindow.temp1.shift();\n\t\n}",identifier:"43"},{name:"answerClicked",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"answerADisplay\").style.color = \"#FFFB00\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.color = \"#FFFB00\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.color = \"#FFFB00\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.color = \"#FFFB00\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.color = \"#FFFB00\";\n\thypeDocument.getElementById(element.id).style.color = \"#FF2600\";\n\t\n\twindow.clickedAnswer = element.id.charAt(6);\n\t\n\twindow.timerValue = Number(hypeDocument.getElementById(\"countdownText\").innerHTML);\n\tif ( window.clickedAnswer == window.correctAnswer[window.currentSlide] ) {\n   \t//alert(\"CORRECT\");\n   } else {\n    \t//alert(\"WRONG\");\n    \twindow.timerValue = -1 * (window.timerValue);\n   }\n    \n}",identifier:"44"},{name:"updateScore",source:"function(hypeDocument, element, event) {\t\n\twindow.currentScore = window.currentScore + window.timerValue;\n\t\n\tif (window.currentScore >= 0) {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: +\" + (\"00000\" + window.currentScore).substr(-5, 5);\n\t} else {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: -\" + (\"00000\" + (Math.abs(window.currentScore))).substr(-5, 5);\n\t}\n\t\n\thypeDocument.getElementById(\"questionDisplay\").innerHTML = window.response[currentSlide];\n\t\n}",identifier:"45"},{name:"initializeSummary",source:"function(hypeDocument, element, event) {\n\tvar x1 = (window.currentScore/window.numberOfQuestions)/10;\n\tvar string1 = \"You scored \" + window.currentScore + \" points<br>out of a possible \";\n\tstring1 = string1 + (window.numberOfQuestions*1000) + \" <br>putting you at \";\n\tstring1 = string1 + x1 + \" percent.\";\n\thypeDocument.getElementById(\"info1\").innerHTML = string1;\n\t\n}",identifier:"55"},{name:"cleanupMain",source:"function(hypeDocument, element, event) {\t\n\twindow.currentSlide = window.currentSlide + 1;\n\t\t\n\tif (window.currentSlide < window.numberOfQuestions) {\n\t\thypeDocument.showSceneNamed(\"main\");\n\t} else {\n\t\thypeDocument.showSceneNamed(\"summary\");\n\t} \n\t\n}",identifier:"56"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_674"+c](f,g,{"3":{n:"triviaInfo.js"},"1":{p:1,n:"thumb-1920-542237-1_2x.jpg",g:"49",o:true,t:"@2x"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"2":{p:1,n:"ka9i75bwsvz41.jpg",g:"5",t:"@1x"},"0":{p:1,n:"thumb-1920-542237-1.jpg",g:"49",o:true,t:"@1x"}},l,[],e,[{n:"splash",o:"1",X:[0]},{n:"main",o:"11",X:[1]},{n:"summary",o:"46",X:[2]}],
[{A:{a:[{p:4,h:"10"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,c:"#FFF",L:[],bY:1,d:1024,U:{},T:{"9_hover":{q:false,z:1,i:"9_hover",n:"9_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#0E0",s:"#FF33E4",o:"59"},{f:"c",y:0,z:1,i:"B",e:"#0E0",s:"#FF33E4",o:"59"},{f:"c",y:0,z:1,i:"C",e:"#0E0",s:"#FF33E4",o:"59"},{f:"c",y:0,z:1,i:"D",e:"#0E0",s:"#FF33E4",o:"59"},{f:"c",y:0,z:1,i:"A",e:"#0E0",s:"#FF33E4",o:"59"},{y:1,i:"G",s:"#0E0",z:0,o:"59",f:"c"},{y:1,i:"B",s:"#0E0",z:0,o:"59",f:"c"},{y:1,i:"C",s:"#0E0",z:0,o:"59",f:"c"},{y:1,i:"D",s:"#0E0",z:0,o:"59",f:"c"},{y:1,i:"A",s:"#0E0",z:0,o:"59",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:2,i:"e",e:1,s:0,o:"60"},{f:"c",y:0,z:2,i:"a",e:317,s:335,o:"57"},{f:"c",y:0,z:2,i:"b",e:215,s:-224,o:"57"},{f:"c",y:0,z:0.16,i:"e",e:0.7,s:0,o:"59"},{f:"c",y:0.16,z:0.1,i:"e",e:0.13606606,s:0.7,o:"59"},{f:"c",y:0.26,z:0.14,i:"e",e:0.9,s:0.13606606,o:"59"},{f:"c",y:1.1,z:0.12,i:"e",e:0,s:0.9,o:"59"},{f:"c",y:1.22,z:0.08,i:"e",e:1,s:0,o:"59"},{y:2,i:"b",s:215,z:0,o:"57",f:"c"},{y:2,i:"a",s:317,z:0,o:"57",f:"c"},{y:2,i:"e",s:1,z:0,o:"60",f:"c"},{y:2,i:"e",s:1,z:0,o:"59",f:"c"}],f:30,b:[]}},bZ:180,O:["58","60","57","59"],n:"Untitled Layout","_":0,v:{"58":{h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:1,d:768},"57":{aU:8,bB:2,G:"#8542FF",aV:8,r:"inline",bC:2,s:"'Courier New',Courier,Monospace",t:36,Z:"break-word",v:"bold",i:"byline",w:"by Tristan Dallenbach",j:"absolute",x:"visible",yy:"nowrap",aZ:0,y:"preserve",k:"div",z:3,aS:8,aT:8,a:335,bA:"#000",b:-224},"59":{b:502,z:4,K:"Solid",c:449,L:"Solid",d:103,aS:6,M:12,e:0,bD:"none",N:12,aT:6,dB:"button",O:12,aU:6,P:12,aV:6,i:"startButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FF33E4",Y:96,B:"#FF33E4",aM:"9_hover",r:"inline",C:"#FF33E4",Z:"break-word",s:"Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",D:"#FF33E4",t:96,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"11"}]},G:"#FF33E4",aP:"pointer",w:"START",x:"visible",I:"Solid",a:269,y:"preserve",J:"Solid"},"60":{aU:8,bB:3,G:"#8542FF",c:1008,aV:8,r:"inline",d:101,e:0,s:"Noteworthy,Chalkboard,'Chalkboard SE','Comic Sans MS',sans-serif",bC:3,t:64,Z:"break-word",v:"bold",i:"title1",w:"TRIVIA TITLE HERE",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#000",F:"center",b:51}}},{A:{a:[{p:4,h:"29"}]},o:"13",p:"600px",cA:false,Y:1024,Z:768,c:"#FFF",L:[],bY:1,d:1024,U:{},T:{kTimelineDefaultIdentifier:{j:{"0":[[874,700,874,700,396,700,396,700],[396,700,396,700,113,700,113,700]]},q:false,z:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"71"},{f:"c",y:0,z:2,i:"e",e:0,s:0,o:"74"},{f:"c",y:0,z:2,i:"e",e:0,s:0,o:"73"},{f:"c",y:0,z:2,i:"e",e:0,s:0,o:"61"},{f:"c",y:0,z:2,i:"e",e:0,s:0,o:"65"},{f:"c",y:0,z:2,i:"e",e:0,s:0,o:"68"},{f:"c",y:1,z:13,i:"e",e:1,s:1,o:"71"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"74"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"73"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"61"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"65"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"68"},{y:2.15,i:"e",s:1,z:0,o:"74",f:"c"},{y:2.15,i:"e",s:1,z:0,o:"73",f:"c"},{y:2.15,i:"e",s:1,z:0,o:"61",f:"c"},{y:2.15,i:"e",s:1,z:0,o:"65",f:"c"},{y:2.15,i:"e",s:1,z:0,o:"68",f:"c"},{f:"b",y:3,z:10,i:"c",e:0,s:760,o:"70"},{f:"b",y:3,z:10,i:"a",e:40,s:800,o:"63"},{f:"c",y:3,z:0.15,i:"w",e:"950\n",s:"<div style=\"text-align: left;\"><span style=\"color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif; font-size: 36px; font-weight: bold; text-align: center;\">1000</span></div>",o:"66"},{o:"66",y:3,z:10,i:"b",e:671,a:"0",f:"b",s:671},{o:"66",y:3,z:10,i:"a",e:64.5,a:"0",f:"b",s:825.5},{f:"c",y:3.15,z:0.15,i:"w",e:"900\n",s:"950\n",o:"66"},{f:"c",y:4,z:0.15,i:"w",e:"850\n",s:"900\n",o:"66"},{f:"c",y:4.15,z:0.15,i:"w",e:"800",s:"850\n",o:"66"},{f:"c",p:2,y:5,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:5,z:0.15,i:"w",e:"750",s:"800",o:"66"},{f:"c",y:5.15,z:0.15,i:"w",e:"700\n",s:"750",o:"66"},{f:"c",y:6,z:0.15,i:"w",e:"650",s:"700\n",o:"66"},{f:"c",y:6.15,z:0.15,i:"w",e:"600",s:"650",o:"66"},{f:"c",p:2,y:7,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:7,z:0.15,i:"w",e:"550",s:"600",o:"66"},{f:"c",y:7.15,z:0.15,i:"w",e:"500\n\n\n\n",s:"550",o:"66"},{f:"c",y:8,z:0.15,i:"w",e:"450\n\n\n\n\n",s:"500\n\n\n\n",o:"66"},{f:"c",y:8.15,z:0.15,i:"w",e:"400\n\n\n\n\n\n",s:"450\n\n\n\n\n",o:"66"},{f:"c",p:2,y:9,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:9,z:0.16,i:"w",e:"350\n\n\n\n\n\n\n",s:"400\n\n\n\n\n\n",o:"66"},{f:"c",y:9.16,z:0.14,i:"w",e:"300\n\n\n\n\n\n\n\n",s:"350\n\n\n\n\n\n\n",o:"66"},{f:"c",y:10,z:0.15,i:"w",e:"250\n\n\n\n\n\n\n\n\n",s:"300\n\n\n\n\n\n\n\n",o:"66"},{f:"c",y:10.15,z:0.15,i:"w",e:"200\n",s:"250\n\n\n\n\n\n\n\n\n",o:"66"},{f:"c",p:2,y:11,z:3.15,i:"ActionHandler",e:{a:[{p:4,h:"45"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:11,z:0.15,i:"w",e:"150\n",s:"200\n",o:"66"},{f:"c",y:11.15,z:0.15,i:"w",e:"100\n\n",s:"150\n",o:"66"},{f:"c",y:12,z:0.15,i:"w",e:"50\n\n\n",s:"100\n\n",o:"66"},{f:"c",y:12.15,z:0.15,i:"w",e:"0\n\n\n",s:"50\n\n\n",o:"66"},{y:13,i:"c",s:0,z:0,o:"70",f:"c"},{y:13,i:"b",s:671,z:0,o:"66",f:"c"},{y:13,i:"a",s:40,z:0,o:"63",f:"c"},{y:13,i:"a",s:65,z:0,o:"66",f:"c"},{y:13,i:"w",s:"0\n\n\n",z:0,o:"66",f:"c"},{f:"c",y:14,z:0.15,i:"e",e:0,s:1,o:"64"},{f:"c",y:14,z:0.15,i:"e",e:0,s:1,o:"71"},{f:"c",p:2,y:14.15,z:5.15,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"45"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:14.15,z:0.15,i:"e",e:0,s:0,o:"64"},{f:"c",y:14.15,z:0.15,i:"e",e:0,s:0,o:"71"},{f:"c",y:15,z:0.15,i:"e",e:1,s:0,o:"64"},{f:"c",y:15,z:0.15,i:"e",e:1,s:0,o:"71"},{y:15.15,i:"e",s:1,z:0,o:"64",f:"c"},{y:15.15,i:"e",s:1,z:0,o:"71",f:"c"},{f:"c",p:2,y:20,z:0,i:"ActionHandler",s:{a:[{p:4,h:"56"}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]}},bZ:180,O:["72","62","64","67","71","74","73","61","65","68","63","69","66","70"],n:"Untitled Layout","_":1,v:{"63":{c:120,d:70,I:"Solid",J:"Solid",K:"Solid",g:"#65ED34",L:"Solid",M:15,i:"countdownDisplay2",N:15,aI:50,A:"#FF83CC",x:"visible",j:"absolute",B:"#FF83CC",P:15,O:15,C:"#FF83CC",z:13,aJ:50,D:"#FF83CC",aK:50,k:"div",a:800,aL:50,b:650},"68":{aU:8,G:"#FF33E4",c:884,aV:8,r:"inline",d:34,e:0,s:"Arial,Helvetica,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerEDisplay",w:"ANSWER E, ANSWER E, ANSWER E, ANSWER E",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",dB:"button",z:10,aS:8,aT:8,a:100,b:590},"74":{aU:8,G:"#FF33E4",c:884,aV:8,r:"inline",d:34,e:0,s:"Arial,Helvetica,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerADisplay",w:"ANSWER A, ANSWER A, ANSWER A, ANSWER A",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",dB:"button",z:6,aS:8,aT:8,a:100,b:310},"64":{aU:8,G:"#FF33E4",c:230,aV:8,r:"inline",d:28,e:1,s:"Arial,Helvetica,Sans-Serif",t:24,Z:"break-word",v:"bold",i:"scoreDisplay",w:"SCORE: +00000",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:750,b:30},"70":{c:760,d:40,I:"None",J:"None",K:"None",g:"#FF2600",L:"None",M:0,i:"redSlider",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:11,k:"div",D:"#D8DDE4",a:110,b:680},"69":{c:820,d:40,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:15,i:"countdownDisplay1",N:15,aI:30,A:"#8542FF",x:"visible",j:"absolute",B:"#8542FF",O:15,P:15,C:"#8542FF",z:12,aJ:30,D:"#8542FF",aK:30,k:"div",a:100,aL:30,b:665},"65":{aU:8,G:"#FF33E4",c:884,aV:8,r:"inline",d:34,e:0,s:"Arial,Helvetica,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerDDisplay",w:"ANSWER D, ANSWER D, ANSWER D, ANSWER D",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",dB:"button",z:9,aS:8,aT:8,a:100,b:520},"71":{aU:8,G:"#FF33E4",c:821,aV:8,r:"inline",d:127,e:0,s:"Arial,Helvetica,Sans-Serif",t:28,Z:"break-word",v:"bold",i:"questionDisplay",w:"QUESTION QUESTION QUESTION QUESTION QUESTION<br> \nQUESTION QUESTION QUESTION QUESTION QUESTION<br> \nQUESTION QUESTION QUESTION QUESTION QUESTION ",A:"#FF33E4",x:"visible",j:"absolute",B:"#FF33E4",y:"preserve",k:"div",C:"#FF33E4",z:5,aS:8,D:"#FF33E4",aT:8,a:131,b:133},"61":{aU:8,G:"#FF33E4",c:884,aV:8,r:"inline",d:34,e:0,s:"Arial,Helvetica,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerCDisplay",w:"ANSWER C, ANSWER C, ANSWER C, ANSWER C",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",dB:"button",z:8,aS:8,aT:8,a:100,b:450},"66":{b:671,aU:8,G:"#FFF",c:81,aV:8,r:"inline",d:42,s:"Arial,Helvetica,Sans-Serif",t:36,Z:"break-word",v:"bold",i:"countdownText",w:"<div style=\"text-align: left;\"><span style=\"color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif; font-size: 36px; font-weight: bold; text-align: center;\">1000</span></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:14,aS:8,tX:0.5,aT:8,a:826,F:"center",tY:0.5},"72":{h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:1,d:768},"62":{aU:8,G:"#FF33E4",c:284,aV:8,r:"inline",d:29,s:"Arial,Helvetica,Sans-Serif",t:24,Z:"break-word",v:"bold",i:"infoDisplay",w:"QUESTION XX OF YY",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,b:30},"67":{c:830,d:160,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:10,i:"border1",N:10,aI:10,A:"#FF33E4",x:"visible",j:"absolute",B:"#FF33E4",O:10,P:10,C:"#FF33E4",z:4,aJ:10,D:"#FF33E4",aK:10,k:"div",a:100,aL:10,b:100},"73":{aU:8,G:"#FF33E4",c:884,aV:8,r:"inline",d:34,e:0,s:"Arial,Helvetica,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerBDisplay",w:"ANSWER B, ANSWER B, ANSWER B, ANSWER B",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"}]},k:"div",y:"preserve",dB:"button",z:7,aS:8,aT:8,a:100,b:380}}},{A:{a:[{p:4,h:"55"}]},o:"48",p:"600px",cA:false,Y:1024,Z:768,c:"#FFF",L:[],bY:1,d:1024,U:{},T:{"54_hover":{q:false,z:1,i:"54_hover",n:"54_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#0E0",s:"#8542FF",o:"75"},{f:"c",y:0,z:1,i:"B",e:"#0E0",s:"#8542FF",o:"75"},{f:"c",y:0,z:1,i:"C",e:"#0E0",s:"#8542FF",o:"75"},{f:"c",y:0,z:1,i:"D",e:"#0E0",s:"#8542FF",o:"75"},{f:"c",y:0,z:1,i:"A",e:"#0E0",s:"#8542FF",o:"75"},{y:1,i:"G",s:"#0E0",z:0,o:"75",f:"c"},{y:1,i:"B",s:"#0E0",z:0,o:"75",f:"c"},{y:1,i:"C",s:"#0E0",z:0,o:"75",f:"c"},{y:1,i:"D",s:"#0E0",z:0,o:"75",f:"c"},{y:1,i:"A",s:"#0E0",z:0,o:"75",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["78","76","77","75"],n:"Untitled Layout","_":2,v:{"75":{b:536,z:4,K:"Solid",c:336,L:"Solid",d:86,aS:6,M:15,bD:"none",N:15,aT:6,dB:"button",O:15,aU:6,P:15,aV:6,j:"absolute",k:"div",aI:40,aJ:40,aK:40,aL:40,A:"#8542FF",Y:80,B:"#8542FF",aM:"54_hover",r:"inline",C:"#8542FF",Z:"break-word",s:"'Arial Black',Gadget,Sans-Serif",D:"#8542FF",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},G:"#8542FF",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:323,y:"preserve",J:"Solid"},"78":{aU:8,G:"#8542FF",c:1008,aV:8,r:"inline",d:184,s:"'Arial Black',Gadget,Sans-Serif",t:96,Z:"break-word",w:"SUMMARY",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,F:"center",b:0},"77":{aU:8,G:"#8542FF",c:1008,aV:8,r:"inline",d:334,s:"'Arial Black',Gadget,Sans-Serif",t:60,Z:"break-word",i:"info1",w:"You scored XXXX points<br>\nout of a possible XXXXXX<br>\nplacing you at XXX percent.\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:200},"76":{h:"49",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,k:"div",b:0,d:770,c:1024}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
