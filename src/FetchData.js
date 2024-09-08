import axios from "axios";

export default async function fetchData(url) {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWNlZWUyNDI0NzQ2MDMwNWJmYTMyNjJmY2JkMjNjYiIsIm5iZiI6MTcyNTU2NTUwNC40NjQ5ODIsInN1YiI6IjY2ZGEwNTliNzZiMTI5YjI2MWI4ZDkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEkoUXB2sQOJKcHmpVFIM3-0GiPc7_tuaZpSBoggD8M",
    },
  };
  const response = await axios.get(url, options);

  return response;
}
