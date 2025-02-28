import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child-constructor");
    this.state = {
      userProfile: {},
      count: 0,
      count2: 0,
    };
  }
  async componentDidMount() {
    //this method will be called after the component is rendered
    //use for side effects like API calls

this.setInterval = this.setInterval(()=>{
  console.log("setInterval"); //will set the interval for the function to be called
})

    console.log("child-componentDidMount");
   const response = await fetch(`https://api.github.com/users/${this.props.userId}`)
    const data = await response.json()
    this.setState({userProfile:data})
     
  }

//we can also implement same thing in function component using useEffect
//we need to return a function from useEffect to do the cleanup

  componentWillUnmount(){
    console.log("componentWillUnmount")
    clearInterval(this.setInterval)
  }

  render() {
    console.log(`this.state.userProfile`, this.state.userProfile);
    console.log("child-render");
    return (
      <>
        <h1>Profile</h1>
        <p>Name: {this.state.userProfile.name}</p>
        <img src={this.state.userProfile.avatar_url} alt="profile" />
        <p>Designation: {this.state.userProfile.bio}</p>
        <div>
          {this.state.count}
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
            //we will never update the state directly
            //we will always use setState method to update the
            //we will never do state.count = state.count + 1
          >
            count
          </button>
        </div>
      </>
    );
  }
}
export default ProfileClass;
