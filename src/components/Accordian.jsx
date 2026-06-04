import { useState } from "react";

function Accordian() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Section 1",
      content: "This is content for Section 1",
    },
    {
      title: "Section 2",
      content: "This is content for Section 2",
    },
    {
      title: "Section 3",
      content: "This is content for Section 3",
    },
  ];

  function handleToggle(index) {
    console.log(openIndex, index, "dfgcv");
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div>
      <h2>Accordion</h2>

      {sections.map((section, index) => (
        <div key={index}>
          <h3 style={{ cursor: "pointer" }} onClick={() => handleToggle(index)}>
            {openIndex === index ? "-" : "+"} {section.title}
          </h3>

          {openIndex === index && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
