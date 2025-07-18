import React from 'react';
import '../Styles/Faq.css';

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "How often should I groom my pet?",
      answer:
        "It depends on the breed, coat type, and lifestyle. On average, dogs and cats should be groomed every 4–6 weeks to maintain hygiene and coat health.",
    },
    {
      id: 2,
      question: "What does a typical grooming session include?",
      answer:
        "Our standard grooming package includes bathing, brushing, nail trimming, ear cleaning, and a haircut or trim depending on your pet’s needs.",
    },
    {
      id: 3,
      question: "Do you groom all breeds and sizes?",
      answer:
        "Yes! We welcome pets of all breeds, sizes, and coat types. Our groomers are trained to handle everything from small lap dogs to large, long-haired breeds.",
    },
    {
      id: 4,
      question: "How long does a grooming session take?",
      answer:
        "Most sessions take 1 to 2 hours, depending on the pet's size, coat condition, and grooming package selected. We’ll notify you when your pet is ready for pickup.",
    },
    {
      id: 5,
      question: "Is grooming safe for my pet?",
      answer:
        "Absolutely. Our certified groomers use gentle techniques, pet-safe products, and always prioritize your pet’s comfort and safety throughout the session.",
    },
    {
      id: 6,
      question: "Do I need to make an appointment?",
      answer:
        "Yes, we recommend booking in advance to ensure availability. You can schedule online or give us a call!",
    },
    {
      id: 7,
      question: "What if my pet is nervous or aggressive?",
      answer:
        "Our team is trained to work with anxious or reactive pets. Please let us know in advance so we can take extra care and allow for more time if needed.",
    },
    {
      id: 8,
      question: "What products do you use on pets?",
      answer:
        "We use high-quality, pet-safe shampoos and conditioners that are hypoallergenic and suitable for sensitive skin.",
    },
  ];

  return (
    <div className="FAQ-wrapper py-4">
      <div className="container">
        <p className="faq my-4 text-center">FAQ's</p>
        <h1 className="faq-title my-4 mb-5 pb-3 text-center ">You’ve got questions, we’ve got answers</h1>

        <div className="accordion" id="faqAccordion">
          {faqData.map((item) => (
            <div className="accordion-item custom-faq p-2" key={item.id}>
              <h2 className="accordion-header " id={`heading${item.id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${item.id}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${item.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
