'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { House, UserRound, Mail, Search, Share2, Trees } from "lucide-react";


export default function Menu() {
    return (
        <div className='fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4'>
            <div className="flex flex-col gap-2 bg-pink-400 p-5 rounded-r-4xl shadow-lg">
                <MenuItem 
                    title="Mi árbol" 
                    icon={<House size={60} strokeWidth={1.5} />} 
                    link="/arbolproject" 
                />
            </div>

            <div className="flex flex-col gap-2 bg-blue-400 p-5 rounded-r-4xl shadow-lg">
                <MenuItem 
                    title="Perfil" 
                    icon={<UserRound size={60} strokeWidth={1.5} />} 
                    link="/perfil" 
                />
                <MenuItem 
                    title="Solicitudes" 
                    icon={<Mail size={60} strokeWidth={1.5} />} 
                    link="/solicitudes" 
                />
                <MenuItem 
                    title="Buscar" 
                    icon={<Search size={60} strokeWidth={1.5} />} 
                    link="/buscar" 
                />
                <MenuItem 
                    title="Compartir" 
                    icon={<Share2 size={60} strokeWidth={1.5} />} 
                    onAction={() => {
                        const url = window.location.origin + "/arbolproject";
                        navigator.clipboard.writeText(url);
                    }}
                />
                <MenuItem 
                    title="Mis árboles" 
                    icon={<Trees size={60} strokeWidth={1.5} />} 
                    link="/mis_arboles" 
                />

            </div>
        </div>
    );
}



interface MenuItemProps {
    title: string;
    icon: ReactNode;
    link?: string;
    onAction?: () => void;
}

function MenuItem({ title, icon, link, onAction }: MenuItemProps) {
    const pathname = usePathname();
    const isActive = link ? pathname === link : false;
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        if (onAction) {
            onAction();
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); 
        }
    };

    const baseClasses = "flex items-center gap-3 px-4 py-3 rounded-4xl shadow-sm transition-colors font-medium";
    const activeClasses = isActive ? "bg-amber-300 text-gray-900" : "bg-white text-gray-800 hover:bg-gray-100";
    const copiedClasses = copied ? "!bg-green-200 !text-white" : "";

    if (onAction) {
        return (
            <button 
                onClick={handleClick}
                className={`${baseClasses} ${copiedClasses} w-full text-left`}
            >
                <span className="text-xl">{icon}</span>
            </button>
        );
    }

    return (
        <Link 
            href={link || "#"}
            className={`${baseClasses} ${activeClasses}`}
        >
            <span className="text-xl">{icon}</span>
        </Link>
    );
}