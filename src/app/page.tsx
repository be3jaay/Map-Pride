import { InputForm } from "@/user/components/SignIn/SignIn";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <InputForm />
    </div>
  );
}
