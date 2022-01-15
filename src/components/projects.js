import '../componentStyles/projects.css';
import reactPortfolio from '../images/react.jpg';
import tornadoProject from '../images/tornado.png';
import androidProject from '../images/android.jpg';
import frontEndProjects from '../images/frontend.jpg';

function Projects() {
    return (
        <div className='projectPage w-75'>
            <h3 className='projectsTitle d-flex justify-content-center'>My Projects</h3>
            <p className='projectsSub d-flex justify-content-center mb-5 mt-5'>Here are some of the projects/assignments I worked on during my last semesters of the Software Engineering Technology program.</p>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Project</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-50"> <img class="projectImg d-flex justify-content-center" src={frontEndProjects} alt="frontEndProjects" /></td>
                        <td class="fw-bold">Front-End Development</td>
                        <td className='desc'>During my experience as a Media Developer Co-op student at Pearson Canada (09/2021 to 12/2021), I worked on 2 main
                            web application projects alongside other Co-op students. In particular, I had the opportunity to build the front-end side
                            of these applications by using HTML, CSS, JavaScript, Node JS and many other libraries like Tabulator JS. Furthermore,
                            I practiced project planning, which included creating wireframes and the pseudocode, performed code refactoring, testing and
                            bug fixing.
                        </td>
                    </tr>
                    <tr>
                        <td className="w-50"> <img class="projectImg d-flex justify-content-center" src={tornadoProject} alt="tornadoProject" /></td>
                        <td class="fw-bold"><a href="https://tornado-runnergy.herokuapp.com/home"  target={"_blank"}>Tornado</a> - UI Design (Group Project)</td>
                        <td>
                            In my fall semester of 2020, I worked on a group project to build a fully functional website for creating tournaments.
                            We completed this project using HTML, CSS, JavaScript, Express JS and Node JS libraries. As for myself, I worked on
                            the UI design of the website by creating the wireframes and the final user interface along with the team members.
                        </td>
                    </tr>
                    <tr>
                        <td className="w-50"> <img class="projectImg d-flex justify-content-center" src={reactPortfolio} alt="reactProject" /></td>
                        <td class="fw-bold"><a href="https://react-portfolio-gurvir-singh.herokuapp.com/"  target={"_blank"}>Portfolio</a> Website using React</td>
                        <td>In this personal project, I used React to build a simple Portfolio website using HTML, CSS, Node JS and libraries such
                            as Bootstrap and FontAwesome.
                        </td>
                    </tr>
                    <tr>
                        <td className="w-50"> <img class="projectImg d-flex justify-content-center" src={androidProject} alt="androidProject" /></td>
                        <td class="fw-bold">Various Assignments using Android Studio</td>
                        <td>In my summer semester of 2021, I used Android Studio to create simple mobile apps for course assignments.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
  
  export default Projects;