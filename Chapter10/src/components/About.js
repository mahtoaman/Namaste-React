import {React,Component} from "react"
import ProfileClass from "./ProfileClass"


class About extends Component{

    constructor(props){
        super(props)
        console.log("parent-constructor")
        this.state = {
            //state is an object where we can store the data of the component
        }
    }
    

    // componentDidMount(){
    //this method will be called after the component is rendered
    //use for side effects like API calls
    //     console.log("parent-componentDidMount")
    // }

    render(){
        console.log("parent-render")
        return <>
            <h1>About</h1>
            <p>This is about page</p>   
            <ProfileClass userId="mahtoaman"/>
        </>
    }
}


export default About