import React from 'react';
import JobsList from '../Jobs/JobsList';

const JobsPage = () => {
  return (
    <div>
      <header className="header">
        <div className="title">Jobylon Job Search</div>
      </header>
      <JobsList />
    </div>
  );
};

export default JobsPage;