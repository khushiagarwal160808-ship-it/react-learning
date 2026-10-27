import React from 'react'

function Greet(props) {
    console.log(props)
  return (
    <div>
      <h1>Good Morning, Happy Birthday {props.name} </h1>
      <h1>Welcome to React, {props.name}!</h1>
    </div>
  )
}


export default Greet
/**
 * components are the building blocks of React applications.
 * They are reusable pieces of code that return a React element to be rendered to the page. 
 * Components can be defined as classes or functions. 
 * In this case, Greet is a functional component that takes props as an argument and returns JSX to be rendered.
 */

/**
 * JSX stands for JavaScript XML. 
 * It is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. 
 * JSX is used in React to describe what the UI should look like. 
 * It is not required to use JSX in React, but it makes the code more readable and easier to understand.
 */
/**
 * props are used to pass data from parent component to child component. They are read-only and and are immutable.
 * They can be used as attributes in text.
 * At a time more than one prop can be pass.
 * Accept string all will be written in curly braces.
 */

/**
 * How does a component receive props?
React bundles all the attributes into one object called props. You usually destructure the fields you need right in the parameter list: function Card({ name }).
 */