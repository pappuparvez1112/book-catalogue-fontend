import banner from '@/assets/images/Fiction-Book-Covers.webp';
import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            BOOK <br /> CATALOGUE
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Lorem ipsum dolor sit amet consectetur,
          </p>
          <div className="text-primary mt-20">
            <p>Lorem ipsum dolor sit amet consectetur,</p>
            <p>Lorem ipsum dolor sit amet consectetur,</p>
          </div>
          <Button className="mt-5">Explore more</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      {/* <div className="mb-96">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/books">Brows all products</Link>
          </Button>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
