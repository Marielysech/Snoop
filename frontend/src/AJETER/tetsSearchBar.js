import SearchBar from "material-ui-search-bar";
import Drop from "./drop";
import { Select } from "baseui/select";
import { useSelector } from "react-redux";
import Sel from "./select";
import { Button, SHAPE } from "baseui/button";
import Face from "./avatar";
import { SIZE } from "baseui/combobox";

export default function Searchbar({
  search,
  setsearch,
  action,
  logo,
  setid,
  id,
  setfriend,
  setopen
}) 

{
  function handleClick(e) {
    //setfriend();
    action(e);
  }

  function handleChange(e) {
    setsearch(e);
  }
  const src = require("../src/slack.png");

  const user = useSelector((state) => state.user);
  let arr = [];

  for (let key in user) {
    if (key != id) arr.push({ label: user[key].name, id: user[key].id });
  }
  return (
    <div className="search">
      <img className="logo" src={src} alt="" width="70px" height="70px" />
      {/* <SearchBar
        onChange={handleChange}
        onRequestSearch={handleClick}
        style={{
          margin: "0 400px",
          width: "800px",
          minWidth: "300px"
        }}
      /> */}

      <Sel
        options={arr}
        placeholder="Search Sprinklr.."
        onChange={handleClick}
      />
      {/* <Select
        options={arr}
        placeholder="Search Sprinklr.."
        onChange={handleChange}
      /> */}

      {/* <Drop id={id} setid={setid} setfriend={setfriend} /> */}
      <div
        style={{
          marginTop: "8px",
          position: "fixed",
          right: "40px"
        }}
      >
        <Button
          size={SIZE.mini}
          shape={SHAPE.circle}
          onClick={() => setopen(true)}
        >
          <Face userid={id} />
        </Button>
      </div>
    </div>
  );
}

/////////////////////////////////////////

import * as React from "react";
import { Combobox } from "baseui/combobox";

import { useSelector } from "react-redux";

export default function Drop({ id, setid, setfriend }) {
  const user = useSelector((state) => state.user);

  let arr = [];
  for (let key in user) {
    arr.push({ label: user[key].name, id: user[key].id });
  }
  function findid(name) {
    let id;
    for (let key in user) {
      if (user[key].name === name) {
        id = user[key].id;
      }
    }
    return id;
  }
  return (
    <div style={{ zIndex: "500", marginRight: "25px" }}>
      <Combobox
        value={user[id].name}
        onChange={(nextValue) => {
          let id = findid(nextValue);
          console.log(id);
          setid(id);
          setfriend(null);
        }}
        options={arr}
        mapOptionToString={(option) => option.label}
        overrides={{
          Input: {
            props: {
              overrides: {
                Input: {
                  style: ({ $theme }) => ({
                    outline: `${$theme.colors.warning600} solid`,
                    backgroundColor: $theme.colors.white,
                    color: $theme.colors.black
                  })
                }
              }
            }
          }
        }}
      />
    </div>
  );
}
