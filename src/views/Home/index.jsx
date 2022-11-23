import MainLayout from "../../layouts/MainLayout";
import GetM5 from "../../moduls/HomeModuls/GetM5";
import GetLatest from "../../moduls/HomeModuls/GetLatest";
import GetHistory from "../../moduls/HomeModuls/GetHistory";

const Home = () => {
  return (
    <MainLayout>
      <GetLatest />
      <GetHistory />
      <GetM5 />
    </MainLayout>
  );
};

export default Home;
