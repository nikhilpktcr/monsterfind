import { Component} from 'react'
import './App.css';
import CardList from "./components/card-list/card-list-component.jsx"
import SearchBox from "./components/search-box/search-box-component.jsx"

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [], //initialse as a empty
      searchString: ''
    }
  }
  //lifecycle method used
  //when ever the component mount to the dom
  //when ever the compont remove from the dom after that
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  this.setState(
        ()=> { 
            return {monsters: users}
          },
        () =>{
            console.log("monsters", this.state)
        }
      )
    );
  }

  onSearchStringChange = (event)=>{
    const searchString = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchString}
    })
  }

  
  render() {
    const { monsters, searchString} = this.state;
    const { onSearchStringChange} = this
    const filteredMonsterList = monsters.filter(
      (monster)=> monster.name.toLowerCase().includes(searchString));
    return (
      <div className='App'> 
        <h1 className='app-title'>Monster Find</h1>
        <SearchBox className ='search-box' placeholder='search monster' onChangeHandler ={onSearchStringChange}/>
        <CardList monsters={filteredMonsterList}/>
        {/* {filteredMonsterList.map((monster)=>{
          return <h1 key={monster.id}>{monster.name}</h1>
        })} */}
      </div>
    )
  }
}
export default App;
