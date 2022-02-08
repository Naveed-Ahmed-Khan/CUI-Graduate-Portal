import React from "react";
import { programWiseData, programWiseHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

const PendingThesis = () => {
  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          {/*  <h3 style={{ textAlign: "center" }}>
          Congratulations, you don't have any pending 
           thesis request.</h3> */}
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <div className="col-md-2 col-sm-4">View Schedule :</div>
              <div className="col-lg-12 mt-2">
                <DataTable header={programWiseHeader} data={programWiseData} />
                {/* <Table
                  columns={columns}
                  data={[]}
                  footer={true}
                  isLoading={false}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingThesis;
