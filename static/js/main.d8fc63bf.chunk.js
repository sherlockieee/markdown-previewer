(this["webpackJsonpmarkdown-preview"]=this["webpackJsonpmarkdown-preview"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=(a(14),a(5)),l=a(6),c=a(1),d=a(8),m=a(7),h=(a(15),a(16),a(2)),u=a.n(h);u.a.setOptions({breaks:!0});var w=new u.a.Renderer;w.link=function(e,t,a){return'<a target="_blank" href="'.concat(e,'">').concat(a,"</a>")};var v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={markdown:k,editorMaximized:!1,previewMaximized:!1},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleEditorMaximize=n.handleEditorMaximize.bind(Object(c.a)(n)),n.handlePreviewMaximize=n.handlePreviewMaximize.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"handleEditorMaximize",value:function(){this.setState({editorMaximized:!this.state.editorMaximized})}},{key:"handlePreviewMaximize",value:function(){this.setState({previewMaximized:!this.state.previewMaximized})}},{key:"render",value:function(){var e=this.state.editorMaximized?["maximized","hide","fa fa-compress"]:this.state.previewMaximized?["hide"," maximized","fa fa-compress"]:[" col"," col","fa fa-arrows-alt"];return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"header"}," Markdown Previewer "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:e[0],id:"editor-box"},i.a.createElement("h2",{className:"header"},"Editor View"),i.a.createElement(f,{onClick:this.handleEditorMaximize,icon:e[2],type:this.state.editorMaximized}),i.a.createElement("textarea",{value:this.state.markdown,onChange:this.handleChange,id:"editor"},k)),i.a.createElement("div",{className:e[1],id:"preview-box"},i.a.createElement("h2",{className:"header"},"Preview "),i.a.createElement(f,{onClick:this.handlePreviewMaximize,icon:e[2],type:this.state.previewMaximized}),i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:u()(this.state.markdown,{renderer:w})}})))))}}]),a}(i.a.Component),f=function(e){return i.a.createElement("button",{className:"toolbar btn btn-default",onClick:e.onClick}," ",e.type?"Click to return ":"Click to maximize "," ",i.a.createElement("i",{className:e.icon}))},k="# Welcome to my React Markdown Previewer \n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",b=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.d8fc63bf.chunk.js.map