import Home from "@/src/views/Home";
import { API_KEY } from "@/src/constants/config";

const HomePage = () => {
  console.log("@@ API_KEY", API_KEY);
  return <Home />;
};

export default HomePage;
