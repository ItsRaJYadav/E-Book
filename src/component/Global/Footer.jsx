import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Container>
        <p className="text-center text-muted mb-0">
          &copy; 2023 E-Book. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
