import './navBar.scss';
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  NotificationsNoneOutlined,
  FullscreenExitOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
} from '@mui/icons-material';

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>{' '}
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>

          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://i.ibb.co/hLh79cs/IMG-3266.jpg"
              alt="IMG-3266"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
