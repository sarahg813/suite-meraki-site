import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const BeforeTreatment = () => {
  return (
    <div>
      <Paper>
        <Typography>Before Your Treatment</Typography>
        <Typography>
          Prior to your permanent cosmetic enhancement think about the look that
          you wish to achieve. As experts in the field of color analysis and
          makeovers, we ensure that the correct colors and styles are chosen for
          you. However, you are part of the decision-making process.
        </Typography>

        <Typography>
          Permanent cosmetic enhancements normally require multiple application
          sessions. To achieve the best results, you will be required to return
          for at least one control procedure four to six weeks after the initial
          application.{" "}
        </Typography>

        <Typography>
          Be prepared for the color intensity to be significantly sharper and
          darker immediately after the procedure. This will subside and become
          softer as the skin heals. This process can take up to 14 days.{" "}
        </Typography>

        <ul>
          <li>
            Since delicate skin or sensitive areas may be swollen or red, you
            are advised not to make social plans on the day of your enhancement.
          </li>
          <li>
            Please wear your normal make-up for your enhancement appointment.
          </li>
          <li>
            Do not take aspirin or Ibuprofen 2 days prior to and after your
            enhancement.
          </li>
          <li>
            Do not discontinue any medication before consulting your doctor.
          </li>
          <li>
            Keep alcohol intake to a minimum of 2 days prior to and after your
            enhancement.
          </li>
          <li>
            A sensitivity test will be performed unless waived upon request.
          </li>
          <li>
            Do not use Retin-A skincare products close to the enhancement area 1
            month prior to and after your procedure.{" "}
          </li>
          <li>
            Do not use AHA skincare products close to the enhancement area 2
            weeks prior to and after your procedure.
          </li>
          <li>
            As with electrolysis, the National Blood Service does not accept
            donations of blood for 1 year after a permanent cosmetic
            enhancement.
          </li>
        </ul>
        <Typography>Eyebrow Enhancement</Typography>
        <ul>
          <li>
            Waxing treatments should be performed no less than 3 days prior to
            your enhancement.
          </li>
          <li>
            IPL laser hair removal should be performed no less than 2 weeks
            prior to your enhancement.
          </li>
          <li>
            Electrolysis treatments should be performed no less than 5 days
            prior to your enhancement.{" "}
          </li>
          <li>
            Eyebrow tinting should not be undertaken for 2 weeks after your
            enhancement.{" "}
          </li>
        </ul>
      </Paper>
    </div>
  );
};

export default BeforeTreatment;
