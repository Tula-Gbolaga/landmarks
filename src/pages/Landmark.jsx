import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import { landmarksData } from "../utils/DummyData";

const Landmark = () => {
  const { landmarkId } = useParams();
  const landmark = landmarksData?.[landmarkId];
  return (
    <Navbar>
      <p className=" font-bold text-[30px] py-3">{landmark?.name}</p>
      <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/reachcinema-8bcaf.appspot.com/o/pexels-sevenstormphotography-575362.jpg?alt=media&token=ce3b91e2-08fe-4997-9701-e15c02be4f4b')] w-full h-[60vh]  bg-no-repeat bg-center bg-cover my-2  "></div>
      <p className="text-[20px]">{landmark?.description}</p>
      <p>{`Created By: ${
        landmark?.createdBy
      } at ${new Date().toDateString()} `}</p>
      <p>{`Last Updated: ${landmark?.createdBy}`}</p>
    </Navbar>
  );
};
export { Landmark };
