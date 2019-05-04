import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map((item, index) => {
          return (
            <TopicItem key={index}>
              <img className="topic-pic" src={item.get('imgUrl')} alt="" />
              {item.get('title')}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'topicList'])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Topic);
