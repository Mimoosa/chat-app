import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] w-full p-6 rounded-lg shadow-md bg-white/20 backdrop-blur-lg border border-white/30">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
