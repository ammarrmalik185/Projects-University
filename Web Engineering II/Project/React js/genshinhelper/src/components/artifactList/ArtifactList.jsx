import "./artifactList.css";
import { DataGrid } from "@material-ui/data-grid";
import { View } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ArtifactList() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(data.length<1)
    fetch('http://localhost:3001/player/artifacts').then(response => response.json()).then(jsonData=>{setData(jsonData)})
  })

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="artifactListItem">
            <img className="artifactListImg" src={params.row.image} alt="" />
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
    { field: "{artifactSet.id}", headerName: "Set", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    {
      field: "rarity",
      headerName: "Rarity",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/artifact/" + params.row.id}>
              <button className="artifactListView">View</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="artifactList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
      />
    </div>
  );
}
