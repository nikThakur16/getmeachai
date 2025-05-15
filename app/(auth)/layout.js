export const metadata = {
  title: "Auth Page-Get me a Chai",
  description: "Get me a Chai- a web site for funding your projects",
};

export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {children}
    </main>
  );
}