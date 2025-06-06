import Form from 'next/form';
export default async function AuthForgotPasswordPage() {
  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Please enter your email address to reset your password.</p>
      <Form action={async () => {
        'use server';
      }}>
        <input type="email" placeholder="Email" required />
        <button type="submit">Send Reset Link</button>
      </Form>
    </div>
  );
}
