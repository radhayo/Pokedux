import React , { useEffect } from "react";
import "./styles.css";
import {connect} from "react-redux"
import {CLICK,} from './store/action'
import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader";

const App = ({ click, fetchPokemons, pending }) => {
  useEffect(() => {
  fetchPokemons()
} , [fetchPokemons])

if (pending) {
  return <Loader/>;
}
  
  return (
    <div className="App">
      <button onClick={() => click()}>click</button>
      <GameBoy />
      <PokeList />
    </div>
  );
};
const mapStateToProps = ({pending}) =>{
  return {
    pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons:() => dispatch (fetchPokemons()),
    click:()=> dispatch ({ type:  CLICK})
  }
}
export default connect( 
  mapStateToProps,
  mapDispatchToProps)(App);
