import { signIn } from '@/auth';

export async function sign(formData: FormData) {
  'use server';
  await signIn('credentials', {
    username: formData.get('username'),
    password: formData.get('password'),
  });
}
