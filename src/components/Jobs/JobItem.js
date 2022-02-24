import React from 'react';
import Card from '../UI/Card';
import moment from 'moment';
import { Accordion } from 'react-bootstrap';

const JobItem = (props) => {

    const {
        id,
        company,
        descr,
        skills,
        experience,
        from_date,
        title,
        locations,
        urls
    } = props;
    return (

        <Card className='job-item' url={urls.ad} id={id}>
            <div className="main row g-0">
                <div className="company-logo col-sm-3 col-lg-2 col-xl-1">
                    <img src={company.logo} className="card-img-top img-fluid h-100 w-100" alt="..." />
                </div>
                <div className="col-sm-9 col-lg-10 ">
                    <div className="card-body">
                        <div className="job-info">
                            <div className="job-title">{title}</div>
                            <div className="job-type">{experience}</div>
                            <div className="company-name">{company.name}</div>
                            <div className="job-location">
                                {locations.map((location) => (
                                    location.location.text
                                ))}
                            </div>
                        </div>
                        <a className="btn btn-primary btn-lg btn-apply" href={urls.ad} role="button">Apply</a>
                    </div>
                </div>
            </div>
            <Accordion className='accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                        <div id="collapse-text">
                            <div dangerouslySetInnerHTML={{ __html: descr }}></div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Skills</Accordion.Header>
                    <Accordion.Body>
                        <div id="collapse-text">
                            <div dangerouslySetInnerHTML={{ __html: skills }}></div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="card-footer post-info text-center text-muted">
                <div className="post-time">
                    Posted {moment(new Date(from_date)).fromNow()}
                </div>
            </div>
        </Card>

    );
};

export default JobItem;
