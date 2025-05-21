import Link from 'next/link';

export default async function AuthSignupPage() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="password">Password:</label>
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
          <label htmlFor="confirm-password">Confirm Password:</label>
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
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full"
          >
            Sign Up
          </button>
        </div>
        <div>
          <Link href="/auth/signin" className="text-blue-500">
            Already have an account? Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
