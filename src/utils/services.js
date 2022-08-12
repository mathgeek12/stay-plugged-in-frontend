// api calls

const api = "http://localhost:8000";

const fetchData = (endpoint, callBack) => {
  fetch(`${api}${endpoint}`)
    .then((res) => res.json())
    .then((result) => {
      callBack(result);
    });
};

export const fetchEmployees = (callBack) => {
  fetchData("/employees/", callBack);
};

export const fetchDeviceTypes = (callBack) => {
  fetchData("/device-types/", callBack);
};

export const fetchRepairTypes = (callBack) => {
  fetchData("/repair-types/", callBack);
};

export const fetchOrders = (callBack) => {
  fetchData("/orders/", callBack);
};
