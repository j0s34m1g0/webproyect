import React, { useState, useEffect } from 'react';


function App() {
  const [ale, setAle] = useState(0);
 
  const dirs = [
    "http://fumacrom.com/BgGi",
    "http://fumacrom.com/Bg4l",
    "http://fumacrom.com/Bg6z",
    "http://fumacrom.com/Bg7d",
    "http://fumacrom.com/Bg8f",
    "http://fumacrom.com/Bg9K",
    "http://fumacrom.com/Bg9y",
    "http://fumacrom.com/BgAx",
    "http://fumacrom.com/BgBi",
    "http://fumacrom.com/Bg41",
    "http://fumacrom.com/BgCT",
    "http://fumacrom.com/BgDI",
    "http://fumacrom.com/BgDr",
    "http://fumacrom.com/BgEF",
    "http://fumacrom.com/BgEi",
    "http://fumacrom.com/BgF5",
    "http://fumacrom.com/BgFr",
    "http://fumacrom.com/BgGH",
    "http://fumacrom.com/BgCs",
    "http://fumacrom.com/Bfz5",
    "http://fumacrom.com/Bfy0",
    "http://evolterr.com/1M2P",
    "http://evolterr.com/2n0Y",
    "http://evolterr.com/3v84",
    "http://evolterr.com/6LeP",
    "http://aciterar.com/6TgR",
    "http://fumacrom.com/AhkB",
    "http://apticirl.com/8JYf",
    "http://fumacrom.com/BfnL",
    "http://fumacrom.com/BfoN",
    "http://fumacrom.com/Bfp5",
    "http://fumacrom.com/BfpW",
    "http://fumacrom.com/Bfr5",
    "http://fumacrom.com/Bfrs",
    "http://fumacrom.com/BfxX",
    "http://fumacrom.com/BdZy",
    "http://furtelec.com/7id2",
    "http://furtelec.com/9Grg",
    "http://movincle.com/6M7V",
    "http://movincle.com/7hBF",
    "http://movincle.com/951T",
    "http://motriael.com/2t7v",
    "http://furtelec.com/1HAx",
    "http://blaleela.com/49mc",
    "http://blaleela.com/6Wfj",
    "http://blaleela.com/9oS5",
    "http://apticirl.com/1O4I",
    "http://apticirl.com/2wOc",
    "http://apticirl.com/59CM",
    "http://blaleela.com/2uK1",
    "http://aorracer.com/4hCi",
    "http://aorracer.com/4hC3",
    "http://eleburic.com/1Phs",
    "http://eleburic.com/2NJj",
    "http://eleburic.com/3qTE",
    "http://eleburic.com/4lzr",
    "http://eleburic.com/65JQ",
    "http://eleburic.com/7ZDb",
    "http://eleburic.com/8wVf",
    "http://detonnot.com/11fg",
    "http://detonnot.com/2CnE",
    "http://detonnot.com/3LwE",
    "http://detonnot.com/4MQB",
    "http://detonnot.com/5hSN",
    "http://detonnot.com/75Ps",
    "http://detonnot.com/8Vz8",
    "http://aorracer.com/2m4B",
    "http://aorracer.com/4c1f",
    "http://aorracer.com/4h5p",
  ];

  useEffect(() => {
    let numAleatorio = Math.floor(Math.random() * 70);
    return () => {
      setAle(numAleatorio);
      console.log(numAleatorio);
    }
  }, [])

  return (
    <div className="App"> 
      <a style={{ fontSize: 200 }} href={dirs[ale]}>Click Here</a>
    </div>
  );
}

export default App;
