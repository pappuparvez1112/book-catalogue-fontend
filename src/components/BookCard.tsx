import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  return (
    <div>
      <div className="rounded-2xl h-480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <div className=" md:p-4 text-center md:text-left space-y-2">
          <img src={book?.BookImage} alt="" />
          <h1 className="text-xl font-semibold">{book?.BookTitle}</h1>

          <p>Author: {book?.AuthorName}</p>
          <p className="text-sm">Genre: {book?.Genre}</p>
          <p className="text-sm">publicationYear: {book?.publicationYear}</p>
          <Link to={`/product-details/${book._id}`} className="w-full">
            <Button variant="default">Book Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
