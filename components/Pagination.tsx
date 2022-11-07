import type { Dispatch, FC, SetStateAction } from "react"
import { projects } from "../data/projects"

interface PaginationProps {
  activePage: number
  setActivePage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<PaginationProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="pagination-container">
      {projects.map((project, index) => (
        <button onClick={() => setActivePage(index)} key={index} className={`pagination-item ${activePage === index ? "active" : ""}`} />
      ))}
    </div>
  )
}
export default Pagination
