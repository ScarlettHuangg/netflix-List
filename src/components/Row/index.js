import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Row extends Component {

  render() {
    const {list,recomms, removeOne,addOne} = this.props;
   // const recomms = this.props.recomms;
    return (
      <div>
        <div className="mylist">
          <h2>Movie List</h2>
          {list.map(ele => {
            return (
              <div className="listitem" key={ele.id}>
                <img src={ele.img} alt="top-pic" />
                <div className="title">{ele.title}</div>
                <div className="button">
                  <button
                    className="remove"
                    onClick={() => removeOne(ele)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relist">
          <h2>Recommendations</h2>
          {recomms.map(ele => {
            return (
              <div className="listitem" key={ele.id}>
                <img src={ele.img} alt="second-pic" />
                <div className="title">{ele.title}</div>
                <div className="button">
                  <button
                    className="add"
                    onClick={() => addOne(ele)}
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.myList,
    recomms: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOne: item => {
      dispatch(actions.deleteMovie(item));
    },
    addOne: item => {
      dispatch(actions.addMovie(item));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);
