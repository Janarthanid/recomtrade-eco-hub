
import { Circle, Recycle, ShieldCheck, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-teal" />,
      title: "Quality Assurance",
      description:
        "Every device is thoroughly tested and graded by our certified technicians before listing.",
    },
    {
      icon: <Recycle className="h-10 w-10 text-brand-teal" />,
      title: "Sustainable Choice",
      description:
        "Extend the life of electronics and reduce environmental impact by choosing refurbished items.",
    },
    {
      icon: <Truck className="h-10 w-10 text-brand-teal" />,
      title: "Safe Shipping",
      description:
        "All products are professionally packaged and shipped with tracking and insurance.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How ReComTrade Works</h2>
          <p className="text-gray-600">
            We make buying and selling refurbished electronics simple, secure, and sustainable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Eco-Impact Tracking</h3>
              <p className="text-gray-600 mb-4">
                Every purchase on ReComTrade contributes to reducing e-waste. Track your personal
                environmental impact with our CO₂ savings calculator.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Circle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Receive an eco-impact badge for each transaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Track your cumulative carbon footprint reduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Share your environmental impact on social media</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 h-full flex items-center justify-center">
              <div className="w-full max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <div className="inline-block p-4 bg-brand-green/10 rounded-full mb-2">
                    <Recycle className="h-8 w-8 text-brand-green" />
                  </div>
                  <h4 className="font-semibold">Platform Impact</h4>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span className="text-sm">E-waste Reduced</span>
                    <span className="font-bold">940 kg</span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span className="text-sm">CO₂ Emissions Saved</span>
                    <span className="font-bold">12.4 tonnes</span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span className="text-sm">Devices Rehomed</span>
                    <span className="font-bold">1,200+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
