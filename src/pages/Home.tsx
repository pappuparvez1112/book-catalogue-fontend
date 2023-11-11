import banner from '@/assets/images/Fiction-Book-Covers.webp';
import fiction2 from '@/assets/images/gyeongbokgung-palace-twilight-seoul-south-korea_335224-1365.jpg';
import fiction3 from '@/assets/images/happy-couple-man-woman-standing-front-burning-bonfire.jpg';
import fiction1 from '@/assets/images/open-book-with-fairytale-scene_52683-107845.avif';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="">
      <section className="bg-black  max-w-7xl mx-auto ">
        <div className="flex mb-22 justify-between">
          <div className="ms-40 mt-12 mb-12">
            <h1 className="text-6xl font-black text-primary mb-2 text-white">
              BOOK <br /> CATALOGUE
            </h1>
            <p className="text-secondary font-semibold text-xl text-orange-200">
              Lorem ipsum dolor sit amet consectetur,
            </p>
            <div className="text-primary mt-12 text-white">
              <p>Lorem ipsum dolor sit amet consectetur,</p>
              <p>Lorem ipsum dolor sit amet consectetur,</p>
            </div>
            <Button className="mt-5 hover:bg-orange-700">
              <Link to="/books">Brows all Books from here</Link>
            </Button>
          </div>
          <div className="relative -right-14 me-14 pe-24 pt-14">
            <img
              className="w-full md:w-80 md:h-80 lg:w-auto"
              src={banner}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mt-10 container bg-white  p-6">
        <h2 className="mb-10 text-center text-2xl font-semibold text-gray-800">
          Books Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <img src={fiction1} alt="Book 1" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Fiction</h3>
            <p className="text-sm text-gray-600">Author: Author Lampford</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ab deleniti in repellat corrupti corporis, a ratione distinctio
              veniam nisi.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <img src={fiction2} alt="Book 2" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              History of China
            </h3>
            <p className="text-sm text-gray-600">Author: Author Cyan</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ab deleniti in repellat corrupti corporis, a ratione distinctio
              veniam nisi.
            </p>
            {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
              Buy Now
            </button> */}
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <img src={fiction3} alt="Book 2" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Happy Living
            </h3>
            <p className="text-sm text-gray-600">Author: Author Lorem</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ab deleniti in repellat corrupti corporis, a ratione distinctio
              veniam nisi.
            </p>
            {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
              Buy Now
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
