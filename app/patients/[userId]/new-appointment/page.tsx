import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[660px] flex-1 justify-between">
         

          <div className="flex flex-row items-center max-w-[400px] mb-5">
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
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 WeCare</p>
        </div>
      </section>

      <Image
        src="/assets/images/mother3.jpg"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[490px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
