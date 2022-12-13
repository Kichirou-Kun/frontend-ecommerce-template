import Container from "@ui/Container";
import Typography from "@ui/Typography";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-SECONDARY_DARK py-8">
      <Container>
        <Typography className="text-center font-semibold text-white">
          Copyright © <span>{new Date().getFullYear().toLocaleString()}</span>{" "}
          Aung Nyein Htet | All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
