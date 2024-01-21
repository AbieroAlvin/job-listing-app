const JobsList = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleFilter,
}) => {
  // combine few items
  const tags = [role, level];

  if (tools) {
    tags.push(...languages);

    if (languages) {
      tags.push(...tools);
    }
  }

  return (
    <div>
      <div
        className={`flex md:flex-row md:justify-between flex-col gap-4 items-center p-4 shadow-lg rounded-md max-w-[960px] mt-12 bg-white ${
          featured ? "border-l-4 border-l-cyan-400" : ""
        }`}
      >
        <div className="flex items-center w-full  gap-4 text-[15px] relative">
          {/* logo */}
          <div className="md:relative absolute md:top-0 top-[-2.5rem] md:mb-0 mb-[2rem]">
            <img
              src={logo}
              alt={company}
              className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
            />
          </div>
          {/* details */}
          <div className="flex flex-col gap-2 px-4 mt-6">
            {/* header */}
            <div className="flex gap-2 items-center">
              <p className="text-[13px] text-DesaturatedDarkCyan font-bold">
                {company}
              </p>
              <ul className="flex gap-2 text-[10px] text-white">
                {featured && (
                  <li className="uppercase bg-VeryDarkGrayishCyan py-1 px-2 rounded-full">
                    featured
                  </li>
                )}
                {isNew && (
                  <li className="uppercase bg-DesaturatedDarkCyan py-1 px-2 rounded-full">
                    new!
                  </li>
                )}
              </ul>
            </div>
            {/* position */}
            <p className="text-[16px] font-bold text-VeryDarkGrayishCyan ">
              {position}
            </p>
            <ul className="flex gap-2 items-center text-[12px] text-DarkGrayishCyan">
              <li>{postedAt}</li>
              <li>.</li>
              <li>{contract}</li>
              <li>.</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t-[2px] md:border-none border-gray-300 p-4 md:p-0">
          <div className="flex md:flex-nowrap flex-wrap text-[12px] gap-4 md:w-full w-3/4">
            {/* map over tags */}
            {tags
              ? tags.map((tag, index) => (
                  <div
                    key={index}
                    onClick={() => handleFilter(tag)}
                    className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold cursor-pointer"
                  >
                    {tag}
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
