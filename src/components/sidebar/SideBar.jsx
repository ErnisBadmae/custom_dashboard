import './sideBar.scss';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">logo application</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">ГЛАВНАЯ</p>
          <li>
            <HomeIcon className="icon" />
            <span>Подтверждение Добросовестности СДС (Заявление СДС)</span>
          </li>
          <li>
            <HomeIcon className="icon" />
            <span>Оценка Компетенций ОС (Заявление ОС)</span>
          </li>
          <li>
            <HomeIcon className="icon" />
            <span>Сертификация (Заявление Сертификация)</span>
          </li>
          <li>
            <HomeIcon className="icon" />
            <span>Аттестация Эксперта</span>
          </li>

          <p className="title">СПИСОК РЕЕСТРОВ</p>

          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Реестр СДС</span>
          </li>
          <li>
            <ViewInArOutlinedIcon className="icon" />
            <span>Реестр ОС</span>
          </li>
          <li>
            <ViewInArOutlinedIcon className="icon" />
            <span>Реестр Сертификатов</span>
          </li>
          <li>
            <ViewInArOutlinedIcon className="icon" />
            <span>Реестр Экспертов</span>
          </li>
          <p className="title">ПОЛЬЗОВАТЕЛЬСКИЙ ИНТЕРФЕЙС</p>

          <li>
            <WorkspacesOutlinedIcon className="icon" />
            <span>Сообщения</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Пользователи</span>
          </li>
          <p className="title">СЕРВИСЫ</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Отчеты </span>
          </li>
          {/* <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Настройки </span>
          </li>
          {/* <p className="title">USER</p>

          <li>
            <AccountBoxOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        {/* <div className="colorOption"></div> */}
      </div>
    </div>
  );
}

export default SideBar;
