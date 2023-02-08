import React from "react";
import "./TextArea.scss";

class Textarea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isError: false,
            value: "",
            threshold: props.threshold || 60,
            remainingChars: props.threshold || 60,
            type: props.type || "min"
        };
    }

    handleInput = (event) => {
        const value = event.target.value;
        const characterCount = value.length;
        let remainingChars =
            parseInt(this.state.threshold, 10) - parseInt(characterCount, 10);
        let isError = false;

        if (remainingChars < 0) {
            remainingChars = 0;
            isError = true;
        }

        this.setState({value, remainingChars, isError});
    };

    render() {
        const errorClass = this.state.isError ? "textarea-error" : "";
        return (
            <div className={"textarea " + this.props.className}>
                <label className={"form-label"}>후기내용</label>
                <textarea
                    cols="30"
                    rows="5"
                    wrap="hard"
                    placeholder={this.props.placeholder}
                    onChange={this.handleInput}
                    value={this.state.value}
                    placeholder="200자 이내로 후기를 입력해 주세요."
                    className={"form-control bg-light"}
                />
                <div
                    className={"threshold-text float-end " + errorClass}
                >{`글자수 : ${this.state.remainingChars} / 200`}</div>

            </div>
        );
    }
}

export default Textarea;
