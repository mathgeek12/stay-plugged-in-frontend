// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/dashboards/sales/data/dataTableData";
import { useEffect, useState } from "react";
import { fetchOrders } from "../../../utils/services";
import DefaultCell from "./components/DefaultCell";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

function Sales() {
  const [isLoading, setisLoading] = useState(false);
  const [tableData, setTableData] = useState(dataTableData);

  const getOrders = () => {
    const newTableData = dataTableData;
    setisLoading(true);
    const success = (orders) => {
      orders.forEach((order) => {
        const orderObj = {
          deviceType: <DefaultCell>{order.device_type.name}</DefaultCell>,
          repairType: <DefaultCell>{order.repair_type.name}</DefaultCell>,
          employee: <DefaultCell>{order.employee.name}</DefaultCell>,
        };
        newTableData.rows.push(orderObj);
      });
      setTableData(newTableData);
      setisLoading(false);
    };
    fetchOrders(success);
  };

  useEffect(() => {
    if (tableData.rows.length === 0) {
      getOrders();
    }
  }, [tableData]);

  const renderTable = () => {
    if (tableData.rows.length > 0) {
      return (
        <DataTable
          table={tableData}
          entriesPerPage={false}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
        />
      );
    }
    return "";
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} px={3}>
                <MDTypography variant="h6" fontWeight="medium">
                  Orders
                </MDTypography>
              </MDBox>
              <MDBox py={1}>
                {isLoading && <LoadingScreen />}
                {renderTable()}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Sales;
