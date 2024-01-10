import data from "./data/data.json";
import bgDesk from "./assets/images/bg-header-desktop.svg";
import bgMobile from "./assets/images/bg-header-mobile.svg";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-full font-body ">
        <div className="w-full top-0  bg-cyan-100  z-[-1]">
          <img src={bgDesk} alt="/" className="md:block hidden" />
          <img src={bgMobile} alt="/" className="md:hidden block w-full" />
        </div>
        <div className="mb-6 flex flex-col justify-center gap-6 z-40 bg-cyan-200 p-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex md:flex-row md:justify-between flex-col gap-4 items-center p-4 shadow-lg rounded-md max-w-[960px] bg-white"
            >
              <div className="flex items-center gap-4 text-[15px]">
                {/* logo */}
                <div className="">
                  <img src={item.logo} alt="/" className="w-[80px] h-[80px]" />
                </div>
                {/* details */}
                <div className="flex flex-col gap-2">
                  {/* header */}
                  <div className="flex gap-2 items-center">
                    <p className="text-[13px] text-DesaturatedDarkCyan font-bold">
                      {item.company}
                    </p>
                    <ul className="flex gap-2 text-[10px] text-white">
                      {item.featured === true && (
                        <li className="uppercase bg-VeryDarkGrayishCyan py-1 px-2 rounded-full">
                          featured
                        </li>
                      )}
                      {item.new === true && (
                        <li className="uppercase bg-DesaturatedDarkCyan py-1 px-2 rounded-full">
                          new!
                        </li>
                      )}
                    </ul>
                  </div>
                  {/* position */}
                  <p className="text-[16px] font-bold text-VeryDarkGrayishCyan ">
                    {item.position}
                  </p>
                  <ul className="flex gap-2 items-center text-[12px] text-DarkGrayishCyan">
                    <li>{item.postedAt}</li>
                    <li>.</li>
                    <li>{item.contract}</li>
                    <li>.</li>
                    <li>{item.location}</li>
                  </ul>
                </div>
              </div>

              <div>
                <ul className="flex text-[12px] gap-4">
                  <li className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold">
                    {item.role}
                  </li>
                  <li className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold">
                    {item.level}
                  </li>

                  {item.tools.map((tool) => (
                    <li
                      className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold"
                      key={item.id}
                    >
                      {tool}
                    </li>
                  ))}
                  {item.languages.map((language) => (
                    <li
                      className="bg-FilterGrayishCyan px-2 py-1 rounded-md text-DesaturatedDarkCyan font-bold"
                      key={item.id}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
