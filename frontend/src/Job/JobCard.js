import {Card, CardBody, CardTitle, CardText, Button} from "reactstrap"
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Auth/AuthContext";

const JobCard = ({id, title, salary, equity}) => {
    const currUser = JSON.parse(localStorage.getItem('currUser'))
    const {apply, applicationIds} = useContext(AuthContext)
    const [applied, setApplied] = useState(false)

    useEffect(() => {
        if(Array.from(applicationIds).includes(id)) setApplied(true)
    }, [id, applicationIds])

    return (
        <div className="mb-3 mx-2" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 4px', borderRadius: '10px'}}>
            <Card>
                <CardBody>
                    <div className="row">
                        <div className="col-8">
                            <CardTitle className="fs-5 fw-bold" style={{textShadow: '1.6px 1.6px 3px rgba(0,0,0,0.3'}}>{title}</CardTitle>
                            <CardText>Salary: {salary}</CardText>
                            <CardText>Equity: {equity}</CardText>
                        </div>
                        <div className="col">
                            <Button className="mt-5" color="primary" onClick={() => 
                                    {
                                        apply(currUser.username, id, title, salary, equity) 
                                        setApplied(true)
                                    }
                                }
                            >{!applied ? 'Apply' : 'Applied'}</Button>   
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default JobCard;