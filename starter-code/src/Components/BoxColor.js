import React from 'react';

class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props
    const backgroundColorRGB = `rgb(${r}, ${g}, ${b})`
    const backgroundColorHex = "#" + getHexa(r) + getHexa(g) + getHexa(b)

    function getHexa(val) {
      const hexa = parseInt(val).toString(16) // to.String(16) returns a string representing a hexadecimal number
      return hexa.length === 1 ? "0" + hexa : hexa;
    }

    return (
      <div className="BoxColor" style={{ backgroundColor: backgroundColorRGB }}>
        <div>{backgroundColorRGB}</div>
        <div>{backgroundColorHex}</div>
      </div>
    )
  }
}

export default BoxColor;