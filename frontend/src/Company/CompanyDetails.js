import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../API/api";

const CompanyDetails = () => {
    const {handle} = useParams();
    const [company, setCompany] = useState([]);
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                let company = await JoblyApi.getCompany(handle);
                setCompany(company)
            } catch (err) {
                setErrors(err)
            }
            
            
        }
        fetchCompany();
    }, [])

    const {name, description, numEmployees, jobs} = company;

    return (
    
        <div>
            {!errors.length ?
                (
                    <>
                        <h3 className="text-decoration-underline">Company Details</h3>
                        <CompanyCard handle={handle} name={name} description={description} numEmployees={numEmployees} jobs={jobs} />
                    </>
                ) : (
                    <div>
                        {errors.length ? 
                            errors.map(err => (
                                <p key={err} style={{color: 'red', marginTop: '1rem'}}>{err}</p>
                            )) : null         
                        }
                    </div>
                )
            }
            
        </div>
    )
};

export default CompanyDetails;