import { PatientForm } from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
       <section className="remove-scrollbar container my-auto">
       <div className="flex flex-row items-center max-w-[496px]">
       <Image
            src="/assets/icons/logo-2.png"
            height={1000}
            width={1000}
            alt="patient"
            className=" h-16 w-fit"
          />
          <div>WeCare</div>
        </div>
        <PatientForm/>
        <div className="text-14-regular mt-20 flex justify-between">
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
