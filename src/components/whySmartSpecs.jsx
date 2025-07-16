import {
  PhoneCall,
  Sun,
  Smartphone,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: <PhoneCall className="text-blue-900 w-6 h-6 mr-3 shrink-0" />,
    title: "Hands-Free Calls",
    description:
      "Take calls without touching your phone. Crystal-clear mic and speaker built right in.",
  },
  {
    icon: <Sun className="text-blue-900 w-6 h-6 mr-3 shrink-0" />,
    title: "UV Protection",
    description:
      "Premium polarized lenses block harmful UV rays and reduce glare.",
  },
  {
    icon: <Smartphone className="text-blue-900 w-6 h-6 mr-3 shrink-0" />,
    title: "Universal Compatibility",
    description:
      "Works with all smartphones via Bluetooth—iPhone, Android, and more.",
  },
  {
    icon: <Zap className="text-blue-900 w-6 h-6 mr-3 shrink-0" />,
    title: "Lightweight & Stylish",
    description:
      "Sleek modern design you can wear all day without discomfort.",
  },
  {
    icon: <ShieldCheck className="text-blue-900 w-6 h-6 mr-3 shrink-0" />,
    title: "7‑Day Guarantee + Fast Delivery",
    description:
      "Try risk-free. Orders ship swiftly to your door across the nation.",
  },
];

const WhySmartSpecs = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
          Why Choose SmartSpecs?
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.icon}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySmartSpecs;
