/* eslint-disable @typescript-eslint/no-unused-vars */

import { toast } from '@/components/ui/use-toast';
import { usePostProductMutation } from '@/redux/features/Books/bookApi';
import { addToCart } from '@/redux/features/Books/bookSlice';
import { useAppDispatch } from '@/redux/hook';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

export default function AddBook() {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const [inputValue, setInputValue] = useState<string>('');

  const [postProduct, { isLoading, isError }] = usePostProductMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(postProduct);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onInputChange = async (event: any) => {
    console.log(event.target.files[0]);
    // setInputValue(event.target.files[0]);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData);
    try {
      const response = await fetch(img_hosting_url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setInputValue(data.data.display_url);
        console.log(setInputValue);
        // data.data.display_url;
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error in uploadImgBB:', error);
      throw error;
    }
  };

  const handleSubmit = async (event: {
    preventDefault: () => void;

    target: any;
  }) => {
    event.preventDefault();

    const form = event.target;
    const BookImage = inputValue;
    const BookTitle = form.BookTitle.value;
    const AuthorName = form.AuthorName.value;
    const Genre = form.Genre.value;
    const publicationYear = form.publicationYear.value;

    const projects = {
      BookImage,
      BookTitle,
      AuthorName,
      Genre,
      publicationYear,
    };
    console.log(projects);

    await postProduct(projects);

    dispatch(addToCart(projects));
    form.reset();
    setInputValue('');

    navigate('/books');
    toast({
      description: 'Book Added Successfully',
    });
  };

  console.log(img_hosting_token);

  return (
    <form
      className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4"> Submit Books Details</h2>

      <div className="mb-4">
        <label
          htmlFor="BookImage"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          BookImage:
        </label>
        <input
          type="file"
          name="BookImage"
          id="BookImage"
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          onChange={onInputChange}
        />
      </div>

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
