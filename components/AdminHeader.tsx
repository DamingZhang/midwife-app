// components/Header.js
"use client"; // This marks the file as a client component
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    const router = useRouter(); 
  const handleLogoutClick = () => {
    // Clear the access key from localStorage
    window.localStorage.removeItem("accessKey");
    // Redirect to homepage
    router.push("/");
    console.log('logout');
    console.log('logout');
  };

  return (
    <header className="admin-header">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/icons/logo.png"
          height={40}
          width={160}
          alt="logo"
          className="h-8 w-fit"
        />
      </Link>

      <p className="text-16-semibold cursor-pointer" onClick={handleLogoutClick}>
        Logout
      </p>
    </header>
  );
};
