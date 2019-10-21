// This function fetches data from the Shakespeare public dataset on Google BigQuery. We can use a similar function to fetch data from ConnectOurKids once it's available

'use strict';

    // Import the Google Cloud client library
    const {BigQuery} = require('@google-cloud/bigquery');
    
    const bigQueryCreds = require('../secrets')

    exports.queryShakespeare = async function() {
        // Queries a public Shakespeare dataset.
        const projectId = "bigquerygithub-256021";    

        // Create a client
        const bigqueryClient = new BigQuery({
            projectId: projectId,
            credentials: bigQueryCreds
        });
        console.log(process.env, "this")

        // The SQL query to run
        const sqlQuery = `SELECT word, word_count
            FROM \`bigquery-public-data.samples.shakespeare\`
            WHERE corpus = @corpus
            AND word_count >= @min_word_count
            ORDER BY word_count DESC`;

        const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
        params: {corpus: 'romeoandjuliet', min_word_count: 250},
        };

        // Run the query
        const [rows] = await bigqueryClient.query(options);

        console.log('Rows:');
        rows.forEach(row => console.log(row));
    }



