import type { IconType } from "react-icons/lib";

interface FancyLinkProps {
  href: string;
  text: string;
  Icon: IconType
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string
}

export default function FancyLink({ href, text, Icon, target, className }: FancyLinkProps) {
  return (
    <div className="flex flex-col">
      <a target={target ? target : '_self'} href={href} className={`flex basis-0 items-center gap-3 font-semibold text-lg text-orange-600 dark:text-teal-300 px-4 py-3 hover:bg-orange-400 hover:bg-opacity-20 rounded-lg transition-all ease-in-out duration-200 hover:underline underline-offset-2 dark:hover:bg-teal-700 dark:hover:bg-opacity-20 ${className ? " " + className : ''}`}>
        <Icon />
        <p>
          {text}
        </p>
      </a>
    </div>
  )
}
