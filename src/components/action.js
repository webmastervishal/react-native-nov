export const fetchCurrencies = (payload) => {
  return async (dispatch) => {
    const result = await fetch(
      "https://webmaster-fake-api.herokuapp.com/currencies",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpc2hhbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IndlYm1hc3RlciIsImlhdCI6MTY2OTU2NDM2MiwiZXhwIjoxNjY5NjUwNzYyfQ.MtRG0PmRa5spNRsIIf8YmhAgXaMxQ6Ok0AOHZCUAZU8",
        },
      }
    );

    const data = await result.json();
    dispatch(storeCurrencies(data));
  };
};

export const storeCurrencies = (payload) => {
  return {
    type: "STORE_CURRENCIES",
    payload,
  };
};
