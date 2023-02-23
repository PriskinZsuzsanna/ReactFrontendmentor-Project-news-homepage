import './Side.css'
import Box from './Box'

const Side = ({ sideText }) => {
    return (
        <div className="side">
            <h2>New</h2>
            {sideText.map((box) => (
                <Box
                    boxTitle={box.title}
                    boxText={box.text}
                    key={box.title}
                />
            ))}
        </div>
    )
}

export default Side