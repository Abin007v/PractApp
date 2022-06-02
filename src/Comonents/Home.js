import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./Home.css";
import Info from "./Info";

function Home() {
  const targert = useRef();
  const [dataEle, setData] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetchFun();
  }, []);

  const handleclick = () => {
    // localStorage.setItem("DataInlocl", "in localStorage");
    // const fromLc = localStorage.getItem("DataInlocl");
    // console.log(fromLc);
    // console.log(targert);
  };
  const fetchFun = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setArr(res.data.drinks);
        console.log(res.data.drinks);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="main-cnt">
        <div style={{ fontSize: "3rem" }}>{dataEle}</div>
        <button onClick={handleclick}>set</button>
        <Link to={"/about"}>
          <button>about page</button>
        </Link>

        <Info prop={dataEle} />

        <div style={{ marginTop: "4vw" }} ref={targert}>
          {arr &&
            arr.map((item, id) => {
              return (
                <div>
                  <Link to={`/info/${item.idDrink}`}>
                    <button>{item.strDrink}</button>
                  </Link>
                  ;
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
