import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { connect } from "react-redux";
import { removeFromFavoriteAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  favorite: state.favorite.jobset,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (index) => {
    dispatch(removeFromFavoriteAction(index));
  },
});

const Favourites = ({ favorite, removeFromFavorites }) => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {favorite.map((jobs, i) => (
              <div>
                <li key={i} className="my-4">
                  <Button
                    variant="danger"
                    onClick={() => removeFromFavorites(i)}
                  >
                    <MdOutlineRemoveCircle />
                  </Button>
                  <span className="mx-5">{jobs.title}</span>
                  <span className="mx-5">{jobs.company_name}</span>
                  <span className="mx-5">{jobs.job_type}</span>
                </li>
              </div>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
