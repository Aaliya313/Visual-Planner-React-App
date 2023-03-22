/** @format */

import axios from "axios";
//const axios = require("axios");

const APIKEY = "cb12ad6ffdmshb45acf4175c9c96p1842c1jsnca50530ad104";
const options = {
  method: "get",
  url: "https://world-time2.p.rapidapi.com/timezone/Europe/Paris",
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "world-time2.p.rapidapi.com",
  },
};
function CalendarAPI() {
  const getCalendar = () => {
    console.log("getCalendar");
    axios
      .request(options)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      Hello Calendar
      <button onClick={getCalendar}>Get Calendar right now</button>
    </div>
  );
}
export default CalendarAPI;

// const baseURL = 'https://world-time2.p.rapidapi.com/timezone/Europe/London';
// export default function Calendar () {
//     const [calendar, setCalendar] = React.useState(null);
//     return axios.get(baseURL + Calendar + APIKEY);
// };

// React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//         setCalendar(response.data);
//     });
// });
// return (

// )
//};

// const options = {
//   method: 'GET',
//   url: 'https://world-time2.p.rapidapi.com/timezone/Europe/London',
//   headers: {
//     'X-RapidAPI-Key': '4472822361msh9dd056b547c78cap156b7djsn4bef76dfc82c',
//     'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
