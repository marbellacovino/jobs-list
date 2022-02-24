import { useEffect, useState } from "react";
import { JOBS_API_URL, JOBS_PER_PAGE } from '../../utils/constants';
import Pagination from '../UI/Pagination';
import moment from 'moment';
import Card from '../UI/Card';
import Search from '../Search/Search';
import Jobs from '../Jobs/Jobs';

function JobsList() {
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [q, setQ] = useState("");
  //     set search parameters we only what to search jobs by title and function
  const [searchParam] = useState(["title", "company", "employment_type"]);

  //TODO: filter implementation
  // const [filterParam, setFilterParam] = useState(["All"]);
  // let temp = [];

  useEffect(() => {

    fetch(`${JOBS_API_URL}`)
      .then(async response => {
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        const data = await response.json();
        const sortedJobs = data.sort(
          (a, b) =>
            moment(new Date(b.from_date)) - moment(new Date(a.from_date))
        );
        // data.map((job) => {
        //   if (!temp.includes(job.employment_type)) {
        //     temp.push(job.employment_type);
        //   }
        // });
        // setFilterParam(prev => [prev, ...temp]);
        setFetchedJobs(sortedJobs);
        setTotalPages(Math.ceil(data.length / JOBS_PER_PAGE));
        setDataIsLoaded(true);
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  }, []);

  function search(job) {
    return job.filter((job) => {
      return searchParam.some((newJob) => {
        return (
          job[newJob]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  const handleSearch = (event) => {
    setQ(event.target.value);
  }

  const handleClick = num => {
    setPage(num);
  }
  return (

    <div className="search-results">
      <Search onchange={handleSearch} query={q}></Search>
      {!dataIsLoaded ? <Card><h1>Loading... </h1></Card> : <>
        <Jobs jobs={search(fetchedJobs)} page={page} />
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </>}
    </div>
  );
}

export default JobsList;