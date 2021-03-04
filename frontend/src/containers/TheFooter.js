import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  let year = new Date();

  return (
    <CFooter fixed={false}>
      <div>
        <p className="text-center">
          © 2015 - {year.getFullYear()} Darrel Technologies Limited. All Rights
          Reserved.
        </p>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
