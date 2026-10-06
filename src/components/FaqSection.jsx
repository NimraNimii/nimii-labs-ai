import { useState } from "react";
import "../styles/FaqSection.css";
import Footer from "./footer";

const faqs = [
  {
   question: "How does Nimii analyze an idea?",
answer:
  "Nimii analyzes your idea using content frameworks, hook structure, clarity, curiosity, and audience context to help you create a stronger script."
  },
  {
  question: "Can beginners use Nimii?",
  answer:
    "Yes. Nimii is designed for beginners and experienced creators alike. Just enter your idea and get a structured script."
},
  {
    question: "Does Nimii work for TikTok, Reels and YouTube Shorts?",
    answer:
  "Yes. Nimii supports short-form content workflows for TikTok, Instagram Reels, and YouTube Shorts."
  },
  
   {
  question: "Can Nimii guarantee content performance?",
  answer:
    "No. Nimii does not guarantee views, likes, followers, reach, or other results. It analyzes content quality and helps identify areas that can be improved before you publish."

  },
  {
    question: "Is there a free plan?",
   answer:
  "Yes. Nimii offers a free plan, and Pro subscribers can upgrade, downgrade, or cancel their subscription."
  },
 
{
  question: "What do Nimii's scores mean?",
  answer: `Nimii's scores summarize different content-quality dimensions such as hook strength, retention structure, curiosity, clarity, CTA, platform fit, title, and hashtags.

They are analysis indicators, not guarantees of future views, reach, or engagement.`
},

  
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
  Everything about content analysis, scoring, scripts, and improving your ideas.
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