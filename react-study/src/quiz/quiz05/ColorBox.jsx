
//      <ColorBox bgColor={'red'}; ?
//function ColorBox( props ){}
function ColorBox(){

    return (
        <div className="box" style={{ backgroundColor: 'item' }}></div>
        //<div className="box" style={{ backgroundColor:props.bgColor }}></div>
    )
}

export default ColorBox;