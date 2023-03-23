import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";

import './Header.css';


function Header(){
    return(
        <div className="NavBar">
            <div className="header__left">
                left header
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title={"Home"}/>
                <HeaderOption Icon={InfoIcon} title={"About Me"}/>
                <HeaderOption Icon={ConstructionIcon} title={"Skills"}/>
                <HeaderOption Icon={CodeIcon} title={"Projects"}/>
                <HeaderOption Icon={AlternateEmailIcon} title={"Contact"}/>
            </div>
        </div>
    )
}
export default Header;