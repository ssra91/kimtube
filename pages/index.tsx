import Home from "@/src/views/Home";
import { NEXT_PUBLIC_API_KEY } from "@/src/constants/config";

const HomePage = () => {
  console.log("@@ API_KEY", NEXT_PUBLIC_API_KEY);
  return <Home />;
};

export default HomePage;
