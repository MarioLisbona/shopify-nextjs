const navigation = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Shop",
    href: "#",
  },
  {
    name: "Jobs",
    href: "#",
  },
  {
    name: "Terms",
    href: "#",
  },
];
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap-justify-center">
          {navigation.map((item, idx) => (
            <div key={idx} className="px-6 py-2">
              <a href={item.href} className="text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-gray-400">
          &copy; 2023 Shopfy + next.js
        </p>
      </div>
    </footer>
  );
}
