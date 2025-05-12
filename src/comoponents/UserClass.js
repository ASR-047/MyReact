import React from "react";


class UserClass extends React.Component {

    constructor(props){
        super(props)

         this.state ={
        //     count:0,

        userInfo:{
          name:"dummy",
          location:"default"
        }
            
        }

        //console.log(this.props.name + "1st child constructor")
    }//lifecycle of compononetDidMount() is first the constructor is called, then the rendor method is called and then the 
    // compononetDidMount() is called . It is used to make an API call
    //why do we make an api call in this is because we first want to render the component and then make an api call like
    // we do in useEffect
    async componentDidMount(){
      //console.log(this.props.name + " Child Component did mount")

      const data = await fetch("https://api.github.com/users/ASR-047");
      const json = await data.json();

      this.setState({
        userInfo:json,
      })

      console.log(json);
    }
  render() {

    //console.log(this.props.name + "child")

   // const {name,location,contact} = this.props;

    //const{count}=this.state;
const{login, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card-class">
        <div>
           
          <h2>Name : {login}</h2>
          <h2>Location : {location}</h2>
          
        </div>
      </div>
    );
  }
  
}
export default UserClass;

//<h1>count:{count}</h1>
{/* <button onClick={() => {
  this.setState({
    count:this.state.count + 1,
  })
}}>Increase Count</button> */}