import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="bg-white text-[#0a1a3c] min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Effective Date: July 8, 2025
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By using our website or purchasing SmartSpecs products, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Product Information</h2>
            <p className="text-gray-700">
              We strive to ensure that all product descriptions and images are accurate. However, minor variations may occur. All prices are in Nigerian Naira (₦) and subject to change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Orders & Payments</h2>
            <p className="text-gray-700">
              Orders are confirmed through our secure WhatsApp system. Payment must be completed to process your order. We reserve the right to cancel or refuse orders at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Delivery Policy</h2>
            <p className="text-gray-700">
              Delivery is usually completed within 2–5 business days across Nigeria. Delivery times may vary depending on your location and order volume.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Returns & Warranty</h2>
            <p className="text-gray-700">
              Products can be returned within 30 days if there is a manufacturing defect. Items must be unused and returned in their original packaging. To start a return, contact our support team via the <a href="/contact" className="text-blue-600 underline">Contact</a> page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. User Conduct</h2>
            <p className="text-gray-700">
              You agree not to misuse the website, copy content, or attempt unauthorized access. Violations may result in restriction or termination of your access to our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including logos, product images, and text, is the property of SmartSpecs and may not be used without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              SmartSpecs is not liable for any indirect, incidental, or consequential damages resulting from the use of our products or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in Nigerian courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We may revise these Terms and Conditions at any time. Updates will be posted here, and your continued use of the site constitutes acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
            <p className="text-gray-700">
              For questions regarding these Terms, reach out to us via our <a href="/contact" className="text-blue-600 underline">Contact</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
