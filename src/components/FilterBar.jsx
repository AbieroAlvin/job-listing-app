const FilterBar = ({ filters, clearFilters, removeFilter }) => {
  if (filters.length === 0) {
    return null; // Don't render the component if there are no selected filters
  }
  return (
    <div className="bg-white shadow-lg text-DesaturatedDarkCyan p-4 mb-4 rounded-md w-full">
      <div className="flex items-center justify-between">
        <div className="flex">
          {filters.map((filter, index) => (
            <div
              key={index}
              className="bg-FilterGrayishCyan rounded-md font-bold cursor-pointer mr-2 flex items-center"
            >
              <span className="text-[10px] text-DesaturatedDarkCyan px-2">
                {filter}
              </span>

              <button
                className="bg-DesaturatedDarkCyan hover:bg-VeryDarkGrayishCyan text-white px-2 py-1 rounded-r-md"
                onClick={() => removeFilter(filter)}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={clearFilters}
          className="text-[14px] underline underline-offset-4"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
