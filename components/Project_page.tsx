import { FC, useEffect, useState } from "react"
import { ProjectType } from "../data/projects"

interface Project_pageProps {
  project: ProjectType
}

const Project_page: FC<Project_pageProps> = ({ project }) => {
  const iconprops = {
    size: 30,
  }
  const [activeProject, setActiveProject] = useState(null as null | ProjectType)
  const [animationState, setAnimationState] = useState("exit" as "enter" | "exit")

  useEffect(() => handleChange(), [project])

  const handleChange = () => {
    setAnimationState("exit")
    setTimeout(() => {
      setActiveProject(project)
    }, 1500)
    setTimeout(() => {
      setAnimationState("enter")
    }, 2500)
  }

  if (activeProject === null) return null

  return (
    <div className="project-container">
      <div className="content" data-animation={animationState}>
        <h1>{project.title}</h1>
        <div className="stack-list-wrapper">
          <ul className="stack-list">
            {activeProject &&
              activeProject.stackIcons &&
              activeProject.stackIcons.map((item, index) => <li key={index}>{item(iconprops)}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Project_page
