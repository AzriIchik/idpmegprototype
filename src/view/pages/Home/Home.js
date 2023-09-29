import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import NavbarContainer from "../../components/NavbarContainer";

//WALLPAPERS
import googleImgLink from "../../../data/googleImgLink";

const Home = () => {

  const [validated, setValidated] = React.useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div>
        <NavbarContainer modalControl={setShowModal}></NavbarContainer>
        <div id="scrollspyAbout" className="container-fluid mt-5"  data-bs-spy="scroll" data-bs-target="#idpmnavbar" data-bs-offset="50">
          <div  className="row home-main-bg position-relative">
            <div className="home-filter"></div>
            <div className="text-center position-relative p-5">
              <h1 className="fw-bold">IDPM ENGINEERING SDN BHD</h1>
              <p className="m-0 my-1 fw-bold">
                Electrical Engineer in DESA PARK CITY
              </p>
              <p className="m-0 mb-2 fw-bold">Opening at 9:00 AM tomorrow</p>
              <button
                type="button"
                className="btn btn-primary mx-auto px-5 py-3 m-2"
                style={{ width: "fit-content" }}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                GET QUOTE
              </button>
            </div>
          </div>

          <div className="row p-3 p-md-5">
            <div className="container text-center py-2">
              <h4 className="m-0 fw-bold">ABOUT US</h4>
              <span className="font-small">
                QUALITY AND QUANTITY CONTRACTORS
              </span>
            </div>

            <hr className="line-style mx-auto" />

            <p className="text-center">
              IDPM is a full-service office interior design firm in KL,
              Malaysia, specialising in cost-effective premium design and space
              planning for corporate offices and commercial spaces.Under the
              expert guidance of founder and partners, we have expanded our
              capabilities and services into producing and providing custom
              quality finishes and furnishings.In 2018, we are registered under
              the Construction Industry Development Board (CIDB) Malaysia with a
              G7 license, and following year registered with Ministry Of Finance
              (MOF) which permits us to undertake civil engineering construction
              and building interior construction projects.
            </p>
          </div>

          <div
            className="row p-3 p-md-5 my-5 "
            style={{ backgroundColor: "#f5f5f5" }}
            id="scrollspyGallery"
          >
            <div className="container text-center py-2">
              <h4 className="m-0 fw-bold">GALLERY</h4>
              <hr className="line-style mx-auto" />
            </div>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {googleImgLink.map((data, index) => {
                  return (
                    <div key={index} className="gallery-img py-1">
                      <img className="img-fluid" src={data} alt="g1" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div id="scrollspyContact" className="row p-3 p-md-5 my-5 mb-0">
            <div className="container text-center py-2">
              <h4 className="m-0 fw-bold">CONTACT US</h4>
              <hr className="line-style mx-auto" />

              <div className="officeinfo-map-container px-5">
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.650609633066!2d101.62774341475739!3d3.1862439976800685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49740356e251%3A0xbd8a943fb2a3475f!2sIDPM%20ENGINEERING%20SDN%20BHD!5e0!3m2!1sen!2smy!4v1648954425661!5m2!1sen!2smy"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="container p-2 my-3">
                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col text-start p-3">
                    <h5 className="fw-bold">CONTACT</h5>
                    <a
                      className="btn btn-primary mx-auto px-5 py-3 my-3"
                      href="tel:03-6411 8808"
                    >
                      CALL NOW
                    </a>
                    <p className="fw-bold">03-6411 8808</p>
                  </div>

                  <div className="col text-start p-3">
                    <h5 className="fw-bold">ADDRESS</h5>
                    <a
                      className="btn btn-primary mx-auto px-5 py-3 my-3"
                      href="https://www.google.com/maps/dir/4.4589196,118.6128043/idpm+engineering+sdn+bhd/@-0.3806411,101.0697583,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc49740356e251:0xbd8a943fb2a3475f!2m2!1d101.6299321!2d3.186244"
                      target="_blank"
                    >
                      GET DIRECTION
                    </a>
                    <p>
                      BLOCK A, NO A-3-11, ANSON PLAZA ARKADIA <br />
                      DESA PARK CITY
                      <br />
                      52200 KUALA LUMPUR
                      <br />
                      Kuala Lumpur
                      <br />
                      Malaysia
                    </p>
                  </div>

                  <div className="col text-start p-3">
                    <h5 className="fw-bold">BUSSINESS HOURS</h5>
                    <p>
                      Mon: 9:00 AM – 6:00 PM
                      <br />
                      Tue: 9:00 AM – 6:00 PM
                      <br />
                      Wed: 9:00 AM – 6:00 PM
                      <br />
                      Thu: 9:00 AM – 6:00 PM
                      <br />
                      Fri: 9:00 AM – 6:00 PM
                      <br />
                      Sat: Closed
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false)
        }}
        centered
      >
        <Modal.Header closeButton bsPrefix="modal-header border-0">
          <Modal.Title as="p" bsPrefix="fw-bold m-0">
            GET QUOTE
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="my-2">
                <Form.Control type="text" placeholder="Name" required />
                <Form.Control.Feedback type="invalid">
                  Please provide your name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-2">
                <Form.Control type="text" placeholder="Phone number" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a proper phone number
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-2">
                <Form.Control type="email" placeholder="Email" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="my-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="How can we help you?"
                />
              </Form.Group>
            </Row>
            <Modal.Footer className="modal-footer border-0 p-0">
              <Button type="submit" className="">
                SUBMIT
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
