import '../componentStyles/nav.css';
import {Link, NavLink} from 'react-router-dom';
import $ from 'jquery';
import logo from '../images/image.png';

function Nav() {
    return (
        <div className={'menu d-flex justify-content-center'}>
            <ul>
                <li> <img src={logo} alt="Logo" /></li>
                <li >
                    <Link className={'link'} exact to={"/"}>
                        <p className={'navLink'}>HOME</p>
                    </Link>
                </li>
                <li >
                    <Link className={'link'} to={"/about"}>
                        <p className={'navLink'}>ABOUT</p>
                    </Link>
                </li>
                <li >
                    <Link className={'link'} to={"/projects"}>
                        <p className={'navLink'}>PROJECTS</p>
                    </Link>
                </li>
            </ul>   
        </div>
    );
  }

  export default Nav;