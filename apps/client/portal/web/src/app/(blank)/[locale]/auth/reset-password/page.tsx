export default async function AuthResetPasswordPage() {
  return (
    <div>
      <h1>Reset Password</h1>
      <p>Please enter your new password.</p>
      <form>
        <label>
          New Password:
          <input type="password" name="new-password" required />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
