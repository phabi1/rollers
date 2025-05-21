import Link from "next/link";

export default async function AuthSigninPage() {
  return (
    <form>
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
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 w-full"
        >
          Sign In
        </button>
      </div>
      <div>
        <Link href="/auth/forgot-password" className="text-blue-500">
          Forgot Password?
        </Link>
      </div>
      <div>
        <Link href="/auth/signup" className="text-blue-500">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
