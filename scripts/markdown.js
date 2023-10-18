import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import marked from "https://cdn.skypack.dev/marked";
import Prism from "https://cdn.skypack.dev/prismjs";

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

...

![Pikachu](https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg)`;

const Editor = ({ content, handleTextareaChange }) => (
  <textarea id="editor" value={content} onChange={handleTextareaChange} />
);

const Previewer = ({ content }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer }),
    }}
  />
);

const App = () => {
  const [content, setContent] = React.useState(defaultContent);
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("app"));
