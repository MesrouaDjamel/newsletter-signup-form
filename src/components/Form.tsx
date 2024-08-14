"use client";

import Button from "./Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import Image from "next/image";
import SuccessSuscribing from "./SuccessSuscribing";

const subscribingFormSchema = z.object({
  email: z.string().email({ message: "Valid Email Required" }),
});

type TSubscribingFormData = z.infer<typeof subscribingFormSchema>;
const Form = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<TSubscribingFormData>({
    resolver: zodResolver(subscribingFormSchema),
  });

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);


  const formOnSubmit = (data: TSubscribingFormData) => {
    console.log(data);
    setSuccess(true);
    setEmail(data.email);
    reset();
  };
    



  return (
    <>
      {!success && (
        <div className="rounded-xl max-w-[375px] bg-white lg:flex lg:flex-row-reverse lg:min-w-[928px] lg:h-[640px] ">
          {/* Image Div */}
          <div className="relative h-[284px] lg:hidden   ">
            <Image
              src="/mobile.svg"
              alt="illustration"
              fill
              className="object-cover lg:py-6 lg:pr-6 rounded-lg "
            />
          </div>
          <div className="hidden relative lg:block lg:w-[424px] rounded-none mr-6 my-6">
            <Image
              src="/illustration-sign-up-desktop.svg"
              alt="illustration"
              fill
              className="object-cover  rounded-lg "
            />
          </div>

          {/* Text Div */}
          <div className="px-6 lg:mx-8 lg:my-10 lg:w-[504px] lg:flex lg:flex-col mb-6 ">
            <h1 className="text-4xl pt-10 pb-6 font-semibold text-charcoalGrey lg:text-[52px] ">
              Stay updated!
            </h1>

            <p className="text-charcoalGrey text-base pb-8">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <div className="flex flex-col gap-6 pb-10">
              <div className="flex gap-4  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <g fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                    <path
                      stroke="#FFF"
                      strokeWidth="2"
                      d="M6 11.381 8.735 14 15 8"
                    />
                  </g>
                </svg>
                <p className="text-charcoalGrey text-base">
                  Product discovery and building what matters
                </p>
              </div>

              <div className="flex  gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <g fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                    <path
                      stroke="#FFF"
                      strokeWidth="2"
                      d="M6 11.381 8.735 14 15 8"
                    />
                  </g>
                </svg>
                <p className="text-charcoalGrey text-base">
                  Measuring to ensure updates are a success
                </p>
              </div>

              <div className="flex  gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                >
                  <g fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                    <path
                      stroke="#FFF"
                      strokeWidth="2"
                      d="M6 11.381 8.735 14 15 8"
                    />
                  </g>
                </svg>
                <p className="text-charcoalGrey text-base">Add much more</p>
              </div>
            </div>
           
            <form
              className="flex flex-col gap-4  "
              onSubmit={handleSubmit(formOnSubmit)}
            >
              <div className="flex justify-between">
                <h1 className="text-sm font-medium underline">Email address</h1>
                {errors.email && (
                  <p className="text-red-500 text-sm font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter Your email address ..."
                className={`border px-4 rounded-lg py-4 mb-2 ${
                  errors.email ? "text-[#EF8C8C] bg-[#FFE8E6]" : ""
                }`}
              />
              <Button type="submit" content="Subscribe to monthly newsletter" />
            </form>
          </div>
        </div>
      )}

      {success && <SuccessSuscribing email={email} setSuccess={setSuccess} success={success} />}
    </>
  );
};

export default Form;
