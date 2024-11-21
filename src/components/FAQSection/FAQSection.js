import React from 'react';
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './FAQSection.css';


const questions = [
    {
        question: "Is there a free trial available?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time from the Billing section of your account. Adjustments will be prorated.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Depending on your plan, you may retain access until the end of your current billing cycle. Check our terms for specific details.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, additional details like your company name, tax information, or address can be added. Check the invoice settings in your billing section.",
    },
    {
        question: "How does billing work?",
        answer:
          "Billing is handled on a subscription basis, with charges applied monthly or annually depending on your chosen plan. Payments are automated for your convenience.",
      },
      {
        question: "How do I change my account email?",
        answer:
          "You can change your account email in your account settings. Navigate to the Profile or Account Details section and update your email address.",
      },
  ];

const plus = <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732171421/Zysk%20Tech%20Assment/tqfreqzqqzaizktgkwye.png" className='plus'/>  

const minus = <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732171421/Zysk%20Tech%20Assment/rn0rrrgt5u4natjqlf0w.png" className='minus'/>

const FAQSection = () => {

    const [openIndex, setOpenIndex] = useState(null); // Tracks which question is open

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

    return (
        <div className="FAQSection p-5 d-flex flex-column justify-content-center align-items-center">
            <h2 className="FAQSection-head">Frequently asked questions</h2>
            <p className="FAQSection-description">
            Everything you need to know about the product and billing.
            </p>
            
            <div className="FAQSection-questions-container mt-5 mb-5">
                {questions.map((item, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="question-button btn w-100 text-start d-flex justify-content-between align-items-center"
                            onClick={() => toggleQuestion(index)}>
                            {item.question}
                            <span>{openIndex === index ?  minus : plus}</span>
                        </button>
                        {openIndex === index && (
                            <div className="answer card card-body mt-2">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>

            <div className="FAQSection-card mb-3">
                <img className="FAQSection-card-image" src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732112323/Zysk%20Tech%20Assment/necp6iwj0alcxh97ueh9.png" alt="FAQSection-logo" />
                <h1 className="FAQSection-card-head">Still have questions?</h1>
                <p className="FAQSection-card-description">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className='FAQSection-card-button'>Get in touch</button>
            </div>

        </div>
    );
};

export default FAQSection;
