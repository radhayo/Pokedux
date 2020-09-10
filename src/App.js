import React , { useEffect } from "react";
import "./styles.css";
import {connect} from "react-redux"
import {CLICK,} from './store/action'
import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ click, fetchPokemons }) => {
  useEffect(() => {
  fetchPokemons()
} , [fetchPokemons])
  
  return (
    <div className="App">
      <button onClick={() => click()}>click</button>
      <GameBoy />
      <PokeList />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons:() => dispatch (fetchPokemons()),
    click:()=> dispatch ({ type:  CLICK})
  }
}
export default connect( null,mapDispatchToProps)(App);
