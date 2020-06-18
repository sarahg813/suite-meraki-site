import React from "react";
import { Helmet } from "react-helmet";

const TitleComponent = ({ title }) => {
  var defaultTitle =
    "Suite Meraki&#174; | Hair &amp; Beauty Salon | San Jose, CA";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export { TitleComponent };
