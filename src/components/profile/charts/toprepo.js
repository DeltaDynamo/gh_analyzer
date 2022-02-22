import DoughnutPlot from "./doughnutplot.js";
import PiePlot from "./pieplot.js"
import { colorpallete } from "./colors";
import "./styles.css"
import axios from 'axios'
import React, {useState, useEffect} from 'react';

//Function to return final data to be fed into doughnut plot by size
//FMust feed the output of sortbysize function
function finaldatabysize(data) {
  const label = [];
  const dataset = [];
  const object = {};
  const sizes = [];

  for(let i=0;i<data.length;i++){
    label.push(data[i][1]);
    sizes.push(data[i][0]);
  }

  object.label = 'Top Repos By Size';
  object.data = sizes;
  object.borderColor = ['rgba(255,206,86,0.2)'];
  object.backgroundColor = colorpallete;
  object.pointBackgroundColor = 'rgba(255,206,86,0.2)';

  dataset.push(object);

  return {
    id: "Top repo by Size",
    labels: label.map(val => {return val;}),
    datasets: dataset
  }
}

//Data by name of repo and its size
//returns a 2d array with first element as size of repo and second no of repo
function sortbysize(resdata){
  let result = [];
  for(let i=0;i<resdata.length;i++){
    let arr = [];
    arr.push(resdata[i].size);
    arr.push(resdata[i].name);
    result.push(arr);
  }
  result.sort((a,b) => {
    return a[0]-b[0];
  });

  let res = [];
  for(let i=result.length - 1;i>=Math.max(result.length-10,0);i--){
    res.push(result[i]);
  }
  return res;
}

function Toprepo(data) {
  let finaldata_size = finaldatabysize(sortbysize(data.data));
  //console.log(data);

  if(data.data.length==0){
    return <h2 className="errrepo">This user has no Public Repositories</h2>;
  }
  return (
    <div>
    <div className="plot">
      <DoughnutPlot data={finaldata_size} />
    </div>
    <div className="plot">
      <DoughnutPlot data={finaldata_size}/>
    </div>
    <div className="plot">
      <PiePlot data={finaldata_size}/>
    </div>
    </div>
  );
}

export default Toprepo;
