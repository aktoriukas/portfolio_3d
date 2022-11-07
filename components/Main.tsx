import Canvas_wrapper from "../components/three/Canvas_wrapper"
import { FC, useState } from "react"
import { projects } from "../data/projects"
import Pagination from "./Pagination"
import { FullGestureState, useDrag } from "@use-gesture/react"
import Project_page from "./Project_page"

export default function Main_wrapper() {
  const [activePage, setActivePage] = useState(0)
  const [scrolling, setScrolling] = useState(false)
  const bind = useDrag((state) => handleDrag(state))

  const srollingTimout = 1500
  const scrollThreshold = 20
  const touchThreshold = 10

  const handleScroll = (e: { deltaY: any }) => {
    const delta = e.deltaY

    // scrool down
    if (delta > 0 && delta > scrollThreshold && !scrolling) scrollDown()
    // scroll up
    else if (delta < 0 && delta < Math.abs(scrollThreshold) && !scrolling) scrollUp()
  }

  const handleDrag = (
    state: Omit<FullGestureState<"drag">, "event"> & { event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent }
  ) => {
    if (state.direction[1] > 0 && state.distance[1] > touchThreshold && !scrolling) scrollUp()
    else if (state.direction[1] < 0 && state.distance[1] > touchThreshold && !scrolling) scrollDown()
  }

  const scrollDown = () => {
    setScrolling(true)
    let nextPage = activePage + 1 > projects.length - 1 ? projects.length - 1 : activePage + 1
    setActivePage(nextPage)
    setTimeout(() => setScrolling(false), srollingTimout)
  }
  const scrollUp = () => {
    setScrolling(true)
    let prevPage = activePage - 1 < 0 ? 0 : activePage - 1
    setActivePage(prevPage)
    setTimeout(() => setScrolling(false), srollingTimout)
  }

  return (
    <div className="all-wrapper" onWheel={handleScroll} {...bind()}>
      <div className="canvas-wrapper">
        <Canvas_wrapper activePage={activePage} />
      </div>
      <div className="content-container">
        <CustomWindow activePage={activePage} />
        <Pagination activePage={activePage} setActivePage={setActivePage} />
      </div>
    </div>
  )
}

interface CustomWindowProps {
  activePage: number
}

const CustomWindow: FC<CustomWindowProps> = ({ activePage }) => {
  return <Project_page project={projects[activePage]} />
  switch (activePage) {
    case 0:
      return <Project_page project={projects[0]} />
    case 1:
      return <Project_page project={projects[1]} />
    case 2:
      return <Project_page project={projects[2]} />
    case 3:
      return <Project_page project={projects[3]} />
    case 4:
      return <Project_page project={projects[4]} />
    case 5:
      return <div>Projects 5</div>
    case 6:
      return <div>Projects 6</div>
    default:
      return <div>Home2</div>
  }
}
