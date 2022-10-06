process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const axios = require("axios").default;
const cookie =
  "session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall6TWpkbFltSTJZVGhqTUdJek1EaGhNVFJtTnprM055SXNJbVZ0WVdsc0lqb2llR1JwZEdGaVlVQm5iV0ZwYkM1amIyMGlMQ0pwWVhRaU9qRTJOak0xTmpBMk16QjkuY2VkelBfSzNIMjBpZXFWY190SG9acDd3YnNSQ1Q1MW5fVkE0RTI5T2wtayJ9";

const doRequest = async () => {
  const { data } = await axios.post(
    `https://ticketing.dev/api/tickets`,
    { title: "ticket", price: 5 },
    { headers: { cookie } }
  );

  await axios.put(
    `https://ticketing.dev/api/tickets/${data.id}`,
    { title: "ticket", price: 10 },
    { headers: { cookie } }
  );

  await axios.put(
    `https://ticketing.dev/api/tickets/${data.id}`,
    { title: "ticket", price: 15 },
    { headers: { cookie } }
  );
  console.log("Request complete");
};

(async () => {
  for (let i = 0; i < 400; i++) {
    doRequest();
  }
})();
