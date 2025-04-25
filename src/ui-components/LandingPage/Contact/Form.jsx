import React, { useState, useEffect, useCallback } from "react"; // Keep useCallback

// Define your site key here
const RECAPTCHA_SITE_KEY = "6Led3SArAAAAAAiW9FWjhMbwapzP2A7S3JyV9hVy"; // Replace with your actual Site Key

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
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error' | 'error_captcha'
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false); // State to track if script is ready

  // --- Load reCAPTCHA Script ---
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("recaptcha-enterprise-script")) {
      // Assuming if the script tag exists, the library might be ready or loading
      // We'll rely on the check inside handleSubmit before calling execute
      setIsRecaptchaReady(true); // Optimistically set, or wait for a callback if available
      return;
    }

    const script = document.createElement("script");
    script.id = "recaptcha-enterprise-script";
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true; // Use defer to ensure execution order if needed, async is often fine

    // Optional: Add onload handler to know precisely when it's ready
    script.onload = () => {
       console.log("reCAPTCHA script loaded successfully.");
       // Check if the enterprise object is available immediately
       if (window.grecaptcha && window.grecaptcha.enterprise) {
           // Use .ready() to be absolutely sure the API methods are available
           window.grecaptcha.enterprise.ready(() => {
               console.log("reCAPTCHA Enterprise is ready.");
               setIsRecaptchaReady(true);
           });
       } else {
           console.error("reCAPTCHA script loaded, but enterprise object not found immediately.");
           // Might need a small timeout or rely on the check in handleSubmit
           // Setting ready anyway, the check in handleSubmit will be the final guard
            setIsRecaptchaReady(true);
       }
    };
    script.onerror = () => {
       console.error("Failed to load reCAPTCHA script.");
       setSubmitStatus("error_captcha"); // Indicate a setup problem
    };


    document.body.appendChild(script);

    // --- Cleanup function ---
    return () => {
      const existingScript = document.getElementById(
        "recaptcha-enterprise-script"
      );
      if (existingScript) {
         // console.log("Cleaning up reCAPTCHA script.");
         // Generally, removing the script tag itself isn't standard practice
         // unless causing issues. The library might manage its own state.
         // document.body.removeChild(existingScript);

         // Clean up the reCAPTCHA widget elements if they exist (more for v2/invisible)
         const recaptchaWidgets = document.querySelectorAll('.grecaptcha-badge');
         recaptchaWidgets.forEach(widget => widget.remove());
      }
      // Resetting readiness might be needed if component unmounts/remounts
      // setIsRecaptchaReady(false); // Consider if needed based on app structure
    };
  }, []); // Empty dependency array ensures this runs only once on mount


  // --- Handle Input Change ---
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


  // --- Handle Form Submission ---
  const handleSubmit = useCallback(async (e) => {
      e.preventDefault();
      console.log("handleSubmit triggered."); // 1. Check if function runs

      // Ensure reCAPTCHA library is loaded and ready
      if (!isRecaptchaReady || typeof window.grecaptcha?.enterprise?.execute !== 'function') {
          console.error("reCAPTCHA script not loaded or ready yet.");
          setSubmitStatus("error_captcha"); // Indicate setup issue
          // Optionally disable submit button until isRecaptchaReady is true
          return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
          // --- Get reCAPTCHA token ---
          console.log("Requesting reCAPTCHA token..."); // 3. Check before await

          const token = await window.grecaptcha.enterprise.execute(
              RECAPTCHA_SITE_KEY,
              { action: "contactFormSubmit" } // Use a descriptive action name
          );

          console.log("reCAPTCHA Token Received:", token); // 4. Log the token

          if (!token) {
              console.error("Failed to get reCAPTCHA token (execute returned empty).");
              setSubmitStatus("error_captcha"); // Specific error state
              setIsSubmitting(false);
              return;
          }
          // --- Token obtained ---

          const formDataToSend = new FormData();

          // Add required fields from LeadConnector/SalesDriver
          formDataToSend.append("formId", "Yd4RbmOWqKNmn4KmAYXX");
          formDataToSend.append("locationId", "muO2fHXA3V0zXrfMQakw");

          // --- Add the reCAPTCHA token ---
          // 'g-recaptcha-response' is the standard field name for Google's backend verification.
          // Check if LeadConnector specifically requires 'captchaV3' or 'captcha_token'.
          // It's safer to send the standard one. If it fails, try the others.
          const recaptchaFieldName = "g-recaptcha-response"; // Standard field name
          formDataToSend.append(recaptchaFieldName, token);
          formDataToSend.append("captchaV3", token);
          console.log(`Appended token to FormData field: ${recaptchaFieldName}`); // 5. Confirm appending

          // If the backend *also* requires 'captcha_token' or 'captchaV3', add it:
          // formDataToSend.append("captcha_token", token);
          // formDataToSend.append("captchaV3", token);

          // --- Token added ---


          // Prepare the event data object
          // Check LeadConnector docs: should fields like email, phone, name be *only* inside 'formData' JSON,
          // or also as top-level fields in the FormData? Sending both might be redundant but sometimes required.
          // Let's stick to the structure from your original code for now.
          const eventData = {
              // Top-level data expected within the JSON blob
              first_name: formData.firstName,
              last_name: formData.lastName,
              phone: formData.phone,
              email: formData.email,
              organization: formData.organization,
              website: formData.website,
              services: formData.services, // Include custom fields if needed here
              solutions: formData.solutions,
              message: formData.message,

              // Additional metadata often sent
              Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC", // Dynamic timezone
              // timeSpent: "33.696", // Consider calculating time spent on page/form if needed
              eventData: { // Nested eventData as per original code - VERIFY if this nesting is correct
                  source: "direct", // Or determine dynamically if possible
                  referrer: document.referrer,
                  // keyword: "", // Extract from URL params if available
                  // adSource: "", // Extract from URL params if available
                  // url_params: {}, // Extract from window.location.search
                  page: {
                      url: window.location.href,
                      title: document.title,
                  },
                  timestamp: Date.now(),
                  // campaign: "", // Extract from URL params if available
                  // contactSessionIds: null,
                  // fbp: "", // Get Facebook Pixel ID if used
                  // fbc: "", // Get Facebook Click ID if used
                  type: "form-submit", // More accurate type for a submission
                  // parentId: "",
                  // pageVisitType: "",
                  domain: window.location.hostname,
                  version: "v3", // Assuming this relates to your system/form version
                  // parentName: "",
                  // fingerprint: null,
                  // documentURL: "https://link.salesdriver.io/widget/form/Yd4RbmOWqKNmn4KmAYXX", // Probably should be window.location.href
                  // fbEventId: "UUID", // Generate a unique ID if needed
                  medium: "form",
                  mediumId: "Yd4RbmOWqKNmn4KmAYXX", // Matches formId
              },
          };

          // Append the JSON stringified data
          // The key 'formData' is what LeadConnector likely expects for the JSON payload
          formDataToSend.append("formData", JSON.stringify(eventData));

          // Add other top-level fields IF REQUIRED by LeadConnector API (besides the JSON blob)
          // Example: Sometimes email/phone are needed top-level *and* in the JSON
          // formDataToSend.append("email", formData.email);
          // formDataToSend.append("phone", formData.phone);
          // formDataToSend.append("first_name", formData.firstName);
          // formDataToSend.append("last_name", formData.lastName);

          // Add _method if necessary (usually not needed for direct POST unless API requires override)
          // formDataToSend.append('_method', 'POST');


          console.log(
              "Sending FormData payload (check Network tab for full details):",
              // Convert FormData to object for easier logging (doesn't show file blobs)
              Object.fromEntries(formDataToSend.entries())
          ); // 6. Log before fetch

          const response = await fetch(
              "https://backend.leadconnectorhq.com/forms/submit",
              {
                  method: "POST",
                  headers: {
                      // 'Content-Type': 'multipart/form-data' // *DO NOT* set this header manually for FormData; browser does it
                      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC", // Dynamic timezone header
                      Accept: "application/json, text/plain, */*", // More specific Accept header
                      // Origin and Referer might be needed if API CORS policy is strict
                      // Origin: window.location.origin,
                      // Referer: window.location.href,
                  },
                  body: formDataToSend,
              }
          );

          // Try parsing response as JSON, but handle cases where it might not be JSON
          let responseData = null;
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
              responseData = await response.json();
          } else {
              responseData = await response.text(); // Get text if not JSON
          }
          console.log("API Response Status:", response.status);
          console.log("API Response Data:", responseData); // Log for debugging

          if (response.ok) {
              setSubmitStatus("success");
              // Reset form
              setFormData({
                  firstName: "", lastName: "", email: "", phone: "",
                  website: "", organization: "", services: "",
                  solutions: "", message: "",
              });
          } else {
              // Check response data for specific error messages
              let errorMessage = `API Error (${response.status})`;
              if (responseData && typeof responseData === 'object' && responseData.error) {
                  errorMessage = responseData.error;
              } else if (typeof responseData === 'string') {
                  errorMessage = responseData;
              }

              // Check if the error is specifically about reCAPTCHA
              if (typeof errorMessage === 'string' && /captcha|verification failed/i.test(errorMessage)) {
                  console.error("reCAPTCHA validation failed on the server:", errorMessage);
                  setSubmitStatus("error_captcha");
              } else {
                  console.error("API Error:", errorMessage);
                  setSubmitStatus("error");
              }
          }
      } catch (error) {
          console.error("Submission fetch/processing error:", error);
          setSubmitStatus("error"); // General network or unexpected error
          if (error.name === 'TypeError' && error.message.includes('grecaptcha')) {
             console.error("Likely issue executing grecaptcha.enterprise.execute - ensure script loaded and SITE_KEY is correct.");
             setSubmitStatus("error_captcha");
          }
      } finally {
          setIsSubmitting(false);
      }
  }, [formData, isRecaptchaReady]); // Add isRecaptchaReady dependency


  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6">
      <div className="bg-white p-10 rounded-2xl border border-gray-200 max-w-[1150px] mx-auto shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Form submitted successfully! Thank you.
          </div>
        )}
        {submitStatus === "error_captcha" && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            reCAPTCHA verification failed. Please try submitting again. If the
            problem persists, ensure you're not blocking Google scripts.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            There was an error submitting your form. Please check your details
            and try again.
          </div>
        )}

        {/* Hide form after success? Optional */}
        {submitStatus !== "success" && (
          <form onSubmit={handleSubmit}>
            {/* --- Input Fields --- */}
            {/* Replace className="..." with your actual Tailwind classes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Column 1 */}
              <div className="space-y-6">
                {/* Email */}
                <div className="relative">
                  <input
                    type="email" id="email" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.email} onChange={handleChange} required autoComplete="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    EMAIL *
                  </label>
                </div>
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text" id="firstName" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.firstName} onChange={handleChange} required autoComplete="given-name"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    FIRST NAME *
                  </label>
                </div>
                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text" id="lastName" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.lastName} onChange={handleChange} required autoComplete="family-name"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    LAST NAME *
                  </label>
                </div>
                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel" id="phone" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.phone} onChange={handleChange} required autoComplete="tel"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    PHONE *
                  </label>
                </div>
                {/* Website */}
                 <div className="relative">
                  <input
                    type="url" id="website" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.website} onChange={handleChange} autoComplete="url"
                  />
                  <label
                    htmlFor="website"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    WEBSITE
                  </label>
                </div>
                {/* Organization */}
                 <div className="relative">
                  <input
                    type="text" id="organization" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.organization} onChange={handleChange} autoComplete="organization"
                  />
                  <label
                    htmlFor="organization"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    ORGANIZATION
                  </label>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                {/* Services */}
                <div className="relative">
                  <input
                    type="text" id="services" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.services} onChange={handleChange}
                  />
                  <label
                    htmlFor="services"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    SERVICES INTERESTED IN
                  </label>
                </div>
                {/* Solutions */}
                <div className="relative">
                  <input
                    type="text" id="solutions" placeholder=" "
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.solutions} onChange={handleChange}
                  />
                  <label
                    htmlFor="solutions"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    SOLUTIONS INTERESTED IN
                  </label>
                </div>
                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message" placeholder=" " rows="6" // Adjusted rows
                    className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={formData.message} onChange={handleChange}
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    MESSAGE
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button Area */}
            <div className="mt-8 flex justify-end">
               <button
                 type="submit"
                 className="px-8 py-3 bg-yellowclr text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
                 disabled={isSubmitting || !isRecaptchaReady} // Disable if submitting or recaptcha not ready
               >
                 {isSubmitting
                   ? "Sending..."
                   : "Send message"}
               </button>
             </div>
              {/* reCAPTCHA Legal Text */}
             <p className="text-xs text-gray-500 mt-4 text-center md:text-right">
                 This site is protected by reCAPTCHA and the Google
                 <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline"> Privacy Policy</a> and
                 <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline"> Terms of Service</a> apply.
             </p>
          </form>
        )}
      </div>
    </div>
  );
}