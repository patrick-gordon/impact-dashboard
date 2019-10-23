// Contains test functions right now

'use strict';
const shakespeare = require('./queryShakespeare')

module.exports.hello = async event=> {
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Go Serverless!',
            event
          },
          null,
          2
        )
      }
    }

module.exports.catMemes = async event=> {
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Look at all these chickens!',
            event
          },
          null,
          2
        )
      }
    }


// This function invokes queryShakespeare (awaiting it), then returns a message along with the query results (an array of words with associated wordcounts)
module.exports.shakespeareQuotes = async event=> {
  const query = await shakespeare.queryShakespeare();
      return {
        statusCode: 200,
        // This header is needed for CORS. Possibly not necessary once deployed with frontend and backend on the same domain, impact.connectourkids.org
        // Note, I tried "Access-Control-Allow-Origin": "http://localhost:3000" but got the CORS error again, so I've reverted to *
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(
          {
            message: 'Look at all these chickens!',
            query,
            event
          },
          null,
          2
        )
      }
    }
