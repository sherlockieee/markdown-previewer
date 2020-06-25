import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import marked from "marked";

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized,
    });
  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized,
    });
  }
  render() {
    const classes = this.state.editorMaximized
      ? ["maximized", "hide", "fa fa-compress"]
      : this.state.previewMaximized
      ? ["hide", " maximized", "fa fa-compress"]
      : [" col", " col", "fa fa-arrows-alt"];

    return (
      <div className="App">
        <div className="container">
          <h1 className="header"> Markdown Previewer </h1>
          <div className="row">
            <div className={classes[0]} id="editor-box">
              <h2 className="header">Editor View</h2>
              <Toolbar
                onClick={this.handleEditorMaximize}
                icon={classes[2]}
                type={this.state.editorMaximized}
              />
              <textarea
                value={this.state.markdown}
                onChange={this.handleChange}
                id="editor"
              >
                {placeholder}
              </textarea>
            </div>

            <div className={classes[1]} id="preview-box">
              <h2 className="header">Preview </h2>
              <Toolbar
                onClick={this.handlePreviewMaximize}
                icon={classes[2]}
                type={this.state.previewMaximized}
              />
              <div
                id="preview"
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown, { renderer: renderer }),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Toolbar = (props) => {
  return (
    <button className="toolbar btn btn-default" onClick={props.onClick}>
      {" "}
      {props.type ? "Click to return " : "Click to maximize "}{" "}
      <i className={props.icon}></i>
    </button>
  );
};

const placeholder = `# Welcome to my React Markdown Previewer 

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
