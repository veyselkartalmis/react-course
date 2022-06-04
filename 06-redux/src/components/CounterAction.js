import { increment, decrement, incrementByAmount } from "../stores/counter";
import { useDispatch } from "react-redux";

function CounterAction() {
    const dispathc = useDispatch();

    return (
        <div>
            <button onClick={() => dispathc(increment())}>Arttır</button>
            <button onClick={() => dispathc(decrement())}>Azalt</button>
            <button onClick={() => dispathc(incrementByAmount(5))}>5 Arttır</button>
        </div>
    )
}

export default CounterAction