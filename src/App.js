import React from "react";
import "./styles.css";
import {connect} from "react-redux"
import {CLICK} from './store/action'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ click }) => {
  console.log(click)
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
    click:()=> dispatch ({ type:  CLICK})
  }
}
export default connect( null,mapDispatchToProps)(App);
