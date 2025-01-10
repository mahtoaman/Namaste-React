

    const heading = React.createElement("h1", {}, "Heading from react");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    const subHeading = React.createElement("h2",{},"This is subheading")

const container = React.createElement("div",{id:"container"},[heading, subHeading])

    console.log(heading);
    root.render(container);