import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { createUser } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hook';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInput {
  email: string;
  password: string;
  name: string;
  contactNo: string;
}
export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInput>();

  const dispatch = useAppDispatch();

  const onSubmit = (data: SignupFormInput) => {
    console.log(data);

    dispatch(createUser({ email: data.email, password: data.password }));
    navigate('/login');
    toast.success('🦄User Created Successfully!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              id="password"
              placeholder="Password Should be 6 character"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <Input
              id="password"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <Input
              id="name"
              placeholder="Your user name"
              type="name"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('name', { required: 'Username is required' })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <Input
              id="contactNo"
              placeholder="Your ContactNo"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('contactNo', { required: 'Contactno is required' })}
            />
            {errors.contactNo && (
              <p className="text-red-500">{errors.contactNo.message}</p>
            )}
          </div>

          <Button>Create Account</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        className="flex items-center justify-between"
      >
        <p>Google</p>
        <FcGoogle />
      </Button>
      <ToastContainer />
    </div>
  );
}
