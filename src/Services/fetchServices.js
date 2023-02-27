import axios from "axios";
import swal from "sweetalert";
const ServerURL = "http://localhost:8888";

const getDataAxios = async (url, body) => {
  var Token = JSON.parse(localStorage.getItem("Token"));
  try {
    const result = await axios.get(`${ServerURL}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Token.token}`,
      },
    });
    if (result === "Session has Expired Please Login Again") {
      alert("Session has Expired Please Login Again");
      return [];
    } else {
      return result.data;
    }
  } catch (e) {
    console.log("Error in Get Data Service ====59", e);
    return null;
  }
};

// To Send Data In Node
const postDataAxios = async (url, body) => {
  var Token = JSON.parse(localStorage.getItem("Token"));
  try {
    const result = await axios.post(`${ServerURL}/${url}`, body, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Token.token}`,
      },
      body: JSON.stringify(body),
    });
    if (result === "Session has Expired Please Login Again") {
      alert("Session has Expired Please Login Again");
      return [];
    } else {
      return result.data;
    }
  } catch (e) {
    console.log("Error in Get Data Service ====59", e);
    return e;
  }
};

const putDataAxios = async (url, body) => {
  var Token = JSON.parse(localStorage.getItem("Token"));
  try {
    const result = await axios.put(`${ServerURL}/${url}`, body, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Token.token}`,
      },
    });
    if (result === "Session has Expired Please Login Again") {
      alert("Session has Expired Please Login Again");
      return [];
    } else {
      return result.data;
    }
  } catch (e) {
    console.log("Error in Get Data Service ====59", e);
    return null;
  }
};

const postDataAndImageAxios = async (Url, body) => {
  var Token = JSON.parse(localStorage.getItem("Token"));
  try {
    var url = `${ServerURL}/${Url}`;
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${Token.token}`,
      },
    };

    var response = await axios.post(url, body, config);
    var result = response.data;
    return result;
  } catch (error) {
    if (error.response.status == 401) {
      // alert("Session Expired");
      swal("session Expired!", "Please Login again", "error", {
        buttons: false,
      });
      localStorage.clear();

      setTimeout(() => window.location.replace("/AdminLogin"), 2000);
    } else {
      console.log(error);
    }
  }
};

const postDataAxiosWithoutToken = async (url, body) => {
  try {
    const result = await axios.post(`${ServerURL}/${url}`, body, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    if (result === "Session has Expired Please Login Again") {
      alert("Session has Expired Please Login Again");
      return [];
    } else {
      return result.data;
    }
  } catch (e) {
    return null;
  }
};

export {
  ServerURL,
  getDataAxios,
  postDataAxios,
  postDataAndImageAxios,
  putDataAxios,
  postDataAxiosWithoutToken,
};
