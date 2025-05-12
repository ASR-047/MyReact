import UserFn from "./UserFn";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class AboutUs extends React.Component{

    constructor(props){
        super(props)

        //console.log("parent constructor")
    }
    
    // componentDidMount(){
    //     //console.log("Parent component did mount")
    // }
    render()
    
    {
        //console.log("parent render")
        return (
            <div>
                <h1>About us</h1>
            <p>This page is being created as a part of learning react js. This component is created by using React Router.</p>

            <div>
                LoggedIn User:
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass name={"Ankit Kumar "} location={"class component"} contact={"akop@gmail.com"}/>
            
            </div>
        )
    }
}

// const AboutUs = () => {

//     return (
//         <div>
//             <h1>About us</h1>
//             <p>This page is being created as a part of learning react js. This component is created by using React Router.</p>

            
//             <UserClass name={"Ankit kumar"} location={"class component"} contact={"akop@gmail.com"}/>

//         </div>
//     )
// } this was created using 


export default AboutUs;


//<UserClass name={"Ankit kumar"} location={"fn component"} contact={"akop@gmail.com"}/>