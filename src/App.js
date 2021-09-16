import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
       markdown: "# h1\n## h2\n[Duck Duck Go](https://duckduckgo.com)\n```\nCode Block\n```\n* list item\n> blockquote\n`inline code`\n**bolded**\n![The San Juan Mountains are beautiful!](https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300 'my image')",
    };
  }
  
  componentDidMount(){
    document.getElementById('editor').value = this.state.markdown;
    document.getElementById('preview').innerHTML = marked(this.state.markdown);
    document.getElementById('editor').addEventListener('keyup',()=>{
      this.setState({markdown: document.getElementById('editor').value})
      document.getElementById('preview').innerHTML = marked(this.state.markdown);
    });
  }
  render(){
    return (
      <div>
      <h1>Markdown Previewer</h1>
      <div className='flex-container'>
        <div id='left'>
          <h2 className='whiteText'>Markdown</h2>
          <textarea id='editor' data-testid='editor'>
          </textarea>
        </div>
        <div id='right'>
          <h2 className='whiteText' >Preview</h2>
          <div id='preview' data-testid='preview'>
          </div>
        </div>
      </div>
        </div>
    )
  }
}


export default App;