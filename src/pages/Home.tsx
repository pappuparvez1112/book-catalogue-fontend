import banner from '@/assets/images/Fiction-Book-Covers.webp';
import fiction2 from '@/assets/images/gyeongbokgung-palace-twilight-seoul-south-korea_335224-1365.jpg';
import fiction3 from '@/assets/images/happy-couple-man-woman-standing-front-burning-bonfire.jpg';
import fiction1 from '@/assets/images/open-book-with-fairytale-scene_52683-107845.avif';
import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="bg-black flex mb-16 justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div className="ms-40">
          <h1 className="text-6xl font-black text-primary mb-2 text-gray-200">
            BOOK <br /> CATALOGUE
          </h1>
          <p className="text-secondary font-semibold text-xl text-orange-200">
            Lorem ipsum dolor sit amet consectetur,
          </p>
          <div className="text-primary mt-20 text-orange-200">
            <p>Lorem ipsum dolor sit amet consectetur,</p>
            <p>Lorem ipsum dolor sit amet consectetur,</p>
          </div>
          <Button className="mt-5 hover:bg-orange-700">
            <Link to="/books">Brows all Books from here</Link>
          </Button>
        </div>
        <div className="relative -right-14 me-14 pe-24 pt-14">
          <img src={banner} alt="" />
        </div>
      </section>

      {/* <section
        id="about"
        className="container bg-gray-100 py-16 pt-14 max-w-7xl"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            exercitationem, eaque quisquam fugit libero odio delectus non odit
            iste animi?
          </p>
        </div>
      </section>
      <section id="services" className="bg-white p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Offline</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                itaque maxime quod consequatur debitis!
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Online</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                placeat eligendi voluptatum distinctio quos!
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* feature section */}

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
      <Footer />
    </>
  );
}
