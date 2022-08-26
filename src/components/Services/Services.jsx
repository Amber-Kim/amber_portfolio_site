import React from "react";

// Styles
import "./services.css";

// Card
import { ServicesCard } from "components/Services/ServicesCard/ServicesCard";
import { Heading } from "components/Heading/Heading";

const Services = ({ services }) => {
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      name="stack"
      id="stack"
    >
      <Heading text="Stack" />
      <div className="services-cards">
        {services &&
          services?.map((elem , index) => (
            <ServicesCard
              key={index}
              image={elem.icon}
              title={elem.title}
              tags={elem.tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
