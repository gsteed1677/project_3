import React, { useState } from "react"
import Grid from '@material-ui/core/Grid';
import "../App.css";
import Search from "../components/Search"
import SearchInput from "../components/SearchResult"
import AboutUs from "../components/AboutUs"
import DumpStuff from "../components/DumpStuff"
import Trending from "../components/Trending"

export default function Main() {
  const [data, setData] = useState([])




<<<<<<< HEAD
    return (
        <div className="App">
        <Search setData={setData} />
        <SearchInput setData={setData} data={data} />
          <DumpStuff />
        <Grid container>
            <Grid item xs={4}>
              <Trending title="Top Trending" data="The one that the people love to hate" Image="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGF1bmRyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            </Grid>
            <Grid item xs={4}>
              <Trending title="Second in line" data="In Knitting we trust" Image="https://images.unsplash.com/photo-1519412849983-957822373d02?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8a25pdHRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            </Grid>
            <Grid item xs={4}>
              <Trending title="Third from the top" data="The one that makes the world go round" Image="https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2luZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </Grid>
          </Grid>
          <br />
          <br />
          <AboutUs />
=======
  return (
    <div className="App">
      <Search setData={setData} />
      <SearchInput setData={setData} data={data} />
      <DumpStuff />
      <Grid container>
        <Grid item xs={4}>
          <Trending title="Top Trending" data="The one that the people love to hate" Image="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGF1bmRyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Grid>
        <Grid item xs={4}>
          <Trending title="Second in line" data="In Knitting we trust" Image="https://images.unsplash.com/photo-1519412849983-957822373d02?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8a25pdHRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Grid>
        <Grid item xs={4}>
          <Trending title="Third from the top" data="The one that makes the world go round" Image="https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2luZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Grid>
      </Grid>
      <br />
      <br />
      <AboutUs />
>>>>>>> 2825876673ad4f417e8a7fcf21c8ff62018bf72c



    </div>
  )

}