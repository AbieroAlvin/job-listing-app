import { useState } from "react";

import data from "./data/data.json";
import bgDesk from "./assets/images/bg-header-desktop.svg";
import bgMobile from "./assets/images/bg-header-mobile.svg";
import FilterBar from "./components/FilterBar";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filters, setFilters] = useState({
    role: "",
    level: "",
    languages: [],
    tools: [],
  });

  // // Extract unique values for each category
  // const languages = [...new Set(data.flatMap((job) => job.languages))];
  // const tools = [...new Set(jobs.flatMap((job) => job.tools))];

  const filteredJobs = jobs.filter((job) => {
    const roleMatch =
      filters.role === "" ||
      job.role.toLowerCase().includes(filters.role.toLowerCase());
    const levelMatch =
      filters.level === "" ||
      job.level.toLowerCase() === filters.level.toLowerCase();
    const languageMatch =
      filters.languages.length === 0 ||
      filters.languages.every((lang) => job.languages.includes(lang));
    const toolsMatch =
      filters.tools.length === 0 ||
      filters.tools.every((tool) => job.tools.includes(tool));

    return roleMatch && levelMatch && languageMatch && toolsMatch;
  });
  const handleFilter = (category, value) => {
    setFilters({ ...filters, [category]: value });
  };

  const removeFilter = (value) => {
    const { [value]: removedFilter, ...newFilters } = filters;
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({ role: "", level: "", languages: [], tools: [] });
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
              filters={filters}
              selectedFilters={selectedFilters}
              clearFilters={clearFilters}
              removeFilter={removeFilter}
            />

            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`flex md:flex-row md:justify-between flex-col gap-4 items-center p-4 shadow-lg rounded-md max-w-[960px] bg-white ${
                  job.new === true && job.featured === true
                    ? "border-l-4 border-l-cyan-400"
                    : ""
                }`}
              >
                <div className="flex items-center w-full  gap-4 text-[15px] relative">
                  {/* logo */}
                  <div className="md:relative absolute md:top-0 top-[-2.5rem] md:mb-0 mb-[2rem]">
                    <img
                      src={job.logo}
                      alt="/"
                      className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
                    />
                  </div>
                  {/* details */}
                  <div className="flex flex-col gap-2 px-4 mt-6">
                    {/* header */}
                    <div className="flex gap-2 items-center">
                      <p className="text-[13px] text-DesaturatedDarkCyan font-bold">
                        {job.company}
                      </p>
                      <ul className="flex gap-2 text-[10px] text-white">
                        {job.featured === true && (
                          <li className="uppercase bg-VeryDarkGrayishCyan py-1 px-2 rounded-full">
                            featured
                          </li>
                        )}
                        {job.new === true && (
                          <li className="uppercase bg-DesaturatedDarkCyan py-1 px-2 rounded-full">
                            new!
                          </li>
                        )}
                      </ul>
                    </div>
                    {/* position */}
                    <p className="text-[16px] font-bold text-VeryDarkGrayishCyan ">
                      {job.position}
                    </p>
                    <ul className="flex gap-2 items-center text-[12px] text-DarkGrayishCyan">
                      <li>{job.postedAt}</li>
                      <li>.</li>
                      <li>{job.contract}</li>
                      <li>.</li>
                      <li>{job.location}</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t-[2px] md:border-none border-gray-300 p-4 md:p-0">
                  <ul className="flex md:flex-nowrap flex-wrap text-[12px] gap-4 md:w-full w-3/4">
                    <li
                      key={job.id}
                      className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold cursor-pointer"
                      onClick={() => handleFilter("role", job.role)}
                    >
                      {job.role}
                    </li>

                    <li
                      key={job.id}
                      className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold cursor-pointer"
                      onClick={() => handleFilter("level", job.level)}
                    >
                      {job.level}
                    </li>

                    {/* {job.tools.map((tool, index) => (
                      <li
                        className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold cursor-pointer"
                        key={index}
                        onClick={() => handleFilter("tools", tool)}
                      >
                        {tool}
                      </li>
                    ))} */}

                    {["languages", "tools"].map((category, index) => (
                      <li
                        key={category}
                        className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold cursor-pointer flex"
                        onClick={() => handleFilter(category, job[category])}
                      >
                        {job[category]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
