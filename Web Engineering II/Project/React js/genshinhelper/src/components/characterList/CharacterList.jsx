import "./characterList.css";
import { DataGrid } from "@material-ui/data-grid";
import { View } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(data.length<1)
    fetch('http://localhost:3001/player/characters').then(response => response.json()).then(jsonData=>{setData(jsonData)})
  })

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="characterListItem">
            <img className="characterListImg" src={params.row.icon} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { 
      field: "id",
      headerName: "ID",
      width: 100 
    },
    { field: "element", headerName: "Element", width: 150 },
    {
      field: "rarity",
      headerName: "Rarity",
      width: 120,
    },
    {
      field: "weapon",
      headerName: "Weapon",
      width: 160,
    },
    {
      field: "region",
      headerName: "Region",
      width: 160,
    },
    {
      field: "constellation",
      headerName: "Constellation",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/character/" + params.row.id}>
              <button className="characterListView">View</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="characterList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
      />
    </div>
  );
}
