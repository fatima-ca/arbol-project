import Link from "next/link";

export default function BtnSignup() {
    return(
        <Link href="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
        </Link>
    );
};