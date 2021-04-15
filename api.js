const api_url = "http://www.json-generator.com/api/json/get/cqdlsldEbS?indent=2";
const api_url_b = "http://www.json-generator.com/api/json/get/bZOwahmUuq?indent=2";
const api_url_bo = "http://www.json-generator.com/api/json/get/bTSnclybvS?indent=2";

const handleSearch = async (keyword) => {
  let url;
  switch (keyword) {
    case "b":
      url = api_url_b;
      break;
    case "bo":
      url = api_url_bo;
      break;

    default:
      url = api_url;
      break;
  }

  const resp = await axios.get(url);
  let data;
  if (resp && resp.status === 200) {
    data = resp.data;
  }
  return data;
};
