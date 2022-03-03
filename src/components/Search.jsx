import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import JobList from "./JobLists";
import uniqid from "uniqid";
import { fetchJobs } from "../redux/actions";

const mapStateToProps = (state) => ({
  jobsFromReduxStore: state.job.jobset,
});

const mapDispatchToProps = (dispatch) => ({
  GET_JOBS: (query) => dispatch(fetchJobs(query)),
});

class Search extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.props.GET_JOBS(this.state.query);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={10} className="mx-auto my-3"></Col>
          <Col md={8} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                className="btn-search"
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="Job title,Company"
              />
            </Form>
          </Col>
          <Col xs={4} className="mx-auto ">
            <Button variant="outline-dark" onClick={this.handleSubmit}>
              search
            </Button>
          </Col>
          <Col xs={10} className="mx-auto mb-4">
            {this.props.jobsFromReduxStore.map((jobData) => (
              <JobList key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
