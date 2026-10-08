import Link from "next/link";
interface TNavs {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLinks = async() => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
    const data:TNavs[] =await res.json()
     
    return (
        <div className="flex gap-10 ">
            {
                data.map((n,i)=> <Link key={i} href={n.slug}>
                    {n.icon}
                    {n.nameBn}
                    </Link>)
            }
        </div>
    );
};

export default NavLinks;