import AuthSocialLogin from '@/components/auth/social-login';
import Paper from '@/components/ui/paper';
import Link from 'next/link';
import { sign } from './actions';
import { useTranslations } from 'use-intl';

export default async function AuthSigninPage() {
  const t = await useTranslations('signin');

  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="text-2xl">{t('title')}</h1>
      </div>
      <Paper>
        <form action={sign}>
          <div>
            <label htmlFor="login">Login</label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder="Login"
              required
              autoComplete="username"
              autoFocus
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="current-password"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <Link href="/auth/forgot-password" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center">Or</p>
          <AuthSocialLogin />
        </div>
      </Paper>
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
