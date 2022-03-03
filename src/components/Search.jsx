import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import JobList from "./JobLists";
import { addToFavoriteAction } from "../redux/actions";
import uniqid from "uniqid";
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (company) => {
    dispatch(addToFavoriteAction(company));
  },
});

class Search extends Component {
  state = {
    query: "",
    jobs: [],
  };
  componentDidUpdate(prevProps) {
    if (prevProps.jobSelected !== this.props.jobSelected) {
      this.setState({
        job: this.props.jobSelected,
      });
    }
  }

  BASE_URL = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      this.BASE_URL + this.state.query + "&limit=15"
    );
    console.log(response);
    if (!response.ok) {
      console.log("error");
      return;
    }

    const { data } = await response.json();
    console.log(data);

    this.setState({ jobs: data });
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
            {this.state.jobs.map((jobData) => (
              <JobList key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
