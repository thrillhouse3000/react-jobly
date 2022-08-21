import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import { Link } from "react-router-dom";

const UserCard = ({username, firstName, lastName, email}) => {
    return (
        <div className="mb-3 mx-2" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 4px', borderRadius: '10px'}}>
            <Card>
                <CardBody>
                    <div className="row">
                        <div className="col-8">
                            <CardTitle 
                                className="fs-5 fw-bold" 
                                style={{textShadow: '1.6px 1.6px 3px rgba(0,0,0,0.3'}}
                            >
                                {username}'s Profile
                            </CardTitle>
                            <CardText>First Name: {firstName}</CardText>
                            <CardText>Last Name: {lastName}</CardText>
                            <CardText>Email: {email}</CardText>
                        </div>
                        <div className="col">
                            <Link className="mt-5" to='/profile/edit'>Edit User Info</Link>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserCard;