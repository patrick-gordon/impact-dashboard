import React, { useState, useEffect } from 'react';
import './PublicDashboard.scss';
import { increment, decrement } from '../../redux/actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import USAMaps from "../../Visualization/USAMap";
import Pie from "../../Visualization/pie";

const tempData = [
  {
    metric: "Children Served",
    value: "5,236"
  },
  {
    metric: "Successful Placement Ratio",
    value: "82%"
  },
  {
    metric: "Connections Discovered",
    value: "64,234"
  },
  {
    metric: "Kinship Search Users",
    value: "1,865"
  },
  {
    metric: "Permanent Placements",
    value: "4,634"
  },
  {
    metric: "Average Days To Placement",
    value: "34"
  },
]

  const PublicDashboard = props => {
    const Button = styled.button`
    height: 3rem;
    padding: 0 70px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 3rem;
    background-color: #1d8eb6;
    color: white;
    font-size: 18px;
  `;

    // const [words, setWords] = useState();

    useEffect(() => {
      // fetch('https://wp4hb8gbwh.execute-api.us-east-1.amazonaws.com/dev-ehalsmert/shakespeareQuotes')
      //   .then(response => response.json())
      //   .then(data => {
      //     setWords(data.query)
      //   })
      //   .catch(error => console.log(error))
    }, [])

    return (
      <>
        <main>
          <div className="public-stats-grid">
            {/* provided words is not undefined (after the fetch above happens), map over the first 6 words, displaying a div with the wordcount and word */}
            {/* {words ? words.slice(0,6).map((word, idx) => <div key={idx} className="metric">
            <b>{word.word_count}</b>
            <p>{word.word}</p>
          </div>) : 'Loading words'} */}
            {tempData.map((el, idx) => (
              <div key={idx} className={`metric metric-${idx}`}>
                <b>{el.value}</b>
                <div className="divider" />
                <p>{el.metric}</p>
              </div>
            ))}
          </div>
        </main>

        <h2 className="header-callout">This is how our efforts are making an impact.</h2>

        <Button>
          Donate
      </Button>
        <div className="holder">
          <div className="map">
            <USAMaps />
          </div>
          <div className="pie">
            <Pie />
          </div>
        </div>
      </>
    )
  }


  const mapStateToProps = state => {
    return {
      count: state.count
    };
  };

  export default connect(
    mapStateToProps,
    { increment, decrement }
  )(PublicDashboard);
