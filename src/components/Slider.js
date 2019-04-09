import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const slider = {
    "marginBottom":"40px"
}

const sliderLabel = {
    "color":"#555",
    "fontSize":"1rem",
    "marginBottom":"20px",
    "display":"block",
}

const sliderRange = {
    "background":"#e27a3f",
    "border":"none"
}

const sliderRangeTrack = {
    "background":"#ddd"
}

const sliderRangeTrackActive = {
    "background":"#e27a3f"
}

const sliderLabelContainer = {
    "background":"#e27a3f",
    "color":"white",
    "fontSize":"0.65rem",
    "padding":"2px 5px",
    "borderRadius":"2px"
}

const minMaxLabelContainer = {
    "fontSize":"0.65rem",
    "color":"#888",
    "left":"0"
}

const maxLabelContainer = {
    "left":"25%"
}

export default class Slider extends Component {
    onChange = range => {
        this.props.onChange({
            type: this.props.data.label,
            value: range
        });
    }

    render() {
        const { min, max, step, value, label } = this.props.data;
        return (
            <div style={slider}>
                <label style={sliderLabel}>{label}</label>
                <InputRange 
                style={sliderRange} 
                    minValue={min}
                    maxValue={max}
                    step={step}
                    onChange={this.onChange}
                    value={value}
                />
            </div>
        )
    }
}