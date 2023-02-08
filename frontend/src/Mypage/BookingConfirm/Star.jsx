import { FaStar } from "react-icons/fa";
function Star({ filled, onClick }) {
    return (
        <FaStar
            size={'30px'}
            color={filled ? "orange" : "lightgray"}
            onClick={onClick} />
    );
}
export default Star;