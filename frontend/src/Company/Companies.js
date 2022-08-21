import {useState, useEffect} from "react"
import CompanySearchBar from "./CompanySearchBar";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../API/api"
import "./Companies.css"

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [params, setParams] = useState([])

    useEffect(() => {
        const fetchCompanies = async () => {
            let companies = await JoblyApi.getCompanies(params);
            setCompanies(companies);
        }
        fetchCompanies();
    }, [params])

    const passParams = (params) => {
        setParams(params)
    }

    return (
        <div className="Companies">
            <div className="row">
                <div className="col-2">
                    <div className="Companies-search">
                        <h3 className="text-decoration-underline">Search</h3>
                        <CompanySearchBar passParams={passParams} />
                    </div>
                </div>
                <div className="col">
                    <h3 className="text-decoration-underline">Companies</h3>
                    {companies.map(c => (
                        <CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} numEmployees={c.numEmployees} />
                    ))}
                </div>
            </div>
            
            
        </div>
    )
}

export default Companies;