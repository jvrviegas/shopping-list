import { signIn } from 'next-auth/react';
import { SignInWithGoogle } from './SignInGoogle';

export function Form() {
  async function handleSignIn() {
    await signIn('google');
  }

  return (
    <div>
      <SignInWithGoogle onClick={handleSignIn} />
    </div>
  );
}
