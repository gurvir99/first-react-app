import '../componentStyles/about.css';
import profilePic from '../images/profile.jpg';
import resume from '../images/Resume.pdf';

function About() {
    return (
      <div class="card mb-3 text-center">
        {/* <img class="aboutImg card-img-top" src={logo} alt="Logo" /> */}
        
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col">
              <img class="profileImg" src={profilePic} alt="Logo" />
              </div>
              <div class="col bio">
                <h5 class="card-title">Who Am I?</h5>
                <p class="card-text">Hi everyone, my name is Gurvir Singh. I am from India, but I grew up in Italy. Currently, I am in my third year of the Software Engineering Technology
                program at Centennial College. My main interest is front-end programming, especially UI Design. </p>
                <p class="card-text">Apart from that, I am a huge soccer fan, I love travelling and reading. My favourite book is Animal Farm by George Orwell.</p>
                <button type="button" class="btn btn-outline-success d-flex justify-content-start mt-5">
                <a id='resumeLink' href = {resume} target = "_blank">View Resume</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;