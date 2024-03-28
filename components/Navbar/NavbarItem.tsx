import Link from "next/link";

type NavbarItemProps = {
    href: string;
    text: string;
};

export default function NavbarItem({ href, text }: NavbarItemProps) {
    return (
        <>
            <li className="font-medium text-xl hover:text-red-100 transition-all duration-150">
                <Link href={href}>{text}</Link>
            </li>
        </>
    );
}
