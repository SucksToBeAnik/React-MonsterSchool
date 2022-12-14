import { useState,useEffect } from 'react';

// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';



const App = function(){
  const [searchField, setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((resposne) => resposne.json())
  .then((users) => setMonsters(users))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField) 
    })
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])

  

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }



  return (
    <div className="App">
         <h1 className='app-title'>Monster School</h1>
         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />

         < CardList monsters={filteredMonsters} />
      </div>
  )
}
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField:'',
//   };
// }
// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((resposne) => resposne.json())
//   .then((users) => this.setState(
//     ()=>{
//       return {monsters:users};
//     },
//     ()=>{
//       console.log(this.state);
//     }
//   ))
// }

// onSearchChange = (event)=>{
//   const searchField = event.target.value.toLowerCase();
  
//   this.setState(()=>{
//     return { searchField };
//   })
// }

// render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchField) 
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster School</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />

//         < CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }


export default App;
