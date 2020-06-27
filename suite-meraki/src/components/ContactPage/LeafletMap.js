import React from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mapIcon from "./images/white-tree.png";

const useStyles = makeStyles((theme) => ({
  addressInfoContainer: {
    fontSize: "1rem",
    marginBottom: "1rem",
  },
}));

const myIcon = L.icon({
  iconUrl: mapIcon,
  iconSize: [75, 78],
  iconAnchor: [38, 77],
  popupAnchor: [0, -78],
});

const LeafletMap = () => {
  const classes = useStyles();
  const position = [37.277261, -121.85196];

  return (
    <Map center={position} zoom={17} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        maxZoom="20"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          <div className={classes.addressInfoContainer}>
            Suite Meraki
            <br />
            3851 Charter Park Drive, Suite V
            <br /> San Jose, CA 95136
            <br />
          </div>
          <div className={classes.addressButtonContainer}>
            <Button
              variant="outlined"
              size="small"
              target="_blank"
              href="https://www.google.com/maps/dir//37.277261,-121.85196/@37.277261,-121.8525072,19z/data=!4m2!4m1!3e0"
            >
              Get Directions
            </Button>
          </div>
        </Popup>
      </Marker>
    </Map>
  );
};

export default LeafletMap;
