import { useState } from "react";

const TAB_COUNT = 3;
const data = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Quidem corrupti quam, perferendis accusamus et culpa?",
  "Quisquam totam tempora itaque quos exercitationem animi officia expedita iusto pariatur, aliquid omnis voluptatem dignissimos",
];
function App() {
  const [currentTabIndex, setCurrentTabindex] = useState<number>(0);
  const handleTbSwitch = (index: number) => {
    setCurrentTabindex(index);
  };
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <div className="flex gap-2">
        {new Array(TAB_COUNT).fill(0).map((_, i) => (
          <button
            onClick={() => handleTbSwitch(i)}
            className="border px-2 py-1 rounded-md"
          >
            Tab {i + 1}
          </button>
        ))}
      </div>
      <div>
        {/* {data?.map((_, i) => {
          return (
            <p className={`${i === currentTabIndex ? "" : "hidden"}`}>
              {data[i]}
            </p>
          );
        })} */}
        <p>{data[currentTabIndex]}</p>
      </div>
    </main>
  );
}

export default App;
