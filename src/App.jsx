import React from 'react'
import Greet from './Greet'
import State from './State'
import Event from './Event'

function App() {
  return (
    <div>
      <p>Hello, World!</p>
      
      <Greet name="khushi" />
      <Greet name="darshika" />
      <State />
      <Event />
    </div>
  )
}

export default App
/**
 * rerendering is the process of generating the virtual DOM representation of a component and updating the actual DOM to reflect any changes.
 * virtual DOM is a lightweight in memory representation of the reat document object model dom provided by libraries like react. 
 * Instead of directly interacting with the browswers dom(which is relatively slow) react creates a actual copy of it in js memory

 */

