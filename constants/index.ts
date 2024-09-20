export const GenderOptions = ["Female", "Male", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Female" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  // privacyConsent: false,
};

export const IdentificationTypes = [
  "Driver's License",
  "Birth Certificate",
  "Medical Insurance Card/Policy",
  "Passport",
  "Resident Visa",
];

export const Doctors = [
 
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },

  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },

  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },

];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
