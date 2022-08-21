import { useNavigate} from "react-router-dom";
import { useState } from "react";

const CompanySearchBar = ({passParams}) => {
    const INITIAL_STATE = {
        minEmployees: '',
        maxEmployees: '',
        name: ''
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
        passParams({...formData})
        setFormData(INITIAL_STATE);
        navigate(`/companies`)
    }



    return (
        <div className="CompanySearchBar">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="min">Minimum Employees</label>
                <input
                    className="form-control" 
                    type="number"
                    id="min" 
                    name="minEmployees" 
                    value={formData.minEmployees} 
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="max">Maximum Employees</label>
                <input
                    className="form-control" 
                    type="number"
                    id="max" 
                    name="maxEmployees" 
                    value={formData.maxEmployees} 
                    onChange={handleChange} />
                </div>
                <div className="form-group">                
                <label htmlFor="name">Name</label>
                <input
                    className="form-control" 
                    type="text"
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Search</button>
            </form>
        </div>
    )
}

export default CompanySearchBar;