
import './button.css'

type ButtonProps = {
    color: string;
    changeBGFunc?: (color: string) => void;
}

const Button = ({ color, changeBGFunc }: ButtonProps) => {
    return (
        <button
            className="button"
            onClick={() => changeBGFunc?.(color)} //means optional chaining
        >
            {color}
        </button>
    )
}

export default Button