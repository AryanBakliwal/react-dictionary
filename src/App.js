import React from "react";
import axios from 'axios';
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";




  const searchWord = async() =>  {
    const word = document.getElementById('search-bar').value;
    const dp = document.getElementById('def-p');
    const ep = document.getElementById('ex-p')
    const defurl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+word;
    try {
      const response = await axios.request(defurl);
      
      let i=0;
      let j=0;
      let ex='';
      for(i=0; i<response.data[0].meanings.length; i++){
        for(j=0; j<response.data[0].meanings[i].definitions.length; j++){
          ex = response.data[0].meanings[i].definitions[j].example;
          if(ex !== undefined){
            break;
          }
        }
        if(ex !== undefined){
          break;
        }
        
      }

      dp.innerText = response.data[0].meanings[i].definitions[j].definition;
      ep.innerText = ex;
      console.log(response.data[0].meanings[i].definitions[j].definition);
      console.log(response.data[0].meanings[i].definitions[j].example);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  

function App() {



  return (
    <>
      <div className="container-c">
        <h1 className="heading">Dictionary</h1>

        <div className="search">
          <input
            id="search-bar"
            type="text"
            placeholder="Search..."
            
          />
          <button id="mic-btn">
            <MicIcon />
          </button>
          <button id="search-btn" onClick={() => {
            searchWord();
            }}>
            <SearchIcon fontSize="large" />
          </button>
        </div>

        <div className="blocks">
          <div className="block">
            <h5>Definition</h5>
            <p id="def-p"></p>
          </div>
          <div className="block">
            <h5>Example</h5>
            <p id="ex-p"></p>
          </div>
        </div>

        

        <div className="footer">
          <p id="foot-p">&#169; Aryan Bakliwal</p>
        </div>

      </div>
    </>
  );
}

export default App;
