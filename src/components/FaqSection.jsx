import { useState } from "react";
import "../styles/FaqSection.css";
import Footer from "./footer";

const faqs = [
  {
    question: "How does Nimii know if an idea will work?",
    answer:
      "Nimii uses creator psychology, hook frameworks, and viral content patterns to generate creator-ready scripts in seconds."
  },
  {
    question: "Can beginners use Nimii?",
    answer:
      "No. Nimii is designed for beginners and experienced creators alike. Just enter your idea and get a structured script instantly."
  },
  {
    question: "Does Nimii work for TikTok, Reels and YouTube Shorts?",
    answer:
      "Yes. Nimii is optimized for short-form platforms including TikTok, Instagram Reels, and YouTube Shorts."
  },
  {
    question: "Can Nimii predict virality?",
    answer:
      "Nothing guarantees virality, but Nimii helps improve hooks, retention psychology, and content structure to maximize performance."
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription whenever you want."
  },
 
{
  question: "How accurate are the scores?",
  answer: `No tool can guarantee views.

Nimii analyzes hooks, retention psychology,
clarity, curiosity, and audience fit before
you spend hours creating.`
}

  
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
return (
  <>
    <section id="faq" className="faq-section">
      <div className="faq-glow"></div>

      <div className="faq-header">
        <span className="faq-tag">
          ✨ FREQUENTLY ASKED QUESTIONS
        </span>

        <h2>
          Everything creators ask before  <span>they start</span>
        </h2>

        <p>
          Everything about validation, scoring, scripts and getting better results.

        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${
              openIndex === index ? "active" : ""
            }`}
            key={index}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>

            {openIndex === index && (
              <p className="faq-answer">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
  

  </section>

<Footer />
</>
);
}