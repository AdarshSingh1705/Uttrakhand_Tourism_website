import React from 'react';

const AboutSection = ({ title, content }) => {
  return (
    <section className="about-destination">
      <div>
        <br />
        <h2>{title}</h2>
        <br />
        {content.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            <br />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
