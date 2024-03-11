import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-8 my-4 list-none text-3xl font-bold">
      <li className="p-4 bg-green-300 rounded-3xl">
        <Link href={"/SSG"}>SSG</Link>
      </li>
      <li className="p-4 bg-green-300 rounded-3xl">
        <Link href={"/ISR"}>ISR</Link>
      </li>
      <li className="p-4 bg-green-300 rounded-3xl">
        <Link href={"/SSR"}>SSR</Link>
      </li>
      <li className="p-4 bg-green-300 rounded-3xl">
        <Link href={"/CSR"}>CSR</Link>
      </li>
    </nav>
  );
};

export default Navbar;
