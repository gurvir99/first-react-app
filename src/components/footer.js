import '../componentStyles/footer.css';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';

function Footer() {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <p class="text-center footer">
                    © 2022 Gurvir Singh Portfolio - React
                    <a className='logoLink ms-3' href="https://linkedin.com/in/singh-gurvir" target={"_blank"}>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                    <a className='logoLink ms-1' href="https://github.com/gurvir99" target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default Footer;