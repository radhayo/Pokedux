import React , { useEffect } from "react";
import "./styles.css";
import {connect} from "react-redux"
import {CLICK, showPokemonAction } from './store/action'
import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader";

const App = ({ click, fetchPokemons, pending, showPokemon, pokemons }) => {
  useEffect(() => {
  fetchPokemons()
} , [fetchPokemons])

if (pending) {
  return <Loader/>;
}
  
  return (
    <div className="App">
      <button onClick={() => click()}>click</button>
      <GameBoy showPokemon={() => showPokemon(pokemons)}/>
      <PokeList />
    </div>
  );
};
const mapStateToProps = ({pending, pokemons }) =>{
  return {
    pending,
    pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons:() => dispatch (fetchPokemons()),
    click:()=> dispatch ({ type:  CLICK}),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons))
  }
}
export default connect( 
  mapStateToProps,
  mapDispatchToProps)(App);
