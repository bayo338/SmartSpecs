import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-[#0a1a3c] min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Last updated: July 8, 2025
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700">
              At SmartSpecs, your privacy is important to us. This Privacy Policy
              explains how we collect, use, and protect your personal information when you visit or make a purchase from our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p className="text-gray-700">
              When you use our site, we may collect personal information such as your name, phone number, email address, and delivery location. We also collect anonymous usage data to improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your information to:
              <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                <li>Process and confirm your orders</li>
                <li>Communicate with you regarding updates or promotions</li>
                <li>Improve our website’s design and performance</li>
                <li>Ensure a smooth and secure user experience</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
            <p className="text-gray-700">
              We do not sell or rent your personal data. We only share your information with trusted delivery partners or service providers necessary to complete your order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Data Protection</h2>
            <p className="text-gray-700">
              We implement strong security measures to protect your data. However, no system is 100% secure, so we encourage safe browsing practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to request access to or deletion of your personal data at any time. Contact us through the "Contact" page for such requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy occasionally. All changes will be posted on this page with the updated date above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about your privacy, feel free to reach out to us via our <a href="/contact" className="text-blue-600 underline">Contact</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
