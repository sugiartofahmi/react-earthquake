import MainLayout from "../../layouts/MainLayout";
import GetM5 from "../../moduls/HomeModuls/GetM5";
import GetLatest from "../../moduls/HomeModuls/GetLatest";

const Home = () => {
  return (
    <MainLayout>
      <GetLatest />
      <GetM5 />
    </MainLayout>
  );
};

export default Home;
