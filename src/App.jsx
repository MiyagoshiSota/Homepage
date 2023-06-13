import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from "./main.module.scss"
import axios from "axios";
import AddPublickFees from "./modules/AddPublickFees"

function App() {
  //open publickfees.json
  //npx json-server --watch db.json -p 8000

  //open db.json
  //npx json-server db.json
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const URL = ' http://localhost:3100/Goods';
  const today = new Date();



  function addDb(){  
    //タイプ内容からjsonを作成
    const year = today.getFullYear()
    const month = today.getMonth()
    const oneday = today.getDate()

    setName("");
    setPrice("");

    const day = String(year) + String(month+1) + String(oneday)
    const json = {
      date: day,
      name: name,
      price: price
    };
    
    //作成したjsonをdb.jsonにポップ
    axios.post(URL,json);    
    
    // getで取ってきたデータをconsole.logで表示
    axios.get(URL).then(function (response) {
    console.log(response.data);
    })

  }

  return (
    <>
    <div className={style.MainBox}>
      <div>
        <h1>Name</h1>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      </div>
      
      <div>      
        <h1>Privce</h1>
        <input type='number' value={price} onChange={(event) => setPrice(event.target.value)}/>円
      </div>

      <button onClick={() => addDb()}>add</button>
    </div>

    <AddPublickFees />

    </>
  )
}

export default App