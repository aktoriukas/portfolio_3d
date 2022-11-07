import { useState, useEffect } from "react"

type elementType = {
  current: Element | null
}

const useIntersection = (element: elementType, rootMargin: string) => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )

    element.current && observer.observe(element.current)

    return () => {
      if (element.current) observer.unobserve(element.current)
    }
  }, [])

  return isVisible
}

export default useIntersection
