import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ApolloClient from "apollo-boost";


const client = new ApolloClient({
  uri: '/graphql'
});


// client
//   .query({
//     query: gql`
//       {
//         allLists {
//             nodes {
//               id
//               name
//             }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result))

ReactDOM.render(<App />, document.getElementById('root'));
