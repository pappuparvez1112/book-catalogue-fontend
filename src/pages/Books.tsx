import ProductCard from '@/components/BookCard';
import {
  useGetProductsQuery,
  useSearchBookTitleQuery,
} from '@/redux/features/Books/bookApi';

import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

export default function Books() {
  const { search } = useAppSelector((state) => state.product);
  console.log(search, 'searchcheck');
  const { data: searchResult } = useSearchBookTitleQuery(search);

  const { data, isLoading, error } = useGetProductsQuery({});

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-cyan-300">
            Filter
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Genre
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Publication Year
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {isLoading && <h2>...loading</h2>}
        {error && <h2>something went wrong</h2>}

        {search === ''
          ? data?.map((book: IBook) => <ProductCard book={book} />)
          : searchResult?.length > 0 &&
            searchResult?.map((book: IBook) => <ProductCard book={book} />)}
      </div>
    </div>
  );
}
