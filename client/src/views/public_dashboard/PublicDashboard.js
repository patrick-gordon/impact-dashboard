import React from 'react';
import styled from 'styled-components';

import './PublicDashboard.scss';
import { increment, decrement } from '../../redux/actions/index';
import {connect} from 'react-redux';

const Button = styled.button`
width: 8rem;
margin-top: 20px;
height: 35px;
border-radius: 4px;
background-color: #158fb4;
color: white;
`

const PublicDashboard = (props) => {

  return (
    <>
    <>
      <header>
        <h1>Public Dashboard</h1>
        <h2>Check out how our efforts are making an impact:</h2>
      </header>
      <main>
        <div className="public-stats-grid">
          <div className="metric">
            <b>#</b>
            <p>Metric 1</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 2</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 3</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 4</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 5</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 6</p>
          </div>
        </div>
      </main>
    </>

    <Button>
      Donate
    </Button>

    
        <div>
            <p>
            Clicked: {props.count} times
            <button onClick={() => {props.increment() }}>
                +
            </button>
            <button onClick={() => {props.decrement() }}>
                -
            </button>
            </p>
        </div>
        </>
  )
}


const mapStateToProps = (state) => {
  return {
      count: state.count
  };
};

export default connect(mapStateToProps, {increment, decrement })(PublicDashboard);