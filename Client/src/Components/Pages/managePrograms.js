import React from "react";
import { programData, programHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

/* import Table from "../shared/Table"; */
export default function ManagePrograms() {
  /*   const columns = [
    {
      Header: "Program",
    },
    {
      Header: "Long Name",
      accessor: "gender",
    },
    {
      Header: "Min Semesters",
      accessor: "dob",
    },

    {
      Header: "Max Semesters",
      accessor: "email",
    },
    {
      Header: "Duration (Years)",
    },
  ]; */

  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <div>
                <DataTable header={programHeader} data={programData} />
                {/* <Table
                  columns={columns}
                  data={[data]}
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
}
