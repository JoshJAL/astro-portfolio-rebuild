import { IoChevronForward } from "react-icons/io5";

interface BreadCrumbProps {
  projectTitle: string;
  breadCrumbTitle: string;
  breadCrumbLink: string;
  year: string | number;
}

export default function BreadCrumb({ projectTitle, breadCrumbTitle, breadCrumbLink, year }: BreadCrumbProps) {
  return (
    <div className="flex items-center mb-5">
      <a className="md:text-xl text-lg text-orange-600 dark:text-teal-300 hover:underline underline-offset-2 cursor-pointer" href={breadCrumbLink}>{breadCrumbTitle}</a>
      <IoChevronForward className="mx-1" />
      <h1 className="md:text-xl text-lg font-bold">{projectTitle}</h1>
      <p className="text-sm ml-2 bg-orange-200 dark:bg-teal-200 dark:bg-opacity-20 rounded-lg p-2 font-semibold">{year}</p>
    </div>
  )
}
