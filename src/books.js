import React, { Component } from "react";
import bookStyle from "./books.css";

class Books extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className={bookStyle.BooksBox}>
                <h1>
                    <label>Book Id </label>:<i>{this.props.id}</i>
                    <br />  

                    <label className={bookStyle.label}>Book Name </label> :{" "}
                    <i>{this.props.name}</i>
                                
                
                </h1>
            </div>
        );
    }
}
export default Books;
