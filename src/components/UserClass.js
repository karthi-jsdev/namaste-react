import React from "react";

class UserClass extends React.Component{
    constructor(){
        console.log("constructor");
    }
    componentDidMount(){
        console.log("component did mount");
    }
    render(){
        return(
            <div>
                <h1>UserClass Component</h1>
            </div>
        )
    }
}
export default UserClass;