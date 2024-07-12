import LeftList from "./LeftList";
import MidList from "./MidList";
import RightList from "./RightList";

const ChatScene = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <section className="w-4/5 h-4/5 mx-auto my-auto flex bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 rounded-lg overflow-hidden">
        <div className="w-full h-full grid grid-cols-10">
          <div className="col-span-2 flex items-stretch bg-gray-700 bg-opacity-50">
            <LeftList />
          </div>
          <div className="col-span-6 flex items-center justify-center bg-gray-600 bg-opacity-50">
            {/* <p className="desc text-left">
              Description or additional content goes here.
            </p> */}
            <MidList/>
          </div>
          <div className="col-span-2 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <RightList/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatScene;
