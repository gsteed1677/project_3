import React, {useState} from "react"
import Grid from '@material-ui/core/Grid';
import "../App.css";
import Search from "../components/Search"
import SearchInput from "../components/SearchResult"
import AboutUs from "../components/AboutUs"
import DumpStuff from "../components/DumpStuff"
import Trending from "../components/Trending"

export default function Main() {
    const [data, setData] = useState([])




    return (
        <div className="App">
        <Search setData={setData} />
        <SearchInput setData={setData} data={data} />
        <Grid container>
            <Grid item xs={4}>
              <Trending title="Top Trending" />
            </Grid>
            <Grid item xs={4}>
              <Trending title="Second in line" />
            </Grid>
            <Grid item xs={4}>
              <Trending title="Third from the top" />
            </Grid>
          </Grid>
          <br />
          <br />
          <DumpStuff />
          <AboutUs />



        </div>
    )

}