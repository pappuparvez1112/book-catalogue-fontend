import banner from '@/assets/images/Fiction-Book-Covers.webp';
import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <section className="bg-indigo-400 flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div className="ms-40">
          <h1 className="text-6xl font-black text-primary mb-2 ">
            BOOK <br /> CATALOGUE
          </h1>
          <p className="text-secondary font-semibold text-xl text-black">
            Lorem ipsum dolor sit amet consectetur,
          </p>
          <div className="text-primary mt-20">
            <p>Lorem ipsum dolor sit amet consectetur,</p>
            <p>Lorem ipsum dolor sit amet consectetur,</p>
          </div>
          <Button className="mt-5 hover:bg-orange-700">Explore more</Button>
        </div>
        <div className="relative -right-14 me-14 pe-24 pt-14">
          <img src={banner} alt="" />
        </div>
      </section>
      {/* <div className="mb-96">
        <div>
          <img className="mx-auto" src={banner} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            Upcomming Books to see
          </h1>
          <Button className="mt-10">
            <Link to="/books">Brows all Books from here</Link>
          </Button>
        </div>
      </div> */}
      {/* <section className=" bg-indigo-400 text-white flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto">
        <div className="container mx-auto text-center justify-items-center pt-14">
          <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4">Discover your Favourite books.</p>

          <div className="flex-1">
            <div>
              <img className="h-200 w-100" src={banner} alt="" />
            </div>
            <div>
              <Link
                to="/books"
                className="mt-6 mx-auto bg-white text-blue-500 hover:bg-blue-400 py-2 px-4 rounded-full inline-block"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section
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
      </section>
      <Footer />
    </>
  );
}
