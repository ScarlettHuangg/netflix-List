import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Row extends Component {

  render() {
    const {list,recomms, removeOne,addOne} = this.props;
   // const recomms = this.props.recomms;
    return (
      <div>
        <h2>Movie List</h2>
        <div className="mylist">
          {list.map(ele => {
            return (
              <div className="listitem" key={ele.id}>
                <img className="listImage" src={ele.img} alt="top-pic" />
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

        <h2>Recommendations</h2>
        <div className="relist">
          {recomms.map(ele => {
            return (
              <div className="listitem" key={ele.id}>
                <img className="listImage" src={ele.img} alt="second-pic" />
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

        <div className="bottom">
          <h3 className="bottom">My List</h3>
          <ul>
            {this.props.list.map(item => (
            <li key={item.id} className="bottom-item">
              {item.title}
            </li>
            ))}
          </ul>
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
