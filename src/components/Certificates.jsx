import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt"; // Import Tilt component for tilting effect

const CertificateCard = ({ index, name, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Use the Tilt component for tilting effect */}
      <Tilt
        options={{
          max: 15, // Maximum tilt angle
          scale: 1.05, // Scale factor on hover
        }}
        className="certificate-card"
      >
        <div className="certificate-image">
          {/* Replace with a blurred certificate image */}
          <div className="blurred-certificate-image"></div>
          <a
            className="view-button"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  const dummyCertificateData = [
    {
      name: "Certificate 1",
      image: "url_to_certificate_image.jpg",
      link: "https://example.com/certificate1.pdf",
    },
    {
      name: "Certificate 2",
      image: "url_to_certificate_image.jpg",
      link: "https://example.com/certificate2.pdf",
    },
    // Add more certificates with images and links
  ];

  return (
    <div className="certificates-section">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Certificates</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* Add your description here */}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {dummyCertificateData.map((certificate, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
