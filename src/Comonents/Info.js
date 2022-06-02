import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Info(obj) {
  let { prop } = obj;
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${parseInt(
          id
        )}`
      )
      .then((res) => {
        setData(res);
      });
  }, []);
  const submit = () => {
    console.log(data);
  };
  return (
    <div className="main-info">
      <div className="main-cnt-info">
        <div>hello</div>
        <button onClick={submit}>click</button>
      </div>
    </div>
  );
}

export default Info;
