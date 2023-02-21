export const excerciseOptions = {
  method: 'GET',
  headers: { 'X-Api-Key': 'process.env.REACT_APP_RAPID_API_KEY' },
};

export const fetchData = async (url, options) => {

  const response = await fetch(url, options);
  const data = await response.json();

  console.log(data)

  return data;
}