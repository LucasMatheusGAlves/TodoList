import React from "react";
import { useParams } from "react-router-dom";
import "../TaskDetails/index.css"

import Button from "../Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dicta, at qui fugit officia quia quas numquam dignissimos veritatis ipsa nisi suscipit modi? Modi id explicabo sint rem quo architecto!</p>
            </div>
        </>
    )
}

export default TaskDetails