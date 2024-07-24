import { Button, LandmarkList, Navbar } from "../components";
import { landmarksData } from "../utils/DummyData";

const Profile = () => {
  return (
    <Navbar>
      <div className="mt-[30px]">
        <p className="text-center text-[40px] font-bold mb-[20px]">
          Welcome Gbolaga
        </p>
        <div className="flex justify-center">
          <Button title="Edit Profile" /> <Button title="Change Password" />
        </div>
        <p className="text-[20px]">Landmarks you created</p>
      </div>
      <LandmarkList data={landmarksData?.slice(12, 19)} />
    </Navbar>
  );
};
export { Profile };
