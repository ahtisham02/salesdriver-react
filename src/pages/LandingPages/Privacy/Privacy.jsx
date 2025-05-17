import React from "react";
import { Dot } from "lucide-react";

const terms = [
  {
    title: "Introduction",
    content: (
      <>
        <p className="text-[#333] mb-4">
          This privacy notice for SalesDriver ("Company," "we," "us," or "our"),
          describes how and why we might collect, store, use, and/or share
          ("process") your information when you use our services ("Services"),
          such as when you:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#333] mb-4">
          <li>
            Visit our website at salesdriver.io, or any website of ours that
            links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p className="text-[#333]">
          <strong>Questions or concerns?</strong> Reading this privacy notice
          will help you understand your privacy rights and choices. If you do
          not agree with our policies and practices, please do not use our
          Services. If you still have any questions or concerns, please contact
          us at rock@salesdriver.io.
        </p>
      </>
    ),
  },
  {
    title: "SUMMARY OF KEY POINTS",
    content: (
      <>
        <p className="text-[#333] mb-4">
          <em>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for.
          </em>
        </p>

        <p className="text-[#333] font-semibold mb-2">
          What personal information do we process?
        </p>
        <p className="text-[#333] mb-4">
          When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with SalesDriver and the
          Services, the choices you make, and the products and features you use.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Do we process any sensitive personal information?
        </p>
        <p className="text-[#333] mb-4">
          We do not process sensitive personal information.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Do we receive any information from third parties?
        </p>
        <p className="text-[#333] mb-4">
          We do not receive any information from third parties.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          How do we process your information?
        </p>
        <p className="text-[#333] mb-4">
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent. We process your information only when we
          have a valid legal reason to do so.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          In what situations and with which parties do we share personal
          information?
        </p>
        <p className="text-[#333] mb-4">
          We may share information in specific situations and with specific
          third parties.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          How do we keep your information safe?
        </p>
        <p className="text-[#333] mb-4">
          We have organizational and technical processes and procedures in place
          to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information.
        </p>

        <p className="text-[#333] font-semibold mb-2">What are your rights?</p>
        <p className="text-[#333] mb-4">
          Depending on where you are located geographically, the applicable
          privacy law may mean you have certain rights regarding your personal
          information.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          How do you exercise your rights?
        </p>
        <p className="text-[#333] mb-4">
          The easiest way to exercise your rights is by filling out our data
          subject request form available here: __________, or by contacting us.
          We will consider and act upon any request in accordance with
          applicable data protection laws.
        </p>

        <p className="text-[#333] mb-4">
          <strong>
            Want to learn more about what SalesDriver does with any information
            we collect?
          </strong>{" "}
          Click here to review the notice in full.
        </p>
      </>
    ),
  },
  {
    title: "TABLE OF CONTENTS",
    content: (
      <ol className="list-decimal pl-6 space-y-2 text-[#333]">
        <li>WHAT INFORMATION DO WE COLLECT?</li>
        <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
        <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
        <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
        <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
        <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
        <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
        <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
        <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
        <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
        <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
        <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
        <li>
          HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </li>
      </ol>
    ),
  },
  {
    title: "1. WHAT INFORMATION DO WE COLLECT?",
    content: (
      <>
        <h3 className="font-semibold mt-4 mb-3 text-[#333]">
          Personal information you disclose to us
        </h3>
        <p className="text-[#333] mb-2">
          <em>
            In Short: We collect personal information that you provide to us.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Personal Information Provided by You.
        </p>
        <p className="text-[#333] mb-4">
          The personal information that we collect depends on the context of
          your interactions with us and the Services, the choices you make, and
          the products and features you use. The personal information we collect
          may include the following:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#333] mb-4 columns-2">
          <li>names</li>
          <li>phone numbers</li>
          <li>email addresses</li>
          <li>mailing addresses</li>
          <li>job titles</li>
          <li>usernames</li>
          <li>passwords</li>
          <li>contact preferences</li>
          <li>contact or authentication data</li>
          <li>billing addresses</li>
          <li>debit/credit card numbers</li>
        </ul>

        <p className="text-[#333] font-semibold mb-2">Sensitive Information.</p>
        <p className="text-[#333] mb-4">
          We do not process sensitive information.
        </p>

        <p className="text-[#333] font-semibold mb-2">Payment Data.</p>
        <p className="text-[#333] mb-4">
          We may collect data necessary to process your payment if you make
          purchases, such as your payment instrument number (such as a credit
          card number), and the security code associated with your payment
          instrument. All payment data is stored by __________. You may find
          their privacy notice link(s) here: __________.
        </p>

        <p className="text-[#333] mb-4">
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>

        <h3 className="font-semibold mt-6 mb-3 text-[#333]">
          Information automatically collected
        </h3>
        <p className="text-[#333] mb-2">
          <em>
            In Short: Some information — such as your Internet Protocol (IP)
            address and/or browser and device characteristics — is collected
            automatically when you visit our Services.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </p>

        <p className="text-[#333] mb-4">
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </p>

        <p className="text-[#333] mb-2">The information we collect includes:</p>
        <p className="text-[#333] font-semibold mb-2">Log and Usage Data.</p>
        <p className="text-[#333] mb-4">
          Log and usage data is service-related, diagnostic, usage, and
          performance information our servers automatically collect when you
          access or use our Services and which we record in log files. Depending
          on how you interact with us, this log data may include your IP
          address, device information, browser type, and settings and
          information about your activity in the Services (such as the date/time
          stamps associated with your usage, pages and files viewed, searches,
          and other actions you take such as which features you use), device
          event information (such as system activity, error reports (sometimes
          called "crash dumps"), and hardware settings).
        </p>

        <p className="text-[#333] font-semibold mb-2">Device Data.</p>
        <p className="text-[#333] mb-4">
          We collect device data such as information about your computer, phone,
          tablet, or other device you use to access the Services. Depending on
          the device used, this device data may include information such as your
          IP address (or proxy server), device and application identification
          numbers, location, browser type, hardware model, Internet service
          provider and/or mobile carrier, operating system, and system
          configuration information.
        </p>

        <p className="text-[#333] font-semibold mb-2">Location Data.</p>
        <p className="text-[#333] mb-4">
          We collect location data such as information about your device's
          location, which can be either precise or imprecise. How much
          information we collect depends on the type and settings of the device
          you use to access the Services. For example, we may use GPS and other
          technologies to collect geolocation data that tells us your current
          location (based on your IP address). You can opt out of allowing us to
          collect this information either by refusing access to the information
          or by disabling your Location setting on your device. However, if you
          choose to opt out, you may not be able to use certain aspects of the
          Services.
        </p>
      </>
    ),
  },
  {
    title: "2. HOW DO WE PROCESS YOUR INFORMATION?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To facilitate account creation and authentication and otherwise manage
          user accounts.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information so you can create and log in to your
          account, as well as keep your account in working order.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To deliver and facilitate delivery of services to the user.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information to provide you with the requested
          service.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To respond to user inquiries/offer support to users.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information to respond to your inquiries and solve
          any potential issues you might have with the requested service.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To send administrative information to you.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information to send you details about our products
          and services, changes to our terms and policies, and other similar
          information.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To fulfill and manage your orders.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information to fulfill and manage your orders,
          payments, returns, and exchanges made through the Services.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To enable user-to-user communications.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information if you choose to use any of our
          offerings that allow for communication with another user.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To send you marketing and promotional communications.
        </p>
        <p className="text-[#333] mb-4">
          We may process the personal information you send to us for our
          marketing purposes, if this is in accordance with your marketing
          preferences. You can opt out of our marketing emails at any time. For
          more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below).
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To deliver targeted advertising to you.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information to develop and display personalized
          content and advertising tailored to your interests, location, and
          more.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To evaluate and improve our Services, products, marketing, and your
          experience.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information when we believe it is necessary to
          identify usage trends, determine the effectiveness of our promotional
          campaigns, and to evaluate and improve our Services, products,
          marketing, and your experience.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To identify usage trends.
        </p>
        <p className="text-[#333] mb-4">
          We may process information about how you use our Services to better
          understand how they are being used so we can improve them.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          To determine the effectiveness of our marketing and promotional
          campaigns.
        </p>
        <p className="text-[#333] mb-4">
          We may process your information to better understand how to provide
          marketing and promotional campaigns that are most relevant to you.
        </p>
      </>
    ),
  },
  {
    title: "3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: We may share information in specific situations described
            in this section and/or with the following third parties.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We may need to share your personal information in the following
          situations:
        </p>

        <p className="text-[#333] font-semibold mb-2">Business Transfers.</p>
        <p className="text-[#333] mb-4">
          We may share or transfer your information in connection with, or
          during negotiations of, any merger, sale of company assets, financing,
          or acquisition of all or a portion of our business to another company.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          When we use Google Maps Platform APIs.
        </p>
        <p className="text-[#333] mb-4">
          We may share your information with certain Google Maps Platform APIs
          (e.g., Google Maps API, Places API). To find out more about Google's
          Privacy Policy, please refer to this link.
        </p>
      </>
    ),
  },
  {
    title: "4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: We may use cookies and other tracking technologies to
            collect and store your information.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </p>
      </>
    ),
  },
  {
    title: "5. HOW LONG DO WE KEEP YOUR INFORMATION?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: We keep your information for as long as necessary to
            fulfill the purposes outlined in this privacy notice unless
            otherwise required by law.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </p>

        <p className="text-[#333] mb-4">
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </>
    ),
  },
  {
    title: "6. HOW DO WE KEEP YOUR INFORMATION SAFE?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: We aim to protect your personal information through a
            system of organizational and technical security measures.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </p>
      </>
    ),
  },
  {
    title: "7. DO WE COLLECT INFORMATION FROM MINORS?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: We do not knowingly collect data from or market to
            children under 18 years of age.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the Services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent's use of the Services. If we learn
          that personal information from users less than 18 years of age has
          been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at compliance@salesdriver.io.
        </p>
      </>
    ),
  },
  {
    title: "8. WHAT ARE YOUR PRIVACY RIGHTS?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: You may review, change, or terminate your account at any
            time.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your local data protection supervisory authority. You can
          find their contact details here:
          https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
        </p>

        <p className="text-[#333] mb-4">
          If you are located in Switzerland, the contact details for the data
          protection authorities are available here:
          https://www.edoeb.admin.ch/edoeb/en/home.html.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Withdrawing your consent:
        </p>
        <p className="text-[#333] mb-4">
          If we are relying on your consent to process your personal
          information, which may be express and/or implied consent depending on
          the applicable law, you have the right to withdraw your consent at any
          time. You can withdraw your consent at any time by contacting us by
          using the contact details provided in the section "HOW CAN YOU CONTACT
          US ABOUT THIS NOTICE?" below.
        </p>

        <p className="text-[#333] mb-4">
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Opting out of marketing and promotional communications:
        </p>
        <p className="text-[#333] mb-4">
          You can unsubscribe from our marketing and promotional communications
          at any time by clicking on the unsubscribe link in the emails that we
          send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we
          send, or by contacting us using the details provided in the section
          "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be
          removed from the marketing lists. However, we may still communicate
          with you — for example, to send you service-related messages that are
          necessary for the administration and use of your account, to respond
          to service requests, or for other non-marketing purposes.
        </p>

        <p className="text-[#333] font-semibold mb-2">Account Information</p>
        <p className="text-[#333] mb-4">
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#333] mb-4">
          <li>Log in to your account settings and update your user account.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>

        <p className="text-[#333] mb-4">
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          legal terms and/or comply with applicable legal requirements.
        </p>

        <p className="text-[#333] mb-4">
          If you have questions or comments about your privacy rights, you may
          email us at compliance@salesdriver.io.
        </p>
      </>
    ),
  },
  {
    title: "9. CONTROLS FOR DO-NOT-TRACK FEATURES",
    content: (
      <>
        <p className="text-[#333] mb-4">
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage no
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice.
        </p>
      </>
    ),
  },
  {
    title: "10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: Yes, if you are a resident of California, you are granted
            specific rights regarding access to your personal information.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
        </p>

        <p className="text-[#333] mb-4">
          If you are under 18 years of age, reside in California, and have a
          registered account with Services, you have the right to request
          removal of unwanted data that you publicly post on the Services. To
          request removal of such data, please contact us using the contact
          information provided below and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Services, but
          please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g., backups, etc.).
        </p>

        <p className="text-[#333] font-semibold mb-2">CCPA Privacy Notice</p>
        <p className="text-[#333] mb-4">
          The California Code of Regulations defines a "resident" as:
        </p>
        <ol className="list-decimal pl-6 space-y-1 text-[#333] mb-4">
          <li>
            every individual who is in the State of California for other than a
            temporary or transitory purpose and
          </li>
          <li>
            every individual who is domiciled in the State of California who is
            outside the State of California for a temporary or transitory
            purpose
          </li>
        </ol>
        <p className="text-[#333] mb-4">
          All other individuals are defined as "non-residents."
        </p>

        <p className="text-[#333] mb-4">
          If this definition of "resident" applies to you, we must adhere to
          certain rights and obligations regarding your personal information.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          What categories of personal information do we collect?
        </p>
        <p className="text-[#333] mb-4">
          We have collected the following categories of personal information in
          the past twelve (12) months:
        </p>

        <div className="overflow-x-auto mt-6 rounded-lg  my-10">
          <table className="min-w-full text-[#333]">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-2 px-4 border border-gray-300 text-left">
                  Category
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left">
                  Examples
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left">
                  Collected
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  A. Identifiers
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Contact details, such as real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address, and account name
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  B. Personal information categories listed in the California
                  Customer Records statute
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Name, contact information, education, employment, employment
                  history, and financial information
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  C. Protected classification characteristics under California
                  or federal law
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Gender and date of birth
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  D. Commercial information
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Transaction information, purchase history, financial details,
                  and payment information
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  E. Biometric information
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Fingerprints and voiceprints
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  F. Internet or other similar network activity
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Browsing history, search history, online behavior, interest
                  data, and interactions with our and other websites,
                  applications, systems, and advertisements
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  G. Geolocation data
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Device location
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  H. Audio, electronic, visual, thermal, olfactory, or similar
                  information
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Images and audio, video or call recordings created in
                  connection with our business activities
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  I. Professional or employment-related information
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Business contact details in order to provide you our Services
                  at a business level or job title, work history, and
                  professional qualifications if you apply for a job with us
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  J. Education Information
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Student records and directory information
                </td>
                <td className="py-2 px-4 border border-gray-300">NO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  K. Inferences drawn from other personal information
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  Inferences drawn from any of the collected personal
                  information listed above to create a profile or summary about,
                  for example, an individual's preferences and characteristics
                </td>
                <td className="py-2 px-4 border border-gray-300">YES</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[#333] mb-4">
          We may also collect other personal information outside of these
          categories through instances where you interact with us in person,
          online, or by phone or mail in the context of:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#333] mb-4">
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>
            Facilitation in the delivery of our Services and to respond to your
            inquiries.
          </li>
        </ul>

        <p className="text-[#333] font-semibold mb-2">
          How do we use and share your personal information?
        </p>
        <p className="text-[#333] mb-4">
          More information about our data collection and sharing practices can
          be found in this privacy notice.
        </p>

        <p className="text-[#333] mb-4">
          You may contact us by email at compliance@salesdriver.io, or by
          referring to the contact details at the bottom of this document.
        </p>

        <p className="text-[#333] mb-4">
          If you are using an authorized agent to exercise your right to opt out
          we may deny a request if the authorized agent does not submit proof
          that they have been validly authorized to act on your behalf.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Will your information be shared with anyone else?
        </p>
        <p className="text-[#333] mb-4">
          We may disclose your personal information with our service providers
          pursuant to a written contract between us and each service provider.
          Each service provider is a for-profit entity that processes the
          information on our behalf.
        </p>

        <p className="text-[#333] mb-4">
          We may use your personal information for our own business purposes,
          such as for undertaking internal research for technological
          development and demonstration. This is not considered to be "selling"
          of your personal information.
        </p>

        <p className="text-[#333] mb-4">
          SalesDriver has not disclosed or sold any personal information to
          third parties for a business or commercial purpose in the preceding
          twelve (12) months. SalesDriver will not sell personal information in
          the future belonging to website visitors, users, and other consumers.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Your rights with respect to your personal data
        </p>
        <p className="text-[#333] font-semibold mb-2">
          Right to request deletion of the data — Request to delete
        </p>
        <p className="text-[#333] mb-4">
          You can ask for the deletion of your personal information. If you ask
          us to delete your personal information, we will respect your request
          and delete your personal information, subject to certain exceptions
          provided by law, such as (but not limited to) the exercise by another
          consumer of his or her right to free speech, our compliance
          requirements resulting from a legal obligation, or any processing that
          may be required to protect against illegal activities.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Right to be informed — Request to know
        </p>
        <p className="text-[#333] mb-4">
          Depending on the circumstances, you have a right to know:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#333] mb-4">
          <li>whether we collect and use your personal information;</li>
          <li>the categories of personal information that we collect;</li>
          <li>
            the purposes for which the collected personal information is used;
          </li>
          <li>whether we sell your personal information to third parties;</li>
          <li>
            the categories of personal information that we sold or disclosed for
            a business purpose;
          </li>
          <li>
            the categories of third parties to whom the personal information was
            sold or disclosed for a business purpose; and
          </li>
          <li>
            the business or commercial purpose for collecting or selling
            personal information.
          </li>
        </ul>
        <p className="text-[#333] mb-4">
          In accordance with applicable law, we are not obligated to provide or
          delete consumer information that is de-identified in response to a
          consumer request or to re-identify individual data to verify a
          consumer request.
        </p>

        <p className="text-[#333] font-semibold mb-2">
          Right to Non-Discrimination for the Exercise of a Consumer's Privacy
          Rights
        </p>
        <p className="text-[#333] mb-4">
          We will not discriminate against you if you exercise your privacy
          rights.
        </p>

        <p className="text-[#333] font-semibold mb-2">Verification process</p>
        <p className="text-[#333] mb-4">
          Upon receiving your request, we will need to verify your identity to
          determine you are the same person about whom we have the information
          in our system. These verification efforts require us to ask you to
          provide information so that we can match it with information you have
          previously provided us. For instance, depending on the type of request
          you submit, we may ask you to provide certain information so that we
          can match the information you provide with the information we already
          have on file, or we may contact you through a communication method
          (e.g., phone or email) that you have previously provided to us. We may
          also use other verification methods as the circumstances dictate.
        </p>

        <p className="text-[#333] mb-4">
          We will only use personal information provided in your request to
          verify your identity or authority to make the request. To the extent
          possible, we will avoid requesting additional information from you for
          the purposes of verification. However, if we cannot verify your
          identity from the information already maintained by us, we may request
          that you provide additional information for the purposes of verifying
          your identity and for security or fraud-prevention purposes. We will
          delete such additionally provided information as soon as we finish
          verifying you.
        </p>

        <p className="text-[#333] font-semibold mb-2">Other privacy rights</p>
        <ul className="list-disc pl-6 space-y-1 text-[#333] mb-4">
          <li>
            You may object to the processing of your personal information.
          </li>
          <li>
            You may request correction of your personal data if it is incorrect
            or no longer relevant, or ask to restrict the processing of the
            information.
          </li>
          <li>
            You can designate an authorized agent to make a request under the
            CCPA on your behalf. We may deny a request from an authorized agent
            that does not submit proof that they have been validly authorized to
            act on your behalf in accordance with the CCPA.
          </li>
          <li>
            You may request to opt out from future selling of your personal
            information to third parties. Upon receiving an opt-out request, we
            will act upon the request as soon as feasibly possible, but no later
            than fifteen (15) days from the date of the request submission.
          </li>
        </ul>

        <p className="text-[#333] mb-4">
          To exercise these rights, you can contact us by email at
          compliance@salesdriver.io, or by referring to the contact details at
          the bottom of this document. If you have a complaint about how we
          handle your data, we would like to hear from you.
        </p>
      </>
    ),
  },
  {
    title: "11. DO WE MAKE UPDATES TO THIS NOTICE?",
    content: (
      <>
        <p className="text-[#333] mb-2">
          <em>
            In Short: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </em>
        </p>
        <p className="text-[#333] mb-4">
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </p>
      </>
    ),
  },
  {
    title: "12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
    content: (
      <>
        <p className="text-[#333] mb-4">
          If you have questions or comments about this notice, you may email us
          at compliance@salesdriver.io or by post to:
        </p>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-[#333]">SalesDriver</p>
          <p className="text-[#333]">2117 N Lake Ave</p>
          <p className="text-[#333]">Altadena, CA 91001</p>
          <p className="text-[#333]">United States</p>
        </div>
      </>
    ),
  },
  {
    title:
      "13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
    content: (
      <>
        <p className="text-[#333] mb-4">
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it. To request to review, update,
          or delete your personal information, please visit: info@salesdriver.io.
        </p>
        <p className="text-[#333] text-sm italic">
          This privacy policy was created using Termly's Privacy Policy
          Generator.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-sm">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-black text-[#25b4e6] mt-2">
          Privacy Policy
        </h1>
        <p className="text-[#666] font-medium text-sm mt-6">
          Last Updated: August 19, 2022
        </p>
      </div>
      <div className="relative space-y-7 mb-16">
        {terms.map((term, index) => (
          <div key={index} className="relative flex items-start gap-4">
            {index !== terms.length - 1 && (
              <div className="absolute left-[5px] top-7 w-[2px] h-full bg-gray-200"></div>
            )}
            <div className="w-7 h-7 -ml-2 rounded-full bg-[#00A7E2] flex items-center justify-center">
              <Dot className="text-white w-8" />
            </div>

            <div className="w-full">
              <h2 className="text-[#121212] font-bold mb-3 text-lg sm:text-xl">
                {term.title}
              </h2>
              <div className="text-[#333] mt-1 text-[15px] sm:text-[16px] leading-relaxed">
                {term.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
