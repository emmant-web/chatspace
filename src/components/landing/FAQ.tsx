import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is ChatSpace free to use?",
    answer:
      "Yes! ChatSpace is completely free to use. Create rooms, have conversations, and connect with as many people as you want—no hidden fees, no credit card required, ever.",
  },
  {
    question: "Can I sign in with my Google account?",
    answer:
      "Absolutely! We support Google sign-in for quick and secure access. You can also sign up with your email!",
  },
  {
    question: "Can I use ChatSpace on my phone?",
    answer:
      "Yes! ChatSpace works seamlessly across all devices—desktop, tablet, and mobile. Access your conversations anywhere with our fully responsive design that adapts to any screen size.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-muted overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ChatSpace. Can't find what you're
            looking for? Feel free to reach out.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted transition-colors duration-300"
              >
                <span className="text-body-lg font-semibold text-card-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-linear-to-r from-border via-secondary/30 to-border mb-4"></div>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;