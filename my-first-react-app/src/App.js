
import './App.css';
// import Item from './MyItem';

import React from 'react';

class FilmItemRow extends React.Component{
  render(){
    return(
      <li>
      <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}



class StarWars extends React.Component{

  constructor(){
    super()
    this.state={
      loadedCharacter:false,
      name:null,
      image:null,
      height:null,
      homeworld: null,
      films:[],
    }
  }

  getNewCharacter(){
    console.log(`New character`)
    const randomNumber=Math.round(Math.random()*88)
    const url=`https://swapi.dev/api/people/${randomNumber}/`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
      name:data.name,
      image:data.image,
      height:data.height,
      homeworld:data.homeworld,
      films:data.films,
      loadedCharacter:true,
    })
    
    })
  }

  render(){
    
    const movies=this.state.films.map((url,i)=>{
      return <FilmItemRow key={i} url={url}/>
    })


    return(
      <div>
        {
          this.state.loadedCharacter &&
          <div>
         <h2>{this.state.name}</h2>
         <span>{this.state.image}<img src={require("https://swapi.dev/api/image/$`{randomNumber/`")} alt="character"/></span>
          <p>{this.state.height}cm</p>
          <p><a href={this.state.homeworld}>HomeWorld</a></p>
        <ul>
         {movies}</ul></div>
       }
        <button type="button" onClick={()=>this.getNewCharacter()} className="btn">Randomised Character</button>
        </div>
        )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      {/* <Item name="Paramita"/> */}
      {/* <Item name="Maam"/> */}
      {/* <Item name="PP"/> */}
       <StarWars/>
      </header>
    </div>
  );
}

export default App;
