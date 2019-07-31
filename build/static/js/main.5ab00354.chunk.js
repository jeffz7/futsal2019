(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),l=t.n(n),m=t(18),c=t.n(m),r=(t(27),t(28),t(11)),s=t(8),i=function(){return l.a.createElement("section",{className:"section parallax-container breadcrumbs-wrap",style:{backgroundColor:"rgb(53, 173, 121)"}},l.a.createElement("div",{className:"parallax-content breadcrumbs-custom context-dark",style:{paddingTop:50,paddingBottom:50}},l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"breadcrumbs-custom-title font-weight-bold"},"SUYATI FUTSAL 2019"))))},o=t(3),u=t.n(o),d=t(6),E=t(7);var g=function(){var e=Object(n.useState)({games:[],teams:{}}),a=Object(E.a)(e,2),t=a[0],m=a[1];Object(n.useEffect)(function(){!function(){var e=Object(d.a)(u.a.mark(function e(){var a,t,n,l,c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/teams");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,n=t.data,l={TeamA:"TeamA",TeamB:"TeamB"},n&&n.length>0&&n.forEach(function(e){l[e.id]=e}),e.next=11,fetch("/api/games");case 11:return c=e.sent,e.next=14,c.json();case 14:r=e.sent,m({games:r.data,teams:l});case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var c="TeamA",r="TeamB",s="https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png",i="https://images.onefootball.com/icons/leagueColoredCompetition/128/10.png";return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"heading-component"},l.a.createElement("div",{className:"heading-component-inner"},l.a.createElement("h5",{className:"heading-component-title"},"Matches"))),t.games.map(function(e){var a=e.teams[0]||"TeamA",n=e.teams[1]||"TeamB";return a&&(c=t.teams[a].name,s=t.teams[a].image),n&&(r=t.teams[n].name,i=t.teams[n].image),0===e.teams.length&&(s="https://futsal-2019.s3.us-east-2.amazonaws.com/default_team.png",i="https://futsal-2019.s3.us-east-2.amazonaws.com/default_team.png","Eliminator"===e.type&&(c="League Table 2nd",r="League Table 3rd"),"Final"===e.type&&(c="League Table 1st",r="Winner of Eliminator")),l.a.createElement("article",{className:"game-result game-result-override-box",key:e.id},l.a.createElement("div",{className:"game-info"},l.a.createElement("p",{className:"game-info-subtitle"},"Group Stage"===e.type?"":e.type),l.a.createElement("div",{className:"game-info-main"},l.a.createElement("div",{className:"game-info-team game-info-team-first"},l.a.createElement("figure",{className:"d-flex align-items-center"},l.a.createElement("img",{src:s,alt:""})),l.a.createElement("div",{className:"game-result-team-name"},c)),function(e){return"played"===e.status?l.a.createElement("div",{className:"game-info-middle game-info-middle-vertical"},l.a.createElement("time",{className:"time-big"},l.a.createElement("span",{className:"heading-3"},e.stats.result[e.teams[0]]," : ",e.stats.result[e.teams[1]])),l.a.createElement("div",{className:"group-sm font-weight-lighter text-capitalize"},l.a.createElement("time",null,e.date_time[0]+", "+e.date_time[1]+" "+e.date_time[2]+" "+e.date_time[3]))):l.a.createElement("div",{className:"game-info-middle game-info-middle-vertical"},l.a.createElement("time",{className:"time-big"},l.a.createElement("span",{className:"heading-3"},e.date_time[0]+", "+e.date_time[1]),e.date_time[2]+" "+e.date_time[3]),l.a.createElement("div",{className:"game-result-divider-wrap"},l.a.createElement("span",{className:"game-info-team-divider"},"VS")),l.a.createElement("div",{className:"group-sm"},l.a.createElement("time",null," ",e.time)))}(e),l.a.createElement("div",{className:"game-info-team game-info-team-second"},l.a.createElement("figure",{className:"d-flex align-items-center"},l.a.createElement("img",{src:i,alt:""})),l.a.createElement("div",{className:"game-result-team-name"},r))),function(e){var a=e&&e.goals;if(a){var t=(a=a.sort(function(e,a){return parseInt(e.time)-parseInt(a.time)})).map(function(e){var a="";e.own_goal&&(a=", Own Goal");var t="".concat(e.scored_by.name," (").concat(e.time,"'").concat(a,")");return t});return l.a.createElement("div",{className:"font-weight-lighter text-capitalize",style:{fontSize:"smaller  "}},t.join(", "))}return null}(e.stats)))}))},p=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],m=a[1];return Object(n.useEffect)(function(){!function(){var e=Object(d.a)(u.a.mark(function e(){var a,t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/teams/top");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,m(t.data);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),l.a.createElement("div",{className:"table-custom-responsive"},l.a.createElement("table",{className:"table-custom table-standings table-classic"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},"Team Position"),l.a.createElement("th",null,"P"),l.a.createElement("th",null,"W"),l.a.createElement("th",null,"L"),l.a.createElement("th",null,"PTS"))),l.a.createElement("tbody",null,t.map(function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("span",null,a+1)),l.a.createElement("td",{className:"team-inline"},l.a.createElement("div",{className:"team-figure"},l.a.createElement("img",{src:e.image,alt:e.name,width:"31",height:"41"})),l.a.createElement("div",{className:"team-title"},l.a.createElement("div",{className:"team-name"},e.name))),l.a.createElement("td",null,e.played),l.a.createElement("td",null,e.win),l.a.createElement("td",null,e.loss),l.a.createElement("td",null,e.points))}))))},f=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],m=a[1];return Object(n.useEffect)(function(){!function(){var e=Object(d.a)(u.a.mark(function e(){var a,t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/players/top");case 2:return a=e.sent,e.next=5,a.json();case 5:200===(t=e.sent).code&&m(t.data);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),l.a.createElement("div",{className:"table-custom-responsive",hidden:0===t.length},l.a.createElement("table",{className:"table-custom table-standings table-classNameic"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},"Top Players"),l.a.createElement("th",null,"G"),l.a.createElement("th",null,"A"),l.a.createElement("th",null,"PTS"))),l.a.createElement("tbody",null,t.map(function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("span",null,a+1)),l.a.createElement("td",{className:"team-inline"},l.a.createElement("div",{className:"team-figure"},l.a.createElement("img",{src:e.image,alt:e.name,width:"31",height:"41"})),l.a.createElement("div",{className:"team-title"},l.a.createElement("div",{className:"team-name"},e.name),l.a.createElement("div",{className:"team-country"}))),l.a.createElement("td",null,e.goal_scored),l.a.createElement("td",null,e.goal_assisted),l.a.createElement("td",null,e.pts))}))))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-xl-8"},l.a.createElement(g,null)),l.a.createElement("div",{className:"col-xl-4"},l.a.createElement("article",{className:"heading-component"},l.a.createElement("div",{className:"heading-component-inner"},l.a.createElement("h5",{className:"heading-component-title"},"Standings"))),l.a.createElement(p,null),l.a.createElement(f,null)))};var v=function(){return l.a.createElement(r.a,null,l.a.createElement(i,null),l.a.createElement("section",{className:"section section-sm"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-50"},l.a.createElement(s.a,{path:"/",component:h,exact:!0})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.5ab00354.chunk.js.map