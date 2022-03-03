import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../redux/actions";
import { connect } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

const mapStateToProps = (state) => ({
  favorite: state.favorite.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (company) => dispatch(addToFavoriteAction(company)),
  removeFromFavorites: (company) => dispatch(removeFromFavoriteAction(company)),
});

const JobList = ({ data, favorite, addToFavorites, removeFromFavorites }) => {
  const isFavorite = favorite.includes(data);
  console.log(isFavorite, favorite);
  const toggleFavorite = () => {
    isFavorite
      ? removeFromFavorites(data)
      : addToFavorites(data);
  };
  return (
    <Row className="mt-5 joblist">
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={6}>
        <p> {data.category}</p>
      </Col>
      <Col xs={2}>
        <p> {data.job_type}</p>
      </Col>
      <Col xs={6}>
        {isFavorite ? (
          <AiFillHeart
            size={28}
            className="me-4 my-auto"
            onClick={toggleFavorite}
          />
        ) : (
          <BsHeart
            size={28}
            className=" me-4 my-auto"
            onClick={toggleFavorite}
          />
        )}
        <Link className="mx-2" to={`/${data.company_name}`}>
          {data.company_name}
        </Link>
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
