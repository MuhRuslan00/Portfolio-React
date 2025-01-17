import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

import { projects } from "../components/helpers/ProjectsList";


const Project = () => {
  const {id} = useParams();
  const project = projects[id];

  // console.log(project);
  return (
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
                
                <img src={project.img} alt={project.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

                {project.gitHubLik && (
                <BtnGitHub link="https://github.com"/>
                )}
                
            </div>
        </div>
    </main>
  );
}
  
export default Project;

                
