import React, {useContext} from "react";
import QueueContainer from "../queue/QueueContainer";
import { AppContext } from "../app/App";
import { Link } from 'react-router-dom';

function CenterDetail() {
  const {state} = useContext(AppContext);
  console.log(state)
  return (
    <div>
      <h1>{state.selectedCenter.name}</h1>
      <QueueContainer/>
      <Link to={'/voting-centers/0/confirmation'}>
        <button>Click</button>
      </Link>
    </div>
  )
}

export default CenterDetail;
