

function ColorBox({ bgColor, index, boxes, setBoxes }) {
    return (
        <div className='box' style={{ backgroundColor: bgColor }}>
            <button onClick={() => {
                let XX = [...boxes];
                XX.splice(index, 1);
                setBoxes(XX);
            }}>X</button>
        </div>
    );
}

export default ColorBox;