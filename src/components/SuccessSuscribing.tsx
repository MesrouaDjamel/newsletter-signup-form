"use client";
import Button from "@/components/Button";
import Link from "next/link";

const SuccessSuscribing = ({
  email,
  success,
  setSuccess,
}: {
  email: string;
  success: boolean;
  setSuccess: (success: boolean) => void;
}) => {
  console.log(email);

  return (
    <div className="bg-white max-w-[375px] pt-36 pb-6 rounded-lg px-6 md:py-10">
      <svg
        className="mb-10"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
      >
        <defs>
          <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#FF6A3A" />
            <stop offset="100%" stop-color="#FF527B" />
          </linearGradient>
        </defs>
        <g fill="none">
          <circle cx="32" cy="32" r="32" fill="url(#a)" />
          <path
            stroke="#FFF"
            stroke-width="4"
            d="m18.286 34.686 8.334 7.98 19.094-18.285"
          />
        </g>
      </svg>

      <h1 className="text-charcoalGrey font-semibold text-4xl ">
        Thanks for Subscribing!
      </h1>

      <p className="text-charcoalGrey mt-8 mb-36 md:mb-8">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>

      <Button
        type="button"
        content={"Dismiss Message"}
        onClick={() => setSuccess(false)}
      />
    </div>
  );
};

export default SuccessSuscribing;
