(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,n){e.exports=n(34)},27:function(e,a,n){},28:function(e,a,n){},34:function(e,a,n){"use strict";n.r(a);n(22);var t=n(0),s=n.n(t),o=n(18),i=n.n(o),c=(n(27),n(28),n(11)),d=n(8),r=function(){return s.a.createElement("section",{style:{backgroundColor:"rgb(53, 173, 121)"}},s.a.createElement("div",null,s.a.createElement("img",{src:window.location.origin+"/images/futsal-banner.jpg",width:"100%"})))},m=n(3),l=n.n(m),_=n(6),f=n(7);var g=function(){var e=Object(t.useState)({games:[],teams:{}}),a=Object(f.a)(e,2),n=a[0],o=a[1];Object(t.useEffect)(function(){!function(){var e=Object(_.a)(l.a.mark(function e(){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=p.data,n={TeamA:"TeamA",TeamB:"TeamB"},a&&a.length>0&&a.forEach(function(e){n[e.id]=e}),o({games:b.data,teams:n});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var i="TeamA",c="TeamB",d="https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png",r="https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png";return s.a.createElement(s.a.Fragment,null,s.a.createElement("article",{className:"heading-component"},s.a.createElement("div",{className:"heading-component-inner"},s.a.createElement("h5",{className:"heading-component-title"},"Matches"))),n.games.map(function(e){var a=e.teams[0]||"TeamA",t=e.teams[1]||"TeamB";return a&&(i=n.teams[a].name,d=n.teams[a].image),t&&(c=n.teams[t].name||"Winner of Eliminator",r=n.teams[t].image||"https://futsal-2019.s3.us-east-2.amazonaws.com/default_team.png"),0===e.teams.length&&(d="https://futsal-2019.s3.us-east-2.amazonaws.com/default_team.png",r="https://futsal-2019.s3.us-east-2.amazonaws.com/default_team.png","Eliminator"===e.type&&(i="League Table 2nd",c="League Table 3rd"),"Final"===e.type&&(i="League Table 1st",c="Winner of Eliminator")),s.a.createElement("article",{className:"game-result game-result-override-box",key:e.id},s.a.createElement("div",{className:"game-info"},s.a.createElement("p",{className:"game-info-subtitle"},"Group Stage"===e.type?"":e.type),s.a.createElement("div",{className:"game-info-main"},s.a.createElement("div",{className:"game-info-team game-info-team-first"},s.a.createElement("figure",{className:"d-flex align-items-center"},s.a.createElement("img",{src:d,alt:""})),s.a.createElement("div",{className:"game-result-team-name"},i)),function(e){return"played"===e.status?s.a.createElement("div",{className:"game-info-middle game-info-middle-vertical"},s.a.createElement("time",{className:"time-big"},s.a.createElement("span",{className:"heading-3"},e.stats.result[e.teams[0]]," : ",e.stats.result[e.teams[1]])),s.a.createElement("div",{className:"group-sm font-weight-lighter text-capitalize"},s.a.createElement("time",null,e.date_time[0]+", "+e.date_time[1]+" "+e.date_time[2]+" "+e.date_time[3]))):s.a.createElement("div",{className:"game-info-middle game-info-middle-vertical"},s.a.createElement("time",{className:"time-big"},s.a.createElement("span",{className:"heading-3"},e.date_time[0]+", "+e.date_time[1]),e.date_time[2]+" "+e.date_time[3]),s.a.createElement("div",{className:"game-result-divider-wrap"},s.a.createElement("span",{className:"game-info-team-divider"},"VS")),s.a.createElement("div",{className:"group-sm"},s.a.createElement("time",null," ",e.time)))}(e),s.a.createElement("div",{className:"game-info-team game-info-team-second"},s.a.createElement("figure",{className:"d-flex align-items-center"},s.a.createElement("img",{src:r,alt:""})),s.a.createElement("div",{className:"game-result-team-name"},c))),function(e,a){var n=e&&e.goals;if(n&&n.length>0&&n[0].id){n=n.sort(function(e,a){return parseInt(e.time)-parseInt(a.time)});var t=[],o=[];n.map(function(e){e.for_team===a[0]?t.push(e):e.for_team===a[1]&&o.push(e)});var i=t.map(function(e){var a="";e.own_goal&&(a=", Own Goal");var n="".concat(e.scored_by.name," (").concat(e.time,"'").concat(a,")");return n}),c=o.map(function(e){var a="";e.own_goal&&(a=", Own Goal");var n="".concat(e.scored_by.name," (").concat(e.time,"'").concat(a,")");return n});return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("small",{className:"text-center"},i.join(", "))),s.a.createElement("div",{className:"col",style:{width:"20%",display:"inline-block",textAlign:"center"}},s.a.createElement("img",{src:"//ssl.gstatic.com/onebox/sports/soccer_timeline/soccer-ball-retina.png",style:{width:"24px",height:"24px"}})),s.a.createElement("div",{className:"col"},s.a.createElement("small",{className:"text-center"}," ",c.join(", "))))}return null}(e.stats,e.teams)))}))},p={success:!0,code:200,data:[{name:"Atletico De Dama",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_dama.png",id:"dama"},{name:"FC Vinod",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_vinod.png",id:"vinod"},{name:"MK United",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_mk.png",id:"mk"},{name:"Real Vincent FC",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_vincent.png",id:"vincent"}],error:null},b={success:!0,code:200,data:[{date:"Friday, August 30",teams:["vinod","mk"],type:"Final",game_number:{low:16,high:0},winner:"vinod",date_time:["Fri","30","AUG","2019","8","00","AM"],stats:{winner:"vinod",result:{vinod:1,mk:0},goals:[{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"a3eb98a0-b333-4fbe-b991-f90cdb8c8ff9",time:"16"}],yellow_cards:[],red_cards:[]},name:"League Table 1st vs Winner of Eliminator",time:"8:00 AM",id:"match_14",game_day:{low:9,high:0},order:1,status:"played",desc:""},{date:"Thursday, August 29",teams:["vincent","mk"],type:"Eliminator",game_number:{low:15,high:0},winner:"mk",date_time:["Thu","29","AUG","2019","8","00","AM"],stats:{winner:"mk",result:{vincent:0,mk:2},goals:[{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},id:"fbb5a897-ad26-4403-827f-595efa1f8ac0",time:"15"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},id:"c56abc65-c0b1-4375-b8c3-0131520dd523",time:"7"}],yellow_cards:[],red_cards:[]},name:"League Table 2nd vs League Table 3rd",time:"8:00 AM",id:"match_13",game_day:{low:8,high:0},order:1,status:"played",desc:""},{date:"Tuesday, August 27",teams:["vincent","dama"],type:"Group Stage",game_number:{low:14,high:0},winner:"vincent",date_time:["Tue","27","AUG","2019","8","30","AM"],stats:{winner:"vincent",result:{vincent:5,dama:0},goals:[{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Rijo",id:"8a6b5902-1e97-4bb5-bdfa-57416172dbce"},for_team:"vincent",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Muneer",id:"c95b144f-90c5-4d96-985f-20620ff89729"},id:"e336b5f1-ab1d-4bfe-bb69-21a4e63fb53e",time:"12"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Muneer",id:"c95b144f-90c5-4d96-985f-20620ff89729"},for_team:"vincent",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Sebulu",id:"e0c43018-06b4-43eb-b5a8-af56b1919644"},id:"94d3ff98-daf3-403a-8387-3a7ab76dd71a",time:"9"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Pascal",id:"8b4c1513-9af9-4f07-8b9b-81e89b005ca5"},for_team:"vincent",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Rijo",id:"8a6b5902-1e97-4bb5-bdfa-57416172dbce"},id:"a79e1a7b-bca2-4fb0-8a43-8e95565cc396",time:"15"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Rijo",id:"8a6b5902-1e97-4bb5-bdfa-57416172dbce"},for_team:"vincent",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Muneer",id:"c95b144f-90c5-4d96-985f-20620ff89729"},id:"849a67c5-59b8-42f6-8f82-e45f7e4ba16b",time:"4"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Sebulu",id:"e0c43018-06b4-43eb-b5a8-af56b1919644"},for_team:"vincent",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Rijo",id:"8a6b5902-1e97-4bb5-bdfa-57416172dbce"},id:"51a27e5f-1c72-495a-b1e7-7f3b39bfea07",time:"18"}],yellow_cards:[],red_cards:[]},name:"Real Vincent vs Atletico De Dama",time:"8:30 AM",id:"match_8",game_day:7.5,order:2,status:"played",desc:""},{date:"Tuesday, August 27",teams:["vinod","mk"],type:"Group Stage",game_number:{low:13,high:0},winner:"vinod",date_time:["Tue","27","AUG","2019","8","00","AM"],stats:{winner:"vinod",result:{vinod:4,mk:0},goals:[{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"86848cd1-cf8c-431b-bf86-9c4e6e891c01",time:"15"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Daniel",id:"dab15731-9c04-4099-8f64-1fa0debedd3c"},for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"0b3a7ca2-7df6-4f7a-b23d-bbf9aa805e30",time:"5"},{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"95a02ded-c9fc-4b10-a03f-aa839be57c94",time:"3"},{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"26e356af-f9a9-4b47-90ea-bbb30514c95f",time:"8"}],yellow_cards:[],red_cards:[]},name:"FC Vinod vs MK United",id:"match_7",time:"8:00 AM",game_day:7.5,status:"played",order:1,desc:""},{date:"Friday, August 23",teams:["dama","mk"],type:"Group Stage",game_number:12,winner:"mk",date_time:["Fri","23","AUG","2019","8","00","AM"],stats:{winner:"mk",result:{dama:1,mk:7},goals:[{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Shamnad",id:"661271ff-db42-4c85-973d-a78b4eac4ddf"},id:"f1500965-fee5-41f5-b2fc-aa7b36f5232b",time:"19"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Jaison",id:"9cc47fae-3741-4afd-9565-99929ed3c407"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},id:"a4ef0da9-160b-4e9a-a578-ea90ff9069ab",time:"8"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Varun",id:"70672a98-5979-43a9-b516-860078e0ab0a"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},id:"a5cd9cec-3012-43b9-b529-6447d6ae56ff",time:"18"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},id:"3778c675-b2e5-4d12-8076-a65af46c0647",time:"2"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Varun",id:"70672a98-5979-43a9-b516-860078e0ab0a"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},id:"bdedbbc4-ec17-4c10-af5a-587ed2bc7af7",time:"4"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Jeffin",id:"a00a8be3-223a-4726-81b7-d2e445a6db9a"},id:"fd1dd24e-3fc4-4eaf-a178-7977c7500fe0",time:"14"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mithun",id:"30527413-f420-4256-96d6-fa1b3954053e"},for_team:"dama",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Semin",id:"63979cca-3aca-480e-9747-24a2341f2cc6"},id:"3fed3de3-2785-49b7-a180-aeaaecba30be",time:"17"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},id:"3e612f6e-c5f7-4bcc-b5e5-7a329d264c8a",time:"6"}],yellow_cards:[],red_cards:[]},name:"Atletico De Dama vs MK United",time:"8:30 AM",id:"match_12",game_day:6,order:2,status:"played",desc:""},{date:"Friday, August 23",teams:["vinod","vincent"],game_number:11,type:"Group Stage",winner:"tie",date_time:["Fri","23","AUG","2019","8","00","AM"],stats:{winner:"tie",result:{vinod:0,vincent:0},goals:[{own_goal:null,assisted_by:null,for_team:null,scored_by:null,id:null,time:null}],yellow_cards:[],red_cards:[]},name:"FC Vinod vs Real Vincent",id:"match_11",time:"8:00 AM",game_day:6,status:"played",order:1,desc:""},{date:"Tuesday, August 20",teams:["mk","vincent"],game_number:10,type:"Group Stage",winner:"vincent",date_time:["Tue","20","AUG","2019","8","30","AM"],stats:{winner:"vincent",result:{mk:0,vincent:1},goals:[{own_goal:!1,assisted_by:null,for_team:"vincent",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Rijo",id:"8a6b5902-1e97-4bb5-bdfa-57416172dbce"},id:"3539a475-8b20-46de-946d-c06853335311",time:"15"}],yellow_cards:["4fa088eb-d464-447f-8e58-328f0dcb49f9","661271ff-db42-4c85-973d-a78b4eac4ddf"],red_cards:[]},name:"MK United vs Real Vincent",id:"match_10",time:"8:30 AM",game_day:5,status:"played",order:2,desc:""},{date:"Tuesday, August 20",teams:["dama","vinod"],type:"Group Stage",game_number:9,winner:"vinod",date_time:["Tue","20","AUG","2019","8","00","AM"],stats:{winner:"vinod",result:{dama:0,vinod:1},goals:[{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Daniel",id:"dab15731-9c04-4099-8f64-1fa0debedd3c"},id:"58199c21-83a6-461c-b238-2fa4424a3b9e",time:"18"}],yellow_cards:[],red_cards:[]},name:"Atletico De Dama vs FC Vinod",time:"8:00 AM",id:"match_9",game_day:5,order:1,status:"played",desc:""},{date:"Thursday, August 8",teams:["dama","vinod"],type:"Group Stage",game_number:6,winner:"vinod",date_time:["Thu","8","AUG","2019","8","30","AM"],stats:{winner:"vinod",result:{dama:0,vinod:3},goals:[{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"6393347d-5b73-4fa5-a82a-1814fc6e44ae",time:"6"},{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"53a5d6ed-7164-4f0d-bffc-d68a908f7850",time:"19"},{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"8a5e11b4-3280-41ce-ae83-99f19103bf63",time:"17"}],yellow_cards:[],red_cards:[]},name:"Atletico De Dama vs FC Vinod",time:"8:30 AM",id:"match_6",game_day:3,order:2,status:"played",desc:""},{date:"Thursday, August 8",teams:["mk","vincent"],game_number:5,type:"Group Stage",winner:"mk",date_time:["Thu","8","AUG","2019","8","00","AM"],stats:{winner:"mk",result:{mk:1,vincent:0},goals:[{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Varun",id:"70672a98-5979-43a9-b516-860078e0ab0a"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},id:"5e0fb3af-a9b7-4642-a097-d22c7fb280a2",time:"6"}],yellow_cards:["7686381d-e9de-4bb1-8221-38a0144c2235","8b4c1513-9af9-4f07-8b9b-81e89b005ca5"],red_cards:[]},name:"MK United vs Real Vincent",id:"match_5",time:"8:00 AM",game_day:3,status:"played",order:1,desc:""},{date:"Tuesday, August 6",teams:["vinod","vincent"],game_number:4,type:"Group Stage",winner:"tie",date_time:["Tue","6","AUG","2019","8","30","AM"],stats:{winner:"tie",result:{vinod:0,vincent:0},goals:[{own_goal:null,assisted_by:null,for_team:null,scored_by:null,id:null,time:null}],yellow_cards:[],red_cards:[]},name:"FC Vinod vs Real Vincent",id:"match_4",time:"8:30 AM",game_day:2,status:"played",order:2,desc:""},{date:"Tuesday, August 6",teams:["mk","dama"],type:"Group Stage",game_number:3,winner:"tie",date_time:["Tue","6","AUG","2019","8","00","AM"],stats:{winner:"tie",result:{mk:1,dama:1},goals:[{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Jaison",id:"9cc47fae-3741-4afd-9565-99929ed3c407"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},id:"faed1050-708b-41c1-a0b0-e0dde406e073",time:"17"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Roopak",id:"c16a8f8e-40b8-4a8d-abdc-8e3f8ef77fb4"},for_team:"dama",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Jithu",id:"a4de9f47-e6a4-4e8e-94e7-864219aa20d8"},id:"1a853fff-56df-4f6f-95bd-3ed79a3b2e5a",time:"19"}],yellow_cards:["4fa088eb-d464-447f-8e58-328f0dcb49f9"],red_cards:[]},name:"MK United vs Atletico De Dama",time:"8:00 AM",id:"match_3",game_day:2,order:1,status:"played",desc:""},{date:"Thursday, August 1",teams:["mk","vinod"],game_number:2,type:"Group Stage",winner:"vinod",date_time:["Thu","1","AUG","2019","8","30","AM"],stats:{winner:"vinod",result:{mk:1,vinod:4},goals:[{own_goal:!1,assisted_by:null,for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"ca8bf757-c6e7-4a78-9f90-173296480ddb",time:"7"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Daniel",id:"dab15731-9c04-4099-8f64-1fa0debedd3c"},for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"1c82f306-afcb-4894-a096-79852fcf28ce",time:"15"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Daniel",id:"dab15731-9c04-4099-8f64-1fa0debedd3c"},id:"4e329b2f-057e-4132-af40-361be1f40849",time:"18"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Daniel",id:"dab15731-9c04-4099-8f64-1fa0debedd3c"},for_team:"vinod",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Mansoor",id:"039e851e-e05b-4bac-acf5-4687c374e9de"},id:"e12011d9-1107-45bf-be7c-1fdd73c0e539",time:"10"},{own_goal:!1,assisted_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Azhar",id:"7686381d-e9de-4bb1-8221-38a0144c2235"},for_team:"mk",scored_by:{image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",name:"Appu Milon",id:"7fa67438-cea7-407f-8274-3488151ea597"},id:"cc8a3f39-3c5d-485a-a10d-d1694caac2e5",time:"14"}],yellow_cards:[],red_cards:[]},name:"MK United vs FC Vinod",id:"match_2",time:"8:30 AM",game_day:1,status:"played",order:2,desc:""},{date:"Thursday, August 1",teams:["dama","vincent"],type:"Group Stage",game_number:1,winner:"tie",date_time:["Thu","1","AUG","2019","8","00","AM"],stats:{winner:"tie",result:{dama:0,vincent:0},goals:[{own_goal:null,assisted_by:null,for_team:null,scored_by:null,id:null,time:null}],yellow_cards:[],red_cards:[]},name:"Atletico De Dama vs Real Vincent",time:"8:00 AM",id:"match_1",game_day:1,order:1,status:"played",desc:""}],error:null},u=function(){var e=Object(t.useState)([]),a=Object(f.a)(e,2),n=a[0],o=a[1];return Object(t.useEffect)(function(){!function(){var e=Object(_.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o(y.data);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),s.a.createElement("div",{className:"table-custom-responsive"},s.a.createElement("table",{className:"table-custom table-standings table-classic"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"2"},"Team Position"),s.a.createElement("th",null,"P"),s.a.createElement("th",null,"W"),s.a.createElement("th",null,"L"),s.a.createElement("th",null,"PTS"))),s.a.createElement("tbody",null,n.map(function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("span",null,a+1)),s.a.createElement("td",{className:"team-inline"},s.a.createElement("div",{className:"team-figure"},s.a.createElement("img",{src:e.image,alt:e.name,width:"31",height:"41"})),s.a.createElement("div",{className:"team-title"},s.a.createElement("div",{className:"team-name"},e.name))),s.a.createElement("td",null,e.played),s.a.createElement("td",null,e.win),s.a.createElement("td",null,e.loss),s.a.createElement("td",null,e.points))}))))},y={success:!0,code:200,data:[{name:"FC Vinod",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_vinod.png",id:"vinod",played:6,win:4,tie:2,loss:0,points:14,goal_scored:12,goal_conceded:1,gd:11},{name:"Real Vincent FC",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_vincent.png",id:"vincent",played:6,win:2,tie:3,loss:1,points:9,goal_scored:6,goal_conceded:1,gd:5},{name:"MK United",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_mk.png",id:"mk",played:6,win:2,tie:1,loss:3,points:7,goal_scored:10,goal_conceded:11,gd:-1},{name:"Atletico De Dama",image:"https://futsal-2019.s3.us-east-2.amazonaws.com/logo/team_dama.png",id:"dama",played:6,win:0,tie:2,loss:4,points:2,goal_scored:2,goal_conceded:17,gd:-15}],error:null},h=function(){var e=Object(t.useState)([]),a=Object(f.a)(e,2),n=a[0],o=a[1];return Object(t.useEffect)(function(){!function(){var e=Object(_.a)(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:200===(a=v).code&&o(a.data);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),s.a.createElement("div",{className:"table-custom-responsive",hidden:0===n.length},s.a.createElement("table",{className:"table-custom table-standings table-classNameic"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"2"},"Top Players"),s.a.createElement("th",null,"Goal"),s.a.createElement("th",null,"Assist"))),s.a.createElement("tbody",null,n.map(function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("span",null,a+1)),s.a.createElement("td",{className:"team-inline"},s.a.createElement("div",{className:"team-figure"},s.a.createElement("img",{src:e.image,alt:e.name,width:"31",height:"41"})),s.a.createElement("div",{className:"team-title"},s.a.createElement("div",{className:"team-name"},e.name),s.a.createElement("div",{className:"team-country"}))),s.a.createElement("td",null,e.goal_scored),s.a.createElement("td",null,e.goal_assisted))}))))},v={success:!0,code:200,data:[{name:"Mansoor",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"Captain",id:"039e851e-e05b-4bac-acf5-4687c374e9de",goal_scored:11,goal_assisted:1,pts:34},{name:"Appu Milon",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"Captain",id:"7fa67438-cea7-407f-8274-3488151ea597",goal_scored:6,goal_assisted:3,pts:21},{name:"Azhar",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"Vice Captain",id:"7686381d-e9de-4bb1-8221-38a0144c2235",goal_scored:4,goal_assisted:4,pts:16},{name:"Rijo",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"Vice  Captain",id:"8a6b5902-1e97-4bb5-bdfa-57416172dbce",goal_scored:3,goal_assisted:2,pts:11},{name:"Daniel",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"player",id:"dab15731-9c04-4099-8f64-1fa0debedd3c",goal_scored:2,goal_assisted:3,pts:9},{name:"Muneer",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"player",id:"c95b144f-90c5-4d96-985f-20620ff89729",goal_scored:2,goal_assisted:1,pts:7},{name:"Sebulu",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"Captain",id:"e0c43018-06b4-43eb-b5a8-af56b1919644",goal_scored:1,goal_assisted:1,pts:4},{name:"Jeffin",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"player",id:"a00a8be3-223a-4726-81b7-d2e445a6db9a",goal_scored:1,goal_assisted:0,pts:3},{name:"Jithu",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"player",id:"a4de9f47-e6a4-4e8e-94e7-864219aa20d8",goal_scored:1,goal_assisted:0,pts:3},{name:"Semin",image:"https://cdn3.iconfinder.com/data/icons/professions-14/60/Professions_Flat_053_-_Soccer_Player-512.png",role:"Vice Captain",id:"63979cca-3aca-480e-9747-24a2341f2cc6",goal_scored:1,goal_assisted:0,pts:3}],error:null},P=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-xl-8"},s.a.createElement(g,null)),s.a.createElement("div",{className:"col-xl-4"},s.a.createElement("article",{className:"heading-component"},s.a.createElement("div",{className:"heading-component-inner"},s.a.createElement("h5",{className:"heading-component-title"},"Standings"))),s.a.createElement(u,null),s.a.createElement(h,null)))};var w=function(){return s.a.createElement(c.a,null,s.a.createElement(r,null),s.a.createElement("section",{className:"section section-sm"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row-50"},s.a.createElement(d.a,{path:"/",component:P,exact:!0})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.9fea83a7.chunk.js.map