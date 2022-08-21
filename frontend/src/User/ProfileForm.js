import { useState, useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import JoblyApi from "../API/api";
import "./ProfileForm.css"

const ProfileForm = () => {
    const currUser = JSON.parse(localStorage.getItem('currUser'))
    const {setCurrUser} = useContext(AuthContext)

    const [formData, setFormData] = useState({
        username: currUser.username,
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email,
        applications: currUser.applications
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async evt => {
        evt.preventDefault();
        let username = formData.username
        let updatedUser
        let updatedData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        }

        try {
            updatedUser = await JoblyApi.updateUser(username, updatedData)
            updatedUser.applications = formData.applications
        }catch (err) {
            console.log(err)
        }
        
        setFormData(formData => ({...formData}))
        setCurrUser(JSON.stringify(updatedUser))
    }

    return (
        <div className="ProfileForm">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                        <p className="mt-2 fs-5 fw-bold">{formData.username}</p>
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
                <button type="submit" className="btn btn-primary mt-3">Edit Profile</button>
            </form>
        </div>
    )
}

export default ProfileForm;