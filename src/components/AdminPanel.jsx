import { useState } from "react";
// import AdminOptions from "../../AdminOptions";
// import AllAvailableLocationsTable from "./AllAvailableLocationsTable";

import AdminOptions from './AdminOptions'

import Styles from './components-css/AdminOptionUi.module.css'

function AdminPanel() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>You can add, edit, or remove locations here.</p>
      
      <div className={Styles.section}>
        {<AdminOptions />}
      </div>
      <div className={Styles.section}>
{/*         
        {<AllAvilableLocationsTable/>} */}
      </div>

      <footer>Report location</footer>
    </div>
  );
}

export default AdminPanel;
