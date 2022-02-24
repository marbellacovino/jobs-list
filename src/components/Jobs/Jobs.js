import React from 'react';
import { JOBS_PER_PAGE } from '../../utils/constants';
import JobItem from './JobItem';

const jobs = ({ jobs, page }) => {
  const startIndex = ( page - 1 ) * JOBS_PER_PAGE;
  const selectedJobs = jobs.slice(startIndex, startIndex + JOBS_PER_PAGE);
  return selectedJobs.map((job,index) => (
    <JobItem key={job.id} {...job} index={index} />
  ))
}

export default jobs