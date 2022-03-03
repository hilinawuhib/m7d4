import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  favorite: state.favorite.jobs,
});

const MyNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="navtxt" href="/">
          Job search app
        </Navbar.Brand>
        <Button className="navbtn" onClick={() => navigate("/favorite")}>
          Favorites
        </Button>
      </Navbar>
    </>
  );
};

export default connect(mapStateToProps)(MyNavbar);
