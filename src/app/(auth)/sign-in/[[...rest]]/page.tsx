import { SignIn } from '@clerk/nextjs';
import { AuthShell, clerkAppearance } from '@/components/auth/AuthShell';

export default function SignInPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to your account"
      subtitle="Pick up right where your profile left off."
    >
      <SignIn
        appearance={clerkAppearance}
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/interview"
        forceRedirectUrl="/interview"
      />
    </AuthShell>
  );
}
