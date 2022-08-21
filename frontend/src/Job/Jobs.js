import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobSearchBar from "./JobSearchBar";
import JoblyApi from "../API/api";
import "./Jobs.css"

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [params, setParams] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            let jobs = await JoblyApi.getJobs(params);
            setJobs(jobs);
        }
        fetchJobs();
    }, [params])

    const passParams = (params) => {
        setParams(params)
    }

    return (
        <div className="Jobs">
            <div className="row">
                <div className="col-2">
                    <div className="Jobs-search">
                        <h3 className="text-decoration-underline">Search</h3>
                        <JobSearchBar passParams={passParams} />
                    </div>
                </div>
                <div className="col">
                    <h3 className="text-decoration-underline">Jobs</h3>
                    {jobs.length ?
                        jobs.map(j => (
                            <JobCard key={j.id} id={j.id} title={j.title} salary={j.salary} equity={j.equity} />
                        )) : <p>Couldn't find anything matching that criteria</p>
                    }   
                </div>
            </div>
            
             
        </div>
    )
};

export default Jobs;