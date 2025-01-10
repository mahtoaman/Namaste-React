# chapter4

## JSX
it is js syntax similar to html or xml, it is used with react to create the ui

## React.createElement vs JSX
both are used to create elements in react, but jsx is much convinient and readable, it is similar to html
createElement accepts three paramentere first type of element second, an object which contains id, classname etc, and third contains contents

## Benefits of JSX
-convinient 
-maintainability
-readability
-easy to write

## Behind the Scenes of JSX
all the jsx code is converted into js code, as browser cannot directly understand the jsx, because it is just a syntatic sugar for creating elements in react.
-transpilation process converts the jsx code into js

## Babel & parcel role in JSX
babel is a compiler for js, it enables the programmers to use latest syntax of js like, es6 and jsx
parcel is a bundlers which automatically supports the jsx and bind it during the bundling process.

## Components
components are builiding blocks of react application, they are self-contained piece of code that represent a part of ui in react application. react applications are typically composed with multiple react components that works together to create a complete ui.

## Functional Components
it is type of react components, which is similar to es6 arrow functions, which takes props as an agruments and render it.
function components are simple functions that return some jsx.

## Composing Component
composing component means combining multiple functional components together to form more complex components.



## Assignmeents

## What is JSX? - already explained above
## Superpowers of JSX - already done

## Role of type attribute in script tag? What options can I use there?
it is used to define scripting language of embeded code - text/javascript, module etc

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
1. valid react component variable
2. valid react component function
3. another way to render react comoponent, same as 2nd