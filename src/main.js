import React, { useEffect, useState } from 'react';

import tpl from './views/header.liquid';

import page from './views/page.liquid';

import Parser from 'html-react-parser';
import { engine } from './engine';
import { appData } from './appData/data';

const Main = () => {
  const [html, setHtml] = useState(null);

  const render = async () =>{
    const html = await engine.renderFile(tpl.toString(), appData)
    setHtml(html);
  }

  useEffect(()=>{
    render();
  }, []);

  return (
    <div className="App">
      {Parser(`${html}`)}
    </div>
  );
};

export default Main;
