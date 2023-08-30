import BookCard from '@/components/BookCard';
import Dropdown from '@/components/ui/dropdown';

import {
  useGetProductsQuery,
  useSearchBookTitleQuery,
} from '@/redux/features/Books/bookApi';
import { setFilterProduct } from '@/redux/features/Books/bookSlice';

import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Books() {
  const dispatch = useDispatch();
  const { search, products, filter } = useAppSelector(
    (state: { product: any }) => state.product
  );
  console.log(search, 'searchcheck');
  const { data: searchResult } = useSearchBookTitleQuery(search);

  const { data, isLoading, error } = useGetProductsQuery({ products });

  const handleClick = () => {
    dispatch(setFilterProduct(filter));
  };

  let productsData;

  if (filter) {
    productsData = data?.filter(
      (filter: any) => filter.Genre === true && filter.publicationYear === true
    );
  } else {
    productsData = data;
  }
  return (
    <div className="grid grid-cols-12 max-w-7xl pt-6 mx-auto relative ">
      <div className="col-span-2 ">
        <Dropdown buttonText="Filter Catagories">
          <Link
            to="/books"
            className="block px-4 py-2 text-sm text-gray-900 hover:bg-orange-300"
          >
            Genre
          </Link>
          <Link
            to="/books"
            className="block px-4  py-2 text-sm  text-gray-900 hover:bg-orange-300"
          >
            PublicationYear
          </Link>
        </Dropdown>
      </div>

      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {isLoading && <h2>...loading</h2>}
        {error && <h2>something went wrong</h2>}

        {
          filter === true
            ? productsData.map((book: IBook) => <BookCard book={book} />)
            : search === ''
            ? data?.map((book: IBook) => <BookCard book={book} />)
            : searchResult?.length > 0 &&
              searchResult?.map((book: IBook) => <BookCard book={book} />)
          //  &&
          // productsData?.map((book: IBook) => <BookCard book={book} />)
        }
      </div>
    </div>
  );
}
