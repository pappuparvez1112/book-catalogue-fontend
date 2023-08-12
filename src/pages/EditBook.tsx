import { toast } from '@/components/ui/use-toast';
import { useUpdateProductMutation } from '@/redux/features/products/productApi';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditBook() {
  // const [formValue, setFormValue] = useState<string>('');

  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const [updateProduct, { isLoading, error }] = useUpdateProductMutation();
  console.log(isLoading);

  const handleUpdateSubmit = async (event: {
    preventDefault: () => void;
    target: any;
  }) => {
    console.log(handleUpdateSubmit);

    event.preventDefault();

    const form = event.target;
    const BookTitle = form.BookTitle.value;
    const AuthorName = form.AuthorName.value;
    const Genre = form.Genre.value;
    const publicationYear = form.publicationYear.value;

    const projects = {
      BookTitle,
      AuthorName,
      Genre,
      publicationYear,
    };

    form.reset();
    setInputValue('');

    await updateProduct(projects);
    navigate('/');
    toast({
      description: 'Book Edit Successfully',
    });
  };

  return (
    <form
      className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md"
      onSubmit={handleUpdateSubmit}
    >
      <h2 className="text-2xl font-bold mb-4"> Edit Books Details</h2>

      <div className="mb-4">
        <label
          htmlFor="BookTitle"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Book Title:
        </label>
        <input
          type="text"
          id="BookTitle"
          name="BookTitle"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="AuthorName"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Author Name:
        </label>
        <input
          type="text"
          id="AuthorName"
          name="AuthorName"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="Genre"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Genre:
        </label>

        <input
          type="text"
          id="Genre"
          name="Genre"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="publicationYear"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          publicationYear:
        </label>
        <input
          type="text"
          id="publicationYear"
          name="publicationYear"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-950 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
