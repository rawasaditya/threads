import ThemeChange from "@/components/threadElements/ThemeChange";

export default function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-center border-b shadow-sm">
      <div className="flex-1 text-xl font-semibold text-center">MyLogo</div>
      <div className="px-6">
        <ThemeChange />
      </div>
    </nav>
  );
}
