import { auth } from '@/lib/firebase';
import { setSearchBook } from '@/redux/features/Books/bookSlice';
import { setUser } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/dd64da585bc57cb05e5fd4d8ce873f57.png';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

export default function Navbar() {
  const navigate = useNavigate();
  const { text } = useParams();

  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const [input, setInput] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(setSearchBook(input));
  };

  const handleLogout = () => {
    console.log('Logout');
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
      navigate('/');
      toast.success('🦄User Logged Out Successfully!', {
        position: 'top-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    });
  };
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-center w-full md:max-w-7xl h-full mx-auto">
          <div>
            <Link to="/">
              <img className="h-14 w-50" src={logo} alt="log" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="link" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/books">Books</Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/addBooks">Add Books</Link>
            </Button>
            <Link to={`/booksNameSearch/${text}`}>
              <div className="form-control">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="input input-bordered w-24 md:w-auto"
                  />
                </form>
              </div>
            </Link>
            <div className="mx-5">
              <h2 className="mr-5">{user.name}</h2>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile menu toggle button */}
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Responsive mobile menu */}
          <div className="md:hidden mt-2">
            <div className="flex flex-col space-y-2">
              <Button variant="link" asChild>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="link" asChild>
                <Link to="/books">Books</Link>
              </Button>
              <Button variant="link" asChild>
                <Link to="/addBooks">Add Books</Link>
              </Button>
              <Link to={`/booksNameSearch/${text}`}>
                <div className="form-control">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="search"
                      name="search"
                      placeholder="Search"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="input input-bordered w-24 md:w-auto"
                    />
                  </form>
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex ">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar>
                  <AvatarImage src="https://live.staticflickr.com/65535/53108000721_0fd1a3e64d_s.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
                {!user.email && (
                  <>
                    <Link to="/login">
                      <DropdownMenuItem className="cursor-pointer">
                        Login
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/signup">
                      <DropdownMenuItem className="cursor-pointer">
                        Sign up
                      </DropdownMenuItem>
                    </Link>
                  </>
                )}
                {user.email && (
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}
