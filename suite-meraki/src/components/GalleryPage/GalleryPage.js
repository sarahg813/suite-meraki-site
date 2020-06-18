import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageGallery from "./ImageGallery";
import { TitleComponent } from "../tools/TitleComponent";

const useStyles = makeStyles((theme) => ({
  galleryTitle: {
    color: "white",
  },
  galleryTitleContainer: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
}));

const GalleryPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.galleryRoot}>
      <TitleComponent title="Gallery | Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA" />
      <div className={classes.galleryTitleContainer}>
        <Typography variant="h3" className={classes.galleryTitle}>
          Gallery
        </Typography>
      </div>
      <div>
        <ImageGallery />
      </div>
    </div>
  );
};

export default GalleryPage;
