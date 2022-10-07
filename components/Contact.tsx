import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactForm } from "../pages/api/contact";
import { ContactSchema } from "../pages/api/type";
import { useEffect, useState } from "react";
import { InputBox, TextArea } from "../components/InputBox";
import { FiCheckCircle } from "react-icons/fi";

export const sendMessage = async (data: any) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
};

export const Contact: React.FC = () => {
  const { reset, register, handleSubmit, formState } = useForm<ContactForm>({
    resolver: yupResolver(ContactSchema),
  });

  const [isSuccess, setIsSuccess] = useState<boolean | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true);
    const res = await sendMessage(data);
    if (res.ok) {
      setIsSuccess(true)
      setTimeout (()=>{
        setIsSuccess(undefined)
      },5000)
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsSuccess(false)
      
    }
  };

  useEffect(() => {
    reset({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }, [isSuccess]);

  const Spinner: React.FC = () => (
    <div role="status">
      <svg
        className="inline h-5 w-5 animate-spin fill-primary-600 text-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );

  return (
    <div className="container flex flex-col items-center mt-10">
      <div className="flex justify-center">
        <p className="text-3xl md:text-6xl">Let's talk</p>
        <p className="font-bold text-3xl md:text-6xl">. Contact</p>
      </div>
      <div className="flex justify-center text-center mt-5 px-5">
        <p>Need forward-thinking software? Get in touch with us</p>
      </div>

      {(isSuccess !== undefined && isSuccess) && <div
        className="flex items-center gap-x-2 bg-blue-100 rounded-lg py-3 px-3 text-base text-blue-700 mb-1 mt-5"
        role="alert"
      >
        < FiCheckCircle /> Message Send Successfully!
      </div>}

      {(isSuccess !== undefined && !isSuccess) && <div
        className="flex items-center gap-x-2 bg-red-100 rounded-lg py-3 px-3 text-base text-red-700 mb-1 mt-5"
        role="alert"
      >
        < FiCheckCircle /> Message Send Fail!
      </div>}
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-5 mt-6 lg:px-36"
      >
        <InputBox
          props={register("fullName", { required: true })}
          error={formState.errors.fullName?.message}
          name="fullName"
          type="text"
          placeholder="Full name"
        />
        <InputBox
          props={register("email", { required: true })}
          error={formState.errors.email?.message}
          name="email"
          type="email"
          placeholder="Email"
        />
        <InputBox
          props={register("phone", { required: true })}
          error={formState.errors.phone?.message}
          name="phone"
          type="text"
          placeholder="Mobile Number"
        />
        <InputBox
          props={register("subject", { required: true })}
          error={formState.errors.subject?.message}
          name="subject"
          type="text"
          placeholder="Subject"
        />
        <TextArea
          props={register("message", { required: true })}
          error={formState.errors.message?.message}
          name="message"
          placeholder="Message"
          rows={3}
        />
        <div className="flex justify-between items-center flex-col md:flex-row gap-y-3">
          <ReCAPTCHA
            sitekey="Your client site key"
            onChange={(x) => console.log(x)}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="w-full md:w-auto text-white bg-red-700 hover:bg-red-800 font-medium rounded-sm text-base px-24 py-4 text-center"
          >
            {isLoading ? (
              <div className="flex flex-row items-start gap-x-2">
                <Spinner /> <span>Sending....</span>
              </div>
            ) : (
              "Send Message" 
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
