import "./weaponList.css";
import { DataGrid } from "@material-ui/data-grid";
import { View } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WeaponList() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(data.length<1)
    fetch('http://localhost:3001/player/weapons').then(response => response.json()).then(jsonData=>{setData(jsonData)})
  })

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="weaponListItem">
            <img className="weaponListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { 
      field: "id",
      headerName: "ID",
      width: 120 
    },
    { field: "type", headerName: "Type", width: 120 },
    {
      field: "rarity",
      headerName: "Rarity",
      width: 120,
    },
    {
      field: "baseAtk",
      headerName: "Attack",
      width: 120,
    },
    {
      field: "subStatType",
      headerName: "Sub",
      width: 120,
    },
    {
      field: "subStat",
      headerName: "Stat",
      width: 120,
    },
    {
      field: "location",
      headerName: "Obtainage",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/weapon/" + params.row.id}>
              <button className="weaponListView">View</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="weaponList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
      />
    </div>
  );
}
