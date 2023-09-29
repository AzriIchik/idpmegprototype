import React, {useState} from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./index.css";


const NavbarContainer = ({modalControl}) => {

  return (
    <>
      <div className="container-fluid p-0 fixed-top" style={{ zIndex: 999 }}>
        <NavBar modalControl={modalControl}/>
      </div>
      <NavMobileMenu modalControl={modalControl}></NavMobileMenu>
    </>
  );

};

const NavBar = ({modalControl}) => {

  const [showCanvas, setshowCanvas] = useState(false);

  const handleOpenCanvas = () => setshowCanvas(true);

  const handleCloseCanvas = () => {
    setTimeout(() => {
      setshowCanvas(false);
    }, 500);
  }

  return (
    <Navbar
      id="idpmnavbar"
      bg="light shadow px-2 position-relative"
      className="navbar-mobile-style"
      expand={false}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="desk-brand">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            as="div"
            className="navbar-toggle-style d-inline"
            onClick={()=>{handleOpenCanvas();}}
          />
          <h5 className="nav navbar-logo-title">IDPM ENGINEERING SDN BHD</h5>
        </Navbar.Brand>

        <div className="nav-items">
          <Nav.Item bsPrefix="me-3 d-inline">
            <Nav.Link bsPrefix="navbar-link-style f16" onClick={()=>{modalControl(true)}}>
              <i className="fa-solid fa-envelope me-3"></i>
              <span> GET QUOTE</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item bsPrefix="me-3  d-inline">
            <Nav.Link bsPrefix="navbar-link-style f16" href="tel:03-6411 8808">
              <i className="fa-solid fa-phone me-2"></i>
              <span> CALL NOW</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item bsPrefix="me-3  d-inline">
            <Nav.Link
              bsPrefix="navbar-link-style f16"
              href="https://www.google.com/maps/dir/4.4589196,118.6128043/idpm+engineering+sdn+bhd/@-0.3806411,101.0697583,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc49740356e251:0xbd8a943fb2a3475f!2m2!1d101.6299321!2d3.186244"
              target="_blank"
            >
              <i className="fa-solid fa-diamond-turn-right me-2"></i>
              <span> GET DIRECTION</span>
            </Nav.Link>
          </Nav.Item>
        </div>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          backdrop={false}
          scroll={true}
          show={showCanvas}
          bsPrefix="offcanvas"
        >
          <Offcanvas.Header closeButton onClick={()=>{setshowCanvas(false)}}>
            <Navbar.Brand href="#home" className="desk-brand">
              <h5 className="nav navbar-logo-title">
                IDPM ENGINEERING SDN BHD
              </h5>
            </Navbar.Brand>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link bsPrefix="navbar-link-style" href="#scrollspyAbout" onClick={()=>{handleCloseCanvas()}}>
                <h5>ABOUT US</h5>
              </Nav.Link>

              <Nav.Link bsPrefix="navbar-link-style" href="#scrollspyGallery" onClick={()=>{handleCloseCanvas()}}>
                <h5>GALLERY</h5>
              </Nav.Link>

              <Nav.Link bsPrefix="navbar-link-style" href="#scrollspyContact" onClick={()=>{handleCloseCanvas()}}>
                <h5>CONTACTS</h5>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

const NavMobileMenu = ({modalControl}) => {
  return (
    <div
      className="nav-menu-container py-2 d-flex justify-content-evenly fixed-bottom font-small"
      style={{ zIndex: 999, backgroundColor: "white" }}
    >
      <div className="p-1 text-center" onClick={()=>{modalControl(true)}}>
        <i className="fa-solid fa-envelope d-block"></i>
        <span>GET QUOTE</span>
      </div>
      <div className="p-1 text-center">
        <a href="tel:03-6411 8808">
          <i className="fa-solid fa-phone d-block"></i>
          <span>CALL ME</span>
        </a>
      </div>
      <div className="p-1 text-center">
        <a
          href="https://www.google.com/maps/dir/4.4589196,118.6128043/idpm+engineering+sdn+bhd/@-0.3806411,101.0697583,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc49740356e251:0xbd8a943fb2a3475f!2m2!1d101.6299321!2d3.186244"
          target="_blank"
        >
          <i className="fa-solid fa-diamond-turn-right d-block"></i>
          <span>GET DIRECTION</span>
        </a>
      </div>
    </div>
  );
};

export default NavbarContainer;
