import { useContext } from "react";
import userContext from "../utils/userContext";

const About = (()=>{
    const {loggedInUser} = useContext(userContext);
    return(
        <div>
            <h1>About page</h1>
            <h2>This is about page in React - {loggedInUser}</h2>
        </div>
    )
});
export default About;