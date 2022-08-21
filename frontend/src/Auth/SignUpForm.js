import { useNavigate} from "react-router-dom";
import { useState } from "react";
import "./SignUpForm.css"

const SignupForm = ({signup}) => {

    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }
    const navigate = useNavigate();

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([])

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async evt => {
        evt.preventDefault();
        try {
            await signup(formData.username, formData.password, formData.firstName, formData.lastName, formData.email)
            setFormData(INITIAL_STATE);
            setTimeout(() => {navigate('/')}, 50)
        }catch (err) {
            setFormErrors(err)
        }
        
    }

    return (
        <div className="SignupForm">
            <h3>Sign Up</h3>
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
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="form-control" 
                        type="text"
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="form-control" 
                        type="text"
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control" 
                        type="text"
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} />
                </div>
                <button type="submit" className="mt-3 btn btn-success">Sign Up</button>
            </form>
            <div>
                {formErrors.length ? 
                    formErrors.map(err => (
                        <p key={err} style={{color: 'red', marginTop: '1rem'}}>{err}</p>
                    )) : null         
                }
            </div>
        </div>
    )
}

export default SignupForm;