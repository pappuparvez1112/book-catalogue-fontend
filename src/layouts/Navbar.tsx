import { auth } from '@/lib/firebase';
import { setSearchBook } from '@/redux/features/products/productSlice';
import { setUser } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/images/2f3f5bd0e6147ece4e87adbb732dca76f6fc549e-423x420.png';
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
    });
  };
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <img className="h-14 w-20" src={logo} alt="log" />
          </div>

          <div>
            <ul className="flex items-center">
              {/* <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li> */}
              <li>
                <Button variant="link" asChild>
                  <Link to="/books">Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/addBooks">Add Books</Link>
                </Button>
              </li>
              <li>
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
              </li>
              {/* <li>
                <Cart />
              </li> */}
              <li className="ml-5">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}