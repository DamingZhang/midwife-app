import { PasskeyModal } from "@/components/PasskeyModal";
import { PatientForm } from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true"; 
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
       <section className="remove-scrollbar container my-auto">
        <div className="flex flex-row items-center max-w-[496px] mb-5">
            <a href="/">
              <Image
                src="/assets/icons/logo.png"
                height={1000}
                width={1000}
                alt="patient"
                className=" h-16 w-fit"
              />
              <div>WeCare</div>
            </a>
          </div>
        
        <PatientForm/>
        <div className="text-14-regular mt-2 flex justify-between mb-8">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 WeCare
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
       </section>
       <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
