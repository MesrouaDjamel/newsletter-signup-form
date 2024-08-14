import Image from "next/image";
import NewsLetterSuscribing from "./suscribing-to-newsletters/page";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-darkSlate">
      <Form />
    </main>
  );
}
