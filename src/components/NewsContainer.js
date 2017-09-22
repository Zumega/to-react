import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewsContainer extends Component {
  constructor(
    props, 
    context
  ) {
    super(props, context);

    // this.rediretToAddCoursePage = this.rediretToAddCoursePage.bind(this);
  }

  render() {
    const {
      title, 
      description,
      date,
      person
    } = this.props.data;

    return (
      <section className="event">
        <SectionHeader header={title} person={person} date={date} />
        <Description description={description} />
      </section>
    );
  }
}

NewsContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default NewsContainer;