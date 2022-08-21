import { useContext } from "react";
import AuthContext from "./Auth/AuthContext";
import "./Home.css"

const Home = () => {
    let {currUser} = useContext(AuthContext)
    currUser = JSON.parse(currUser)
    return (
        <div className="Home">
            {currUser ?
                <h3>Welcome back to Jobly, {currUser.username}!</h3>
                :
                <h3>Jobly, Where Jobs Come True</h3>
            }
        </div>
    )
}

export default Home;