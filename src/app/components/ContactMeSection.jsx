"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  CONTACT,
  PERSONAL,
  SOCIAL_LINKS,
  SOCIAL_ICONS,
  MD_QUERY,
} from "../utils/constants";

const ContactMeSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  /* Submission */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page doesn't reload when form is submitted
    setEmailSubmitted(false);
    setIsLoading(true);
    setError("");

    const data = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      email: e.target.elements.email.value,
      subject: e.target.elements.subject.value,
      message: e.target.elements.message.value,
    };

    try {
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      // Request for sending data to the server
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      // Retrieve response
      const response = await fetch(endpoint, options);
      const result = await response.json();
      console.log("Result:", result);

      if (result.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        e.target.reset(); // Clear the form
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  /* Responsive Design */
  const isMd = useMediaQuery(MD_QUERY);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact-me" className="hero section bg-lightblue">
      {/* Section Title */}
      <div className="flex flex-col items-center">
        <h1 className="title section-major-heading">Contact Me</h1>
      </div>
      <section className="lg:grid lg:grid-cols-2 lg:mt-12 lg:pt-10 pt-5 pb-24 lg:mx-20 mx-12 gap-4">
        {/* Left Side: Section Text and Socials */}
        <div className="flex flex-col pr-2">
          <h5 className="title lg:text-xl text-md font-bold my-1">
            Let&apos;s Connect
          </h5>
          <p className="mb-4 lg:text-lg text-sm max-w-sm">{CONTACT.bio}</p>
          <div className="flex flex-row gap-5">
            <Link href={SOCIAL_LINKS.linkedin}>
              <Image
                src={SOCIAL_ICONS.linkedin}
                alt="LinkedIn Icon"
                width={isMd ? 30 : 25}
                height={isMd ? 30 : 25}
                data-testid="linkedin-icon"
              />
            </Link>
            <Link href={SOCIAL_LINKS.github}>
              <Image
                src={SOCIAL_ICONS.github}
                alt="GitHub Icon"
                width={isMd ? 30 : 25}
                height={isMd ? 30 : 25}
                data-testid="github-icon"
              />
            </Link>
            <Link href={SOCIAL_LINKS.instagram}>
              <Image
                src={SOCIAL_ICONS.instagramLight}
                alt="Instagram Icon"
                width={isMd ? 30 : 25}
                height={isMd ? 30 : 25}
                data-testid="instragram-icon"
              />
            </Link>
          </div>
          <div className="grid lg:grid-cols-[60px_1fr] grid-cols-[45px_1fr] lg:mt-12 mt-5">
            <Image
              src={SOCIAL_ICONS.phoneLight}
              alt="Phone Icon"
              width={isMd ? 30 : 25}
              height={isMd ? 30 : 25}
              data-testid="phone-icon"
            />
            <p className="flex lg:mb-5 mb-3 text-sm lg:mt-1">
              {PERSONAL.phone_number}
            </p>
            <Image
              src={SOCIAL_ICONS.emailLight}
              alt="Email Icon"
              width={isMd ? 25 : 20}
              height={isMd ? 25 : 20}
              className="ml-1"
              data-testid="email-icon"
            />
            <p className="flex text-sm lg:mt-1 mb-20">{PERSONAL.email}</p>
          </div>
        </div>
        {/* Right Side: Submission Form */}
        <div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex gap-2 mb-4">
              <div className="flex-1 mr-2">
                <label
                  htmlFor="firstName"
                  type="text"
                  className="title block lg:text-sm text-xs mb-2"
                >
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  required
                  className="bg-white border border-black lg:text-sm text-xs rounded-lg block w-full p-2.5"
                  placeholder={CONTACT.placeholders.first_name}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  type="text"
                  className="title block lg:text-sm text-xs mb-2"
                >
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  required
                  className="bg-white border border-black lg:text-sm text-xs rounded-lg block w-full p-2.5"
                  placeholder={CONTACT.placeholders.last_name}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                type="email"
                className="title block lg:text-sm text-xs mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-black lg:text-sm text-xs rounded-lg block w-full p-2.5"
                placeholder={CONTACT.placeholders.email}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="title block lg:text-sm text-xs mb-2"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-black lg:text-sm text-xs rounded-lg block w-full p-2.5"
                placeholder={CONTACT.placeholders.subject}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="title block lg:text-sm text-xs mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                type="message"
                id="message"
                required
                className="bg-white border border-black lg:text-sm text-xs rounded-lg block w-full p-2.5 min-h-[42px] max-h-[300px]"
                placeholder={CONTACT.placeholders.message}
              ></textarea>
            </div>
            <button
              type="submit"
              className="button blue-button lg:text-md text-sm max-w-fit px-8"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {
              //  Display error or success message based on submission status
              error && <p className="text-red-500 font-black mt-2">{error}</p>
            }
            {emailSubmitted && (
              <p className="text-green-600 font-black mt-2">
                {CONTACT.submission_responses.success}
              </p>
            )}
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactMeSection;
