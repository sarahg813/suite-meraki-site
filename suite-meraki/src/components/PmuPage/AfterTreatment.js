import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1.5rem",
    "@media (max-width: 767px)": {
      padding: "1rem",
    },
  },
  title: {
    fontFamily: "Arapey",
    marginBottom: "1rem",
  },
  paragraph: {
    marginBottom: ".75rem",
  },
}));

const AfterTreatment = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3" className={classes.title}>
          After Your Treatment
        </Typography>
        <Typography className={classes.paragraph}>
          The area treated may show redness and swelling and that the color
          looks dark and intense - this is quite normal.
        </Typography>

        <Typography className={classes.paragraph}>
          Additional treatments cannot be undertaken until the area has
          completely healed. A 4-6 week healing time is required before any more
          work can be undertaken.
        </Typography>

        <Typography className={classes.paragraph}>
          In order to let your brows heal well avoid water on the brow area,
          makeup on the brow area, the gym, sauna, or pool for 7 days.
        </Typography>

        <Typography className={classes.paragraph}>
          Once the area has healed completely, approximately one week, consider
          using a waterproof total sunblock when going out in the sun to stop
          the color fading.
        </Typography>
        <Typography className={classes.paragraph}>
          Strong chemicals or glycolic acid/peels of any kind may cause the
          pigment to lighten. Always telephone and check with your consultant if
          you have any doubt.
        </Typography>
        <Typography>
          Do not pick or pull at the treated area as it will result in pigment
          loss. You will go through three healing phases:
        </Typography>

        <ol>
          <li>Heal</li>
          <li>Peel</li>
          <li>Fade</li>
        </ol>
        <Typography className={classes.paragraph}>
          You may notice whiteness or blanching around the area, this is quite
          normal and will subside within 12 hours. If you find any lymphatic
          fluid or blood weeping, you can gently clean the area with saline,
          cool boiled water, and use gauze to gently blot dry to remove any
          moisture.{" "}
        </Typography>

        <Typography className={classes.paragraph}>
          With clean hands and a cotton ball, apply a fine layer of aftercare
          balm to the treated area. Repeat this procedure up to 3 times a day if
          the area feels tight.
        </Typography>
        <Typography>
          After the fine scabbing has sloughed away you will see a different hue
          to the color implanted.{" "}
        </Typography>
        <ul>
          <li>
            Giving blood - The Red Cross has suggested that you do not give
            blood for 6 months following treatment.
          </li>
          <li>
            MRI Scans - This procedure shows up as an artifact on the scan. Some
            clients may experience a tingling sensation. Please notify your
            radiologist.
          </li>
          <li>
            Injectable - Dermal fillers and botox can alter the shape of the
            eyebrows. The client should be advised that injectable should be
            carried out after a microblading procedure and not prior.
          </li>
          <li>
            Laser/Pulsed Light - Laser or pulsed light hair removal or skin
            rejuvenation treatments can cause color change - it is important to
            advise the therapist that you have had microblading procedure as
            this cannot be rectified with another microblading procedure.
          </li>
          <li>
            Color Refreshing - To keep your new brows looking at their best, it
            is recommended that you have a color refresh procedure every 12-18
            months.{" "}
          </li>
        </ul>
      </Paper>
    </div>
  );
};

export default AfterTreatment;
