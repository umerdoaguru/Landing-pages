import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import cogoToast from "cogo-toast";

const TrialDataModal = ({ show, onClose, category }) => {
  console.log(category);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    address: "",
    category: category,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      setFormData((prev) => ({ ...prev, category: category }));
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://dentalguru.software/api/auth/saveTrialData",
        formData
      );
      cogoToast.success("Trial data saved successfully!");
      setFormData({
        username: "",
        email: "",
        mobile: "",
        address: "",
        category: category,
      });
      setLoading(false);
      if (category === "lite") {
        window.open(
          "https://dentalguru-lite-trial.dentalguru.software/",
          "_blank"
        );
      } else {
        window.open(
          "https://masterdentalgurudemo.dentalguru.software/",
          "_blank"
        );
      }

      onClose();
    } catch (err) {
      console.error(err);
      setLoading(false);
      cogoToast.error("Server error while saving trial data!");
    }
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={true}
      animation={true} // Bootstrap built-in animation
    >
      <Modal.Header closeButton>
        <Modal.Title>Save Trial Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter your username"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile*</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter your mobile number"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Form.Group> */}

          <div className="text-end">
            <Button variant="secondary" onClick={onClose} className="me-2">
              Cancel
            </Button>
            <Button disabled={loading} type="submit" variant="primary">
              {loading ? "Save...." : "Save"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TrialDataModal;
