const API_KEY = process.env.REACT_APP_API_KEY

export const excerciseOptions = {
  method: 'GET',
  headers: { 'X-Api-Key': API_KEY },
  contentType: 'application/json',
};

export const fetchData = async (url, options) => {

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}