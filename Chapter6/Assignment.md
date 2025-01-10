# Day5 Assignment

## is JSX mandatory for React?
no, but it is recommonded, without it code will be more complex and less readable.


## Is ES6 mandatory for React?
No, ES6 (ECMAScript 2015) features are not mandatory for React, but they are highly recommended for writing more concise and readable code.


## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
{TitleComponent}: This is used when you want to reference a React component without rendering it. It's commonly used in scenarios like passing components as props or accessing component references.

{<TitleComponent/>}: This is used to render the TitleComponent directly in the JSX. It's the concise way of rendering a component.

{<TitleComponent></TitleComponent>}: This is an alternative way of rendering a component, similar to the previous example. 


## How can I write comments in JSX?
{/* This is a single-line comment in JSX */}

## What is <React.Fragment></React.Fragment> and <></> ?
known as empty tag or fragment -used for grouping multiple elements without introducing an extra parent div or wrapper

## What is Virtual DOM?
The Virtual DOM acts as an intermediary layer, allowing React to optimize the updating process by batch processing changes and minimizing direct manipulation of the real DOM. This approach is a key factor in React's efficiency and performance.

It's important to note that developers working with React don't directly interact with the Virtual DOM; it is managed internally by React itself. Developers write their code using React components, and React takes care of the Virtual DOM updates and real DOM manipulations behind the scenes.


## What is Reconciliation in React?
React's "reconciliation" process compares the current Virtual DOM with a previous version to identify the differences (diffing).
Only the minimal set of changes needed to update the UI is calculated.

## What is React Fiber?
React Fiber is an internal implementation detail of the React library that was introduced to improve the performance and rendering capabilities of React applications. Fiber is not a separate version of React but rather a rewrite and reimplementation of the core algorithm responsible for updating and rendering components.

## Why we need keys in React? When do we need keys in React?
In React, keys are used to uniquely identify and differentiate between elements in a collection (such as an array of components) that are being rendered. Keys play a crucial role in the process of reconciliation, which is how React efficiently updates the user interface in response to changes in the application's state.

When rendering dynamic lists of elements using map or other iteration methods, each element should have a unique key. This is a common scenario where keys are crucial.


## Can we use index as keys in React?
When rendering dynamic lists of elements using map or other iteration methods, each element should have a unique key. This is a common scenario where keys are crucial.

The array index is not stable if the order of elements changes. Adding or removing elements can result in a different index for each element, leading to React treating elements as new even if they represent the same data.

## What is props in React?
The array index is not stable if the order of elements changes. Adding or removing elements can result in a different index for each element, leading to React treating elements as new even if they represent the same data.

## What is a Config Driven UI ?
A Config-Driven UI (User Interface) refers to a design and implementation approach where the structure, behavior, and appearance of a user interface are primarily controlled and configured through external configuration rather than hardcoding these aspects in the application code. This approach allows for more flexibility, easier customization, and dynamic changes to the UI without requiring extensive code modifications.