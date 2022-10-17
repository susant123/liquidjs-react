import path from 'path';
import { Liquid } from 'liquidjs';

export const engine = new Liquid({
    //root: "D://2 Personal//liquidjs-demo//src//views",  // dirs to lookup layouts/includes
    root: path.resolve("D:/2 Personal/liquidjs-demo/src/views"),
    extname: '.liquid'     // the extname used for layouts/includes, defaults 
});

engine.registerFilter('image', d => {
  let img = `<img src="${d}" class="App-logo" alt="logo"></img>`;  
  return img 
})
