(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7+Rw":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",function(){return l}),a.d(t,"default",function(){return b});var r=a("pneb"),n=a("wk2l"),i=a("ERkP"),o=a.n(i),s=a("bBUn"),l=(o.a.createElement,{name:"Drawer",abstractURL:"https://share.goabstract.com/523506be-a121-4456-ae0e-97c0770413af",size:""}),c={meta:l},d="wrapper";function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.a)(d,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",{className:"lead"},"Use Drawers to let users perform single step tasks which may include optional informational drill-down views."),Object(s.a)("p",null,Object(s.a)("img",Object(r.a)({parentName:"p"},{src:"/static/assets/img/Drawer_sample.png",alt:"Sample Drawer"}))),Object(s.a)("h2",{id:"platforms"},"Platforms"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"#Web"}),"Web")," ",Object(s.a)("span",{class:"badge badge-danger"},"Ready for development"))),Object(s.a)("h2",{id:"best-practices"},"Best practices"),Object(s.a)("h3",{class:"text-success"},"Do"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"Use a drawer to let the user perform a single step task such as add or edit an entity. The task is performed in the context from where it is triggered"),Object(s.a)("li",{parentName:"ul"},"Use a drawer to show extended and multimedia information without taking the user away from the context where it is relevant"),Object(s.a)("li",{parentName:"ul"},"Use a ",Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"#Default"}),"Default")," drawer to display information which does not include user actions other than dismissing the drawer"),Object(s.a)("li",{parentName:"ul"},"Use a default drawer with inline actions when you want the user to scroll through the whole content before reaching the main action"),Object(s.a)("li",{parentName:"ul"},"Use a drawer with ",Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"#FixedFooter"}),"fixed footer")," when the user is not required to scroll through all the contents before accessing the main action"),Object(s.a)("li",{parentName:"ul"},"Use a drawer in ",Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"#DrillDown"}),"drill down")," view to provide extra information. The drill down view is triggered from any of the previous cases. The user can navigate back to parent.")),Object(s.a)("h3",{class:"text-danger"},"Don't"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"Do not use a drawer if your task involves more than one step. Use a ",Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"Flow"}),"Flow")," instead"),Object(s.a)("li",{parentName:"ul"},"Do not use a drawer to ask for confirmation. Use a ",Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"Modal"}),"Modal")," confirmation dialog instead.")),Object(s.a)("h2",{id:"types"},"Types"),Object(s.a)("h3",null,Object(s.a)("a",{id:"Default"}),"Default"),"![Default drawer](/static/assets/img/Type_Default.png)",Object(s.a)("h4",{id:"header"},"Header"),Object(s.a)("ol",null,Object(s.a)("li",{parentName:"ol"},Object(s.a)("p",{parentName:"li"},"Close/Cancel button")),Object(s.a)("li",{parentName:"ol"},Object(s.a)("p",{parentName:"li"},"View title"))),Object(s.a)("h4",{id:"content-area"},"Content area"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("p",{parentName:"li"},Object(s.a)("a",Object(r.a)({parentName:"p"},{href:"#Scrolling"}),"Scrolls")," beneath header.")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("p",{parentName:"li"},"Respect the provided paddings 3-6."))),Object(s.a)("h4",{id:"background"},"Background"),Object(s.a)("ol",{start:9},Object(s.a)("li",{parentName:"ol"},"Dimmed background. Only available in desktop sizes. The drawer is full screen on mobile screens sizes.")),Object(s.a)("h3",null,Object(s.a)("a",{id:"FixedFooter"}),"Fixed footer"),"![Default drawer](/static/assets/img/Type_Fixed_Footer.png)",Object(s.a)("ol",{start:7},Object(s.a)("li",{parentName:"ol"},"Fixed footer with primary action")),Object(s.a)("h3",null,Object(s.a)("a",{id:"DrillDown"}),"Drill down"),"![Default drawer](/static/assets/img/Type_Drilldown.png)",Object(s.a)("ol",{start:8},Object(s.a)("li",{parentName:"ol"},"Back to parent view")),Object(s.a)("h2",{id:"interactions"},"Interactions"),Object(s.a)("h3",null,"Dismissal"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"The drawer is dismissed by clicking on the close button in the header, pressing the Esc key or clicking on the dimmed background"),Object(s.a)("li",{parentName:"ul"},"State of the drawer is maintained independently of its content. If the user retriggers the drawer, it should open in the last shown state, including user-entered information."),Object(s.a)("li",{parentName:"ul"},"The state is kept only on the current page session, if you refresh or leave, state is reset.")),Object(s.a)("h2",{id:"motion"},"Motion"),Object(s.a)("h3",null,"Open and close"),Object(s.a)("video",{width:"320",height:"240",controls:!0},Object(s.a)("source",{src:"/static/assets/vid/Drawer_animation.mov"}),"Your browser does not support the video tag."),Object(s.a)("h3",null,Object(s.a)("a",{id:"Scrolling"}),"Scrolling"),Object(s.a)("video",{width:"320",height:"240",controls:!0},Object(s.a)("source",{src:"/static/assets/vid/Drawer_scrolling.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),Object(s.a)("h3",null,"Drilldown"),Object(s.a)("video",{width:"320",height:"240",controls:!0},Object(s.a)("source",{src:"/static/assets/vid/Drawer_drilldown.mov"}),"Your browser does not support the video tag."),Object(s.a)("h2",{id:"related-components"},"Related components"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"To split a task in several steps, use the ",Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"Flow"}),"Flow")," component"),Object(s.a)("li",{parentName:"ul"},"For very simple tasks such as delete confirmations, use the ",Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"Modal"}),"Modal")," component")))}b.isMDXComponent=!0},OFih:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Drawer",function(){return a("7+Rw")}])}},[["OFih",0,1]]]);