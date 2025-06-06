import AuthSocialLogin from '@/components/auth/social-login';
import Paper from '@/components/ui/paper';
import Link from 'next/link';

export default async function AuthSignupPage() {
  return (
    <div>
      <div className="mb-4 text-center">
        <h1 className="text-2xl">Signup</h1>
      </div>
      <Paper>
        <form>
          <div>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Firstname"
              required
              autoComplete="firstname"
              autoFocus
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Lastname"
              required
              autoComplete="lastname"
              autoFocus
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
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
              autoComplete="new-password"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              required
              autoComplete="new-password"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div>
          <p className="text-center">Or</p>
          <AuthSocialLogin />
        </div>
      </Paper>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
