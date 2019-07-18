import { Input, Button, Paragraph } from "./app-components/index";
import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <Input />
            <Paragraph width="100px" height="50px" style={{backgroundColor: "lightgreen"}}/>
            <Button />
        </React.Fragment>;
    }
}

const appContainer = document.getElementById("app");
ReactDOM.render(appContainer, <Form />);