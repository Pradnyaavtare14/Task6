/* eslint-disable react/prop-types */
import  { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Accordion</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur. Vel parturient duis vulputate mauris enim, tortor. Sed parturient</p>
      <div className="border-t">
        <AccordionItem
          title="Why choose us?"
          content="Lorem ipsum dolor sit amet, consectetur. Vel parturient duis vulputate mauris enim, tortor. Sed parturient"
          isOpen={openIndex === 0}
          onClick={() => toggleOpen(0)}
        />
        <AccordionItem
          title="What is accordion?"
          content="Lorem ipsum dolor sit amet, consectetur. Vel parturient duis vulputate mauris enim, tortor. Sed parturient"
          isOpen={openIndex === 1}
          onClick={() => toggleOpen(1)}
        />
        <AccordionItem
          title="How it works?"
          content="Lorem ipsum dolor sit amet, consectetur. Vel parturient duis vulputate mauris enim, tortor. Sed parturient"
          isOpen={openIndex === 2}
          onClick={() => toggleOpen(2)}
        />
        <AccordionItem
          title="When should I use accordion?"
          content="Lorem ipsum dolor sit amet, consectetur. Vel parturient duis vulputate mauris enim, tortor. Sed parturient"
          isOpen={openIndex === 3}
          onClick={() => toggleOpen(3)}
        />
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        className="flex justify-between w-full p-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p>{content}</p>
          {title === "How it works?" && (
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
