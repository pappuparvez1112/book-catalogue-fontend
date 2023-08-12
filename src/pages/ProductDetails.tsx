import ProductReview from '@/components/ProductReview';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useSingleProductQuery(id);
  // console.log(product);
  console.log(isLoading);
  console.log(error);

  return (
    <>
      <div className="flex max-w-4xl items-center mx-auto items-top  m-2 justify-centerrounded-2xl h-480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <div className="w-[50%] space-y-5 ">
          <h1 className="text-3xl font-semibold">{product?.BookTitle}</h1>
          <p className="text-xl">Author: {product?.AuthorName}</p>
          <p className="text-xl">Genre: {product?.Genre}</p>
          <p className="text-xl">PublicationYear: {product?.publicationYear}</p>
          <div>
            <Link to={`/editBooks/${id}`}>
              <button className="px-4 py-2 me-5 text-white bg-blue-950 rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="px-4 py-2 text-white bg-blue-950 rounded hover:bg-blue-600">
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}