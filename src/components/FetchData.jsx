import axios from "axios";
export default function FetchData (url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
