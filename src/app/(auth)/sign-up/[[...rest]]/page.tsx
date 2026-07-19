import { SignUp } from '@clerk/nextjs';
import { AuthShell, clerkAppearance } from '@/components/auth/AuthShell';

export default function SignUpPage() {
  return (
    <AuthShell
      eyebrow="Let's begin"
      title="Create your account"
      subtitle="Two minutes to sign up, ten to chat — then your profile writes itself."
    >
      <SignUp appearance={clerkAppearance} fallbackRedirectUrl="/interview" forceRedirectUrl="/interview" />
    </AuthShell>
  );
}
