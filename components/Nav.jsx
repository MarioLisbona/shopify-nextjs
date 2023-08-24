import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b sticky top-0 bg-white ">
      <div className="flex items-center justify-between max-w 6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href={"/"} passHref legacyBehavior>
          <a href="" className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">Shopify + Next.js</span>
          </a>
        </Link>
        <a href="" className="text-md font-bold cursor-pointer">
          Cart
        </a>
      </div>
    </header>
  );
}
