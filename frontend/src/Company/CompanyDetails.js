import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../API/api";

const CompanyDetails = () => {
    const {handle} = useParams();
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const fetchCompany = async () => {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
        }
        fetchCompany();
    }, [])

    const {name, description, numEmployees, jobs} = company;

    return (
    
        <div>
            <h3 className="text-decoration-underline">Company Details</h3>
            <CompanyCard handle={handle} name={name} description={description} numEmployees={numEmployees} jobs={jobs} />
        </div>
    )
};

export default CompanyDetails;