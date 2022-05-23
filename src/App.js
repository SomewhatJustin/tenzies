import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './Dice'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  
  const [dice, setDice] = React.useState(getNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  
  React.useEffect(() => {
    
    console.log("dice changed!")
    let isAllSame = dice.every(die => {
      return dice[0].value === die.value
    })
    
    let isAllHeld = dice.every(die => die.isHeld)
    
    if (isAllHeld && isAllSame) {
      setTenzies(true)
    } 
  }, [dice])
  
  function getNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(
        randomDie()
      )
    }
    return newDice
  }
  
  function randomDie() {
    return {
      value: Math.ceil(Math.random()*6),
      isHeld: false,
      id: nanoid()
    }
  }
  
  function rollTheDice() {
    // return getNewDice()
    let returnDice = []
    if (!tenzies) {
      returnDice = dice.map(die => {
        return die.isHeld ? die : randomDie()
      })
    } else {
      returnDice = getNewDice()
      setTenzies(false)
    } 
    
    
    return returnDice  
  
  }
  
  function toggleHeld(id) {
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  }
  
  const diceComponent = []
  for (let i = 0; i < dice.length; i++) {
    let currentDie = dice[i]
    diceComponent.push(
      <Dice 
        value = {currentDie.value}
        isHeld = {currentDie.isHeld}
        key = {currentDie.id}
        id = {currentDie.id}
        toggleHeld = {() => toggleHeld(currentDie.id)}
      />
    )
  }
  
  return (
    <div className="App">
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll the dice a bunch of times!</p>
      <div className="dice-container">
      {diceComponent}
      </div>
      <button className="roll-btn" onClick={() => setDice(rollTheDice())}>{!tenzies ? "Roll!" : "New game"}</button>
    </div>
  );
}

export default App;
