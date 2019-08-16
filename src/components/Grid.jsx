import React, { Component } from 'react';
import Box from './Box.jsx'
import '../index.css'


class Grid extends Component {
    render() {
        const width = this.props.columns * 16
        let rowsArr = []
        let boxClass = ''
        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.columns; j++) {
                let boxId = i + "_" + j;
                boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
                rowsArr.push(
                    <Box boxClass={boxClass}
                        key={boxId}
                        boxId={boxId}
                        row={i}
                        columns={j}
                        selectBox={this.props.selectBox}
                    />)
            }
        }
        return (
            <div className="grid" style={{ width: width }}>
                {rowsArr}
            </div>
        );
    }
}

export default Grid;