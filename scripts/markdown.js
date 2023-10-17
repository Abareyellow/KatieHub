import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
}

const defaultContent = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
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

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Pikachu](https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg)`

const Editor = ({ content, handleTextareaChange }) => <textarea id="editor" value={content} onChange={handleTextareaChange}/>

const Previewer = ({content}) => <div id="preview" dangerouslySetInnerHTML={{
    __html: marked(content, { renderer: renderer })
  }} />

const App = () => {
  const [content, setContent] = React.useState(defaultContent)

  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }
  return (
    <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange}/>
      <Previewer content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))