import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    organization: "",
    services: "",
    solutions: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const formDataToSend = new FormData();
  
      // Add required fields
      formDataToSend.append("formId", "Yd4RbmOWqKNmn4KmAYXX");
      formDataToSend.append("locationId", "muO2fHXA3V0zXrfMQakw");
  
      // Prepare the event data object
      const eventData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        organization: formData.organization,
        website: formData.website,
        Timezone: "Asia/Karachi (GMT+05:00)",
        timeSpent: "33.696",
        eventData:{
        source: "direct",
        referrer: "",
        keyword: "",
        adSource: "",
        url_params: {},
        page: {
          url: "https://salesdriver.io/",
          title: "",
        },
        timestamp: 1744127802433,
        campaign: "",
        contactSessionIds: null,
        fbp: "",
        fbc: "",
        type: "page-visit",
        parentId: "",
        pageVisitType: "",
        domain: "link.salesdriver.io",
        version: "v3",
        parentName: "",
        fingerprint: null,
        documentURL: "https://link.salesdriver.io/widget/form/Yd4RbmOWqKNmn4KmAYXX",
        fbEventId: "8110a73c-89f8-464d-80bf-7e421ff360c5",
        medium: "form",
        mediumId: "Yd4RbmOWqKNmn4KmAYXX",
      }
      };
  
      formDataToSend.append("formData", JSON.stringify(eventData));
  
      const response = await fetch(
        "https://backend.leadconnectorhq.com/forms/submit",
        {
          method: "POST",
          headers: {
            "timezone": "Asia/Karachi",
            "Accept": "*/*",
            "Referer": "https://link.salesdriver.io/",
            "origin": "https://link.salesdriver.io/",
            // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiVjFEOWFWUGZvYjVKWWVwbU9VdlciLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3NDM3OTI1MjEzMDcsInN1YiI6Im5OSmNITk82WkY0YlFUOEtVSDJVIn0.gMxC1NnxWeA8HXH-V60pL6HJJFPLmxDGqnGEfToDYt0"
          },
          body: formDataToSend
        }
      );
  
      const responseData = await response.json(); // Parse the response
      console.log("API Response:", responseData); // Log for debugging
  
      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          website: "",
          organization: "",
          services: "",
          solutions: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        console.error("API Error:", responseData);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6">
      <div className="bg-white p-10 rounded-2xl border border-gray-200 max-w-[1150px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blueclr text-center mb-8">
          Let's Build Something Amazing
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Reach out to us, and we'll get back to you as soon as possible.
        </p>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            There was an error submitting your form. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  EMAIL
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  FIRST NAME
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  LAST NAME
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  PHONE
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="website"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.website}
                  onChange={handleChange}
                />
                <label
                  htmlFor="website"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  WEBSITE
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="organization"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.organization}
                  onChange={handleChange}
                />
                <label
                  htmlFor="organization"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  ORGANIZATION
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="services"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.services}
                  onChange={handleChange}
                />
                <label
                  htmlFor="services"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  SERVICES INTERESTED IN
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="solutions"
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.solutions}
                  onChange={handleChange}
                />
                <label
                  htmlFor="solutions"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  SOLUTIONS INTERESTED IN
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  placeholder=" "
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
                  value={formData.message}
                  onChange={handleChange}
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
                >
                  MESSAGE
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellowclr text-white font-semibold py-3 px-10 rounded-lg disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
