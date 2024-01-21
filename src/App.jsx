import { useEffect, useState } from "react";

import data from "./data/data.json";
import bgDesk from "./assets/images/bg-header-desktop.svg";
import bgMobile from "./assets/images/bg-header-mobile.svg";
import FilterBar from "./components/FilterBar";
import JobsList from "./components/JobsList";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  // check if filters are empty and then push items
  const filterItems = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  };

  // filter through tags
  const filteredJobs = jobs.filter(filterItems);

  const handleFilter = (tag) => {
    if (filters.includes(tag)) return; // prevent multiplication of the same filters

    setFilters([...filters, tag]);
  }; //adds filters to container

  const removeFilter = (value) => {
    setFilters(filters.filter((f) => f !== value));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const selectedFilters = Object.values(filters).flat().filter(Boolean);

  return (
    <>
      <div className="flex flex-col w-full h-full font-body bg-LightGrayishCyan">
        <div className="w-full top-0  bg-DesaturatedDarkCyan z-40">
          <img src={bgDesk} alt="/" className="md:block hidden" />
          <img src={bgMobile} alt="/" className="md:hidden block w-full" />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="mb-6 flex flex-col justify-center md:gap-6 gap-10 py-8 px-8">
            <FilterBar
              filters={selectedFilters}
              clearFilters={clearFilters}
              removeFilter={removeFilter}
            />

            <div>
              {jobs.length.map === 0 ? (
                <p>No Data To Display</p>
              ) : (
                filteredJobs.map((job) => (
                  <JobsList
                    job={job}
                    key={job.id}
                    handleFilter={handleFilter}
                    className="mt-20"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
