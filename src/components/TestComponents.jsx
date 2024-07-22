import { landmarksData } from "../utils/DummyData";
const TestComponents = () => {
  return (
    <div className="grid grid-cols-4">
      {landmarksData?.map((data) => {
        return (
          <div className="border-2 round">
            <p>{data.name}</p> <p>{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TestComponents;
