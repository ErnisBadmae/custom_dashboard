import NavBar from '../../components/navbar/NavBar';
import SideBar from '../../components/sidebar/SideBar';
import Widget from '../../components/widget/Widget';
import './home.scss';

function Home(props) {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          
        </div>
      </div>
    </div>
  );
}

export default Home;
