import React from "react";
import {
  viewAnnouncementeData,
  viewAnnouncementHeader,
} from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function ViewAnnouncement() {
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
                <DataTable
                  header={viewAnnouncementHeader}
                  data={viewAnnouncementeData}
                />
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
}
