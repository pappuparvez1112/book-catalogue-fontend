import logo from '@/assets/images/dd64da585bc57cb05e5fd4d8ce873f57.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-20">
      <div className="flex justify-between">
        <div>
          <img className="h-20 w-30" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Books</li>
            <li>How is comming</li>
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
        <div className="flex gap-2 text-2xl ms-10 text-center">
          <Link to="https://www.facebook.com">
            <RiFacebookBoxFill />
          </Link>
          <Link to="https://www.instagram.com">
            <RiInstagramLine />
          </Link>
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; BookCatelog {year}</p>
      </div>
    </div>
  );
}
