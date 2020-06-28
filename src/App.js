import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos]= useState([{}]);

  useEffect( () => {
    async function getRepos(){
      const reponse = await fetch("https:/api.github.com/users/waleedkhan-966/repos")
      const data = await reponse.json();
      console.log(data);
      setRepos(data)
    }
    getRepos();
  
    // "https:/api.github.com/users/waleedkhan-966/repos "
    //fetch('https://jsonplaceholder.typicode.com/posts/1')
     // .then(response => response.json())
     // .then(json =>{ 
      //  setData (json);
     // })

  }, [])
  return (
    <div className="App">
      <ul>
        {repos.map((repoObj, ind)=>{
          return(<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
