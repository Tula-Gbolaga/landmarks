import { Button, LandmarkList, Navbar } from "../components";
import { landmarksData } from "../utils/DummyData";

const Home = () => {
  return (
    <>
      <Navbar>
        <div className="flex justify-center my-2">
          <Button title={" Create Landmark"} />
        </div>
        <LandmarkList data={landmarksData} />
      </Navbar>
    </>
  );
};
export { Home };
