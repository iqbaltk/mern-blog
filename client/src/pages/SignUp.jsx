import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl gap-5 mx-auto flex-col md:flex-row md:items-center'>
        {/* left */}
        <div className='flex-1'>
          <Link to='#' className=' font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white'>
              Corendev
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Your username' className='font-bold' />
              <TextInput
                type='text'
                placeholder='Your name ...'
                className=''
                id='username'
              />
              <Label value='Your email' className='font-bold' />
              <TextInput
                type='email'
                placeholder='email@email.com'
                className=''
                id='email'
              />
              <Label value='Your password' className='font-bold' />
              <TextInput
                type='password'
                placeholder='********'
                className=''
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              {" "}
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
