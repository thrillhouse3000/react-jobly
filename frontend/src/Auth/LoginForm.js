import { useNavigate} from "react-router-dom";
import { useState } from "react";
import "./LoginForm.css"


const LoginForm = ({login}) => {

    const INITIAL_STATE = {
        username: '',
        password: ''
    }
    const navigate = useNavigate();

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        login(formData.username, formData.password)
        setFormData(INITIAL_STATE);
        setTimeout(() => {navigate('/')}, 100)
    }

    return (
        <div className="LoginForm">
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        id="username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} />
                    <button type="submit" className="mt-3 btn btn-success">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;