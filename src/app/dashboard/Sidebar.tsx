import Link from "next/link";
const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/all-laptops",
    title: "All Laptops",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <div className="mx-8 bg-emerald-400 p-12 my-4">
      <ul>
        {navLinks.map(({ path, title }) => (
          <li key={path} className="text-white hover:text-red-500">
            <Link href={path}>{title}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
