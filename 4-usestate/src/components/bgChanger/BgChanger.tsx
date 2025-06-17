import "./bgchanger.css"
import { useState } from "react"
import Button from "../btn/Button";

const BgChanger = () => {
    const [bg, setBg] = useState<string>("");

    const changeBackground = (color: string) => {
        if (color === "Reset") {
            setBg("");
        } else {
            setBg(color);
        }
    }
    console.log(`Background color changed to: ${bg}`);


    return (
        <div className="app" style={{ backgroundColor: bg ? bg : "white" }}>
            <h2>Background Color Changer</h2>
            <div className="button-container">
                <Button color="red" changeBGFunc={changeBackground} />
                <Button color="green" changeBGFunc={changeBackground} />
                <Button color="blue" changeBGFunc={changeBackground} />
                <Button color="Reset" changeBGFunc={() => setBg("white")} />
            </div>
        </div>
    )
}

export default BgChanger