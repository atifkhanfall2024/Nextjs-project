import Link from "next/link"

const Navbar = ()=>{
return (
  <header className="bg-slate-900 text-white shadow-md">
    <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
     <Link href='/'> <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
        Contact Management App
      </h1></Link>

      <nav>
        <ul className="flex space-x-6 text-sm md:text-base">
      <Link href={'/'}>
          <li className="cursor-pointer hover:text-sky-400 transition-colors">
            Home
          </li>
      </Link>
         <Link href={'/contacts'}>
          <li className="cursor-pointer hover:text-sky-400 transition-colors">
            Contacts
          </li>
         </Link>
          <li className="cursor-pointer hover:text-sky-400 transition-colors">
            Add Contact
          </li>
          <li className="cursor-pointer hover:text-sky-400 transition-colors">
            About
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

}


export default Navbar