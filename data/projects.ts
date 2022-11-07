import img_1 from "../img/1.png"
import img_2 from "../img/2.png"
import img_3 from "../img/3.png"
import img_4 from "../img/4.png"

import { FaReact, FaNodeJs, FaEthereum, FaDrupal } from "react-icons/fa"
import { IconType } from "react-icons"
import { SiMongodb, SiTailwindcss, SiGatsby, SiTypescript } from "react-icons/si"

export type ProjectType = {
  id: number
  title: string
  bgColor: string
  image: string
  stack: string[]
  stackIcons?: IconType[]
  dark: boolean
  link: {
    title: string
    link: string
  } | null
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Alkimi Labs",
    bgColor: "#5E2FFA",
    image: img_1.src,
    stack: ["scss", "ethers", "mongodb", "node.js", "rest api", "web3"],
    stackIcons: [FaReact, FaNodeJs, SiMongodb, FaEthereum, SiTailwindcss, SiTypescript],
    dark: true,
    link: {
      title: "labs.alkimi.org",
      link: "https://labs.alkimi.org/",
    },
  },
  {
    id: 2,
    title: "Pure Cremation",
    bgColor: "#702D90",
    image: img_2.src,
    stack: ["gatsby", "tailwind", "drupal"],
    stackIcons: [FaReact, FaDrupal, SiGatsby, SiTailwindcss],
    dark: true,
    link: null,
  },
  {
    id: 3,
    title: "Policy Expert",
    bgColor: "#AA4465",
    image: img_3.src,
    stack: ["react", "gatsby", "typescript", "tailwind"],
    stackIcons: [FaReact, SiGatsby, SiTailwindcss, SiTypescript],
    dark: true,
    link: {
      title: "www.policyexpert.com",
      link: "https://www.policyexpert.co.uk/",
    },
  },
  {
    id: 4,
    title: "Reviti",
    bgColor: "#258351",
    image: img_4.src,
    stack: ["gatsby", "typescript", "tailwind", "azure", "mongodb", "rest api"],
    stackIcons: [FaReact, SiGatsby, SiTailwindcss, SiTypescript, SiMongodb],
    dark: true,
    link: null,
  },
  // {
  //   id: 5,
  //   title: "Invest Guide Africa",
  //   bgColor: "#2F97C1",
  //   image: img_2.src,
  //   stack: ["drupal", "sass"],
  //   stackIcons: [FaReact, SiGatsby, SiTailwindcss, SiTypescript, SiMongodb],
  //   dark: true,
  //   link: {
  //     title: "www.investguideafrica.com",
  //     link: "https://www.investguideafrica.com/",
  //   },
  // },
]
