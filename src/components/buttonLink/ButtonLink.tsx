import { IoChevronForward } from 'react-icons/io5';

interface ButtonLinkProps {
  text: string;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export default function ButtonLink({ text, href, target }: ButtonLinkProps) {
  return (
    <div className='w-full flex items-center align-center'>
      <a target={target ? target : '_self'} href={href} className='mx-auto'>
        <button className='text-lg font-semibold bg-orange-400 dark:bg-teal-500 py-2 px-4 rounded-lg flex justify-center items-center hover:bg-orange-300 dark:hover:bg-teal-600 text-zinc-900'>
          {text}
          <IoChevronForward />
        </button>
      </a>
    </div>
  );
}
