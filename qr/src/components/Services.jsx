const Services = () => {
  const services = [
    {
      title: "Wedding Lighting",
      description: "Transform your wedding venue with our stunning lighting solutions that create a magical atmosphere."
    },
    {
      title: "Birthday Parties",
      description: "Make birthdays unforgettable with dynamic lighting that matches your party theme."
    },
    {
      title: "Religious Events",
      description: "Enhance spiritual gatherings with appropriate and respectful lighting designs."
    },
    {
      title: "Engagement Parties",
      description: "Set the perfect romantic mood for your special engagement celebration."
    },
    {
      title: "Corporate Events",
      description: "Professional lighting solutions for business events, conferences, and galas."
    },
    {
      title: "Stage Lighting",
      description: "Dynamic stage lighting for performances, concerts, and theatrical productions."
    }
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;