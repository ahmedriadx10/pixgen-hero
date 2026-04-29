'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href,children}) => {
 const path=usePathname()

  return (
    <Link href={href} className={`${path===href?'border-b-2 pb-1 border-purple-500':''}`}>
      {children}
    </Link>
  );
};

export default Navlink;