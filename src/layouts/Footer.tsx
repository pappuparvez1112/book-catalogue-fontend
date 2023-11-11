import logo from '@/assets/images/dd64da585bc57cb05e5fd4d8ce873f57.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-5 md:p-10 lg:p-20">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="mb-5 md:mb-0 lg:mb-0 md:mr-10 lg:mr-10">
          <img className="h-20 w-30" src={logo} alt="Logo" />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 md:gap-20 lg:gap-20 mb-5 md:mb-0 lg:mb-0">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Books</li>
            <li>How is coming</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <Link to="https://www.facebook.com">
            <RiFacebookBoxFill />
          </Link>
          <Link to="https://www.instagram.com">
            <RiInstagramLine />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row w-full mt-5 md:mt-10 lg:mt-20 gap-5">
        <p className="text-xs">Privacy Policy</p>
        <p className="text-xs">Terms & Conditions</p>
        <p className="ml-auto text-xs"> &#169; BookCatalog {year}</p>
      </div>
    </div>
  );
}
