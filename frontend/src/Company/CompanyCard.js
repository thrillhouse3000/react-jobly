import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import { Link } from "react-router-dom";
import JobCard from "../Job/JobCard";
import "./CompanyCard.css"

const CompanyCard = ({handle, name, description, numEmployees, jobs = []}) => {
    return (
        <div className="CompanyCard mb-3 mx-2" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 4px'}}>
            <Card>
                <CardBody>
                    <CardTitle>
                        <Link 
                            className="text-decoration-none fs-4 fw-bold"
                            style={{textShadow: '1.6px 1.6px 3px rgba(0,0,0,0.3'}}
                            to={`/companies/${handle}`}
                        >
                            {name}
                        </Link>
                    </CardTitle>
                    <CardText className="fst-italic">{description}</CardText>
                    <CardText>Employees: {numEmployees}</CardText>
                        {jobs.length ?
                            (jobs.map(job => (
                                <JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} equity={job.equity} />
                            ))) : (null)
                        }
                </CardBody>
            </Card>
        </div>
    )
}

export default CompanyCard;