import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import JoblyApi from "../API/api";
import JobCard from "../Job/JobCard";


const Profile = () => {
    const currUser = JSON.parse(localStorage.getItem('currUser'))
    const {username, firstName, lastName, email, applications} = currUser
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            let jobs = []
            for (let appId of applications) {
                let job = await JoblyApi.getJob(appId)
                jobs.push(job) 
            }
            setJobs(jobs)
        }
        fetchJobs();
    }, [])

    return (
        <div>
            <h3 className="text-decoration-underline">User Info</h3>
            <UserCard username={username} firstName={firstName} lastName={lastName} email={email} />
            <h3 className="text-decoration-underline">Applications</h3>
            {jobs.map(j => (
                <JobCard key={j.id} id={j.id} title={j.title} salary={j.salary} equity={j.equity} />
            ))}
        </div>
    )
};

export default Profile;