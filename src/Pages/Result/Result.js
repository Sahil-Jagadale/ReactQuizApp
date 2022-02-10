import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Result.css";
import Header from "../../Header/Header";

const Result = ({ name, score }) => {
    const history = useHistory();

    useEffect((history) => {
        if (!name) {
            history.push("/");
        }
    }, [name, history.push]);

    return (
        <>
            <Header />
            <div className="result">
            <span className="title">Final Score : {score}</span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20}}
                href="/"
                >
                    Go To Homepage
                </Button>
            </div>
        </>
    );
};

export default Result;