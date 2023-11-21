import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
 
  chartBoxConversion,
  chartBoxProduct,
 
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="box box2  home_container_item">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="box box3 home_container_item">
          <ChartBox {...chartBoxProduct} />
        </div>
        <div className="box box5 home_container_item">
          <ChartBox {...chartBoxConversion} />
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="home">
        <div className="box box7">
          <BigChartBox />
        </div>

        <div className="box box1">
          <TopBox />
        </div>
      </div>
    </>
  );
};

export default Home;
