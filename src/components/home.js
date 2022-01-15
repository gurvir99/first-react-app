import '../componentStyles/home.css';
import {Link, NavLink} from 'react-router-dom';

function Home() {
    return (
      <div class={"home"}>
        <p className={'hero text-center'}>Hi, I'm Gurvir!</p>
        <p className={'subTitle text-center'}>I am a Software Engineering Technology student.</p>
        <figure class="text-center">
          <blockquote>
            <p>' There is nothing in the world so irresistibly contagious as laughter and good humor.'</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Charles Dickens, <cite title="Source Title">A Christmas Charol</cite>
          </figcaption>
        </figure>
        <div class="text-center">
          <button type="button" class="btn btn-danger rounded-pill">
            <Link className={'link'} to={"/about"}>
              <p className={'aboutLink'}>About Me</p>
            </Link>
          </button>
        </div>
      </div>
    );
}
  
export default Home;