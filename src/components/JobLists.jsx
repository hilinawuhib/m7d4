import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { fetchJobs } from "../redux/actions";
import { connect } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { removeFromFavoriteAction } from "../redux/actions";
import { addToFavoriteAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  favorites: state.favorite.jobset,
});

const mapDispatchToProps = (dispatch) => ({
  GET_JOBS: (query) => dispatch(fetchJobs(query)),
  removeFromFavorites: (index) => dispatch(removeFromFavoriteAction(index)),
  addToFavorites: (index) => dispatch(addToFavoriteAction(index)),
});

const JobList = ({ data, favorites, addToFavorites, removeFromFavorites }) => {
  const isFavorite = favorites.includes(data);
  console.log(isFavorite, favorites);
  const toggleFavorite = () => {
    isFavorite ? removeFromFavorites(data) : addToFavorites(data);
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
