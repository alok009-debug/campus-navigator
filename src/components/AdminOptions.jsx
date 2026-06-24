import { useState } from "react";
import Styles from './components-css/AdminOptionUi.module.css'
import StyleCard from './components-css/MainArea.module.css'
const AdminOptions = () => {


    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);
    const [more, setMore] = useState(false);

    return (
        <div className={Styles.section}>
            <div className={Styles.card}>
                <button > Add</button>
                <button > Edit</button>
                <button > remove</button>
                <button > more</button>
            </div>
        </div>
    )
}

export default (AdminOptions)