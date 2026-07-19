import { SignIn } from '@clerk/nextjs';
import { AuthShell, clerkAppearance } from '@/components/auth/AuthShell';

export default function SignInPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Good to see you again"
      subtitle="Pick up right where your profile left off."
    >
      <SignIn appearance={clerkAppearance} fallbackRedirectUrl="/interview" forceRedirectUrl="/interview" />
    </AuthShell>
  );
}
