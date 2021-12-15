import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import CallApi from './components/CallApi';
import SwitchButton from "./components/Button";
import Classement from "./components/Classement/Classement";
import './App.css';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
      <SwitchButton />
        <CallApi/>
     <Classement/>
     </p>
  </div>
 );
}
export default App;
