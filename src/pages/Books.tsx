import BookCard from '@/components/BookCard';

import {
  useGetProductsQuery,
  useSearchBookTitleQuery,
} from '@/redux/features/Books/bookApi';
import { setFilterProduct } from '@/redux/features/Books/bookSlice';

import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { useDispatch } from 'react-redux';

export default function Books() {
  // const [items, setItems] = useState([]);
  // console.log(items, 'data');
  // const [filterData, setFilterData] = useState([]);
  // console.log(filterData);
  const dispatch = useDispatch();
  const { search, products, filter } = useAppSelector(
    (state: { product: any }) => state.product
  );
  console.log(search, 'searchcheck');
  const { data: searchResult } = useSearchBookTitleQuery(search);

  const { data, isLoading, error } = useGetProductsQuery({ products });
  // console.log(data);

  const handleClick = () => {
    dispatch(setFilterProduct(filter));
  };

  let productsData;
  console.log(productsData);

  if (filter) {
    productsData = data?.filter(
      (filter: any) => filter.Genre.trim() === 'Design'
    );
  } else {
    productsData = data;
  }

  // const filterItem = (genreItem: string) => {
  //   const updateItems = data.filter((curElem: any) => {
  //     // console.log(genreItem, curElem);
  //     return curElem.Genre.trim() === genreItem;
  //   });
  //   // console.log(updateItems, data, 'data check');
  //   setItems(updateItems);
  // };

  return (
    <div className="grid grid-cols-8 grid-rows-3 ms-28 pt-6 relative ">
      {/* <div className="col-span-2 flex">
        <Dropdown buttonText="Genre">
          <option
            onClick={() => handleClick}
            className="  py-2 text-sm text-gray-900 hover:bg-orange-300"
          >
            Design
          </option>
          <option className="  py-2 text-sm text-gray-900 hover:bg-orange-300">
            ui/ux
          </option>
        </Dropdown>
        <div className="">
          <Dropdown buttonText="PublicationYear">
            <option className="  py-2 text-sm text-gray-900 hover:bg-orange-300">
              2020
            </option>
            <option className=" py-2 text-sm  text-gray-900 hover:bg-orange-300">
              2023
            </option>
          </Dropdown>
        </div>
      </div> */}

      <div className="col-span-7 grid grid-cols-3 grid-rows-3 gap-20 pb-20">
        {isLoading && <h2>...loading</h2>}
        {error && <h2>something went wrong</h2>}
        {/* {filterData
          ? data?.map((book: IBook) => <BookCard book={book} />)
          : items?.map((book) => <BookCard book={book} />)} */}

        {search === ''
          ? data?.map((book: IBook) => <BookCard book={book} />)
          : searchResult?.length > 0 &&
            searchResult?.map((book: IBook) => <BookCard book={book} />)}
      </div>
    </div>
  );
}
