const LandmarkList = ({ data }) => {
  console.log("why are you moving mad");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4  p-4">
      {data?.map((data) => {
        return (
          <div className="border-2 rounded-lg p-2">
            <p className="font-bold">{data.name}</p>
            <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/reachcinema-8bcaf.appspot.com/o/pexels-sevenstormphotography-575362.jpg?alt=media&token=ce3b91e2-08fe-4997-9701-e15c02be4f4b')] w-full h-[150px]  bg-no-repeat bg-cover bg-center"></div>
            <p className="line-clamp-2">{data.description}</p>
            <p> {`Created by: ${data.createdBy}`} </p>
          </div>
        );
      })}
    </div>
  );
};
export { LandmarkList };
