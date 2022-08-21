import { useNavigate} from "react-router-dom";
import { useState } from "react";

const JobSearchBar = ({passParams}) => {
    const INITIAL_STATE = {
        minSalary: '',
        hasEquity: true,
        title: ''
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
        navigate(`/jobs`)
    }



    return (
        <div className="JobSearchBar">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="min">Minimum Salary</label>
                    <input
                        className="form-control" 
                        type="number"
                        id="min" 
                        name="minSalary" 
                        value={formData.minSalary} 
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="equity">Equity Option</label>
                    <select
                        className="form-control text-center"
                        type="number"
                        id="equity" 
                        name="hasEquity" 
                        value={formData.hasEquity} 
                        onChange={handleChange}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                    </select>
                </div>           
                <div className="form-group">                
                    <label htmlFor="title">Job Title</label>
                    <input
                        className="form-control" 
                        type="text"
                        id="title" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Search</button>
            </form>
        </div>
    )
}

export default JobSearchBar;