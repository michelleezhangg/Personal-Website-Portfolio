"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT, SOCIAL_LINKS, SOCIAL_ICONS } from "../constants";

const ContactMeSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <section id="contact-me" className="section bg-lightblue">
      {/* Section Title */}
      <div className="flex flex-col items-center">
        <h1 className="title text-6xl pt-20">Contact Me</h1>
      </div>
      <section className="grid grid-cols-2 mt-12 pt-10 pb-24 mx-20 gap-4">
        {/* Left Side: Section Text and Socials */}
        <div>
          <h5 className="title title text-xl font-bold my-1">
            Let&apos;s Connect
          </h5>
          <p className="mb-4 max-w-sm">{CONTACT.bio}</p>
          <div className="flex flex-row gap-5 ml-5">
            <Link href={SOCIAL_LINKS.linkedin}>
              <Image
                src={SOCIAL_ICONS.linkedin}
                alt="LinkedIn Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={SOCIAL_LINKS.github}>
              <Image
                src={SOCIAL_ICONS.github}
                alt="GitHub Icon"
                width={30}
                height={30}
              />
            </Link>
            <Link href={SOCIAL_LINKS.instagram}>
              <Image
                src={SOCIAL_ICONS.instagram}
                alt="Instagram Icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        {/* Right Side: Submission Form */}
        <div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex gap-2 mb-4">
              {" "}
              {/* First and Last Name Inputs */}
              <div className="flex-1 mr-2">
                <label
                  htmlFor="firstName"
                  type="text"
                  className="title block text-sm mb-2"
                >
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  required
                  className="bg-white border border-black text-sm rounded-lg block w-full p-2.5"
                  placeholder={CONTACT.placeholders.first_name}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  type="text"
                  className="title block text-sm mb-2"
                >
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  required
                  className="bg-white border border-black text-sm rounded-lg block w-full p-2.5"
                  placeholder={CONTACT.placeholders.last_name}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                type="email"
                className="title block text-sm mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-black text-sm rounded-lg block w-full p-2.5"
                placeholder={CONTACT.placeholders.email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="title block text-sm mb-2">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-black text-sm rounded-lg block w-full p-2.5"
                placeholder={CONTACT.placeholders.subject}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="title block text-sm mb-2">
                Message
              </label>
              <textarea
                name="message"
                type="message"
                id="message"
                required
                className="bg-white border border-black text-sm rounded-lg block w-full p-2.5 min-h-[42px] max-h-[300px]"
                placeholder={CONTACT.placeholders.message}
              ></textarea>
            </div>
            <button
              type="submit"
              className="button blue-button max-w-fit px-8"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {
              // Display error or success message based on submission status
              error && <p className="text-red-500 font-black mt-2">{error}</p>
            }
            {
              // If email was submitted successfully, show success message
              emailSubmitted && (
                <p className="text-green-600 font-black mt-2">
                  {CONTACT.submission_responses.success}
                </p>
              )
            }
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactMeSection;
