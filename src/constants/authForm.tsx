import React from "react";
import {
  PersonalInformation,
  ContactInformation,
  DocumentsUpload,
  Confirm,
} from "src/components/Auth";

type Step = {
  label: string;
  component: React.ReactNode;
};

type Nationalities = {
  label: string;
  value: string;
};

export const authFormSteps: Step[] = [
  { label: "Informacioni Personal", component: <PersonalInformation /> },
  { label: "Informacioni i vendbanimit", component: <ContactInformation /> },
  { label: "Ngarko Dokumentat", component: <DocumentsUpload /> },
  { label: "Konfirmo te dhenat", component: <Confirm /> },
];
