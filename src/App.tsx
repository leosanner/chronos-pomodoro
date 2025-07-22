import { Home } from './pages/Home';
import { useState } from 'react';

import './styles/theme.css';
import './styles/global.css';
import type { TaskStateModel } from './models/TaskStateModel';

const initalState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemainig: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  }
}

export function App() {
  const [state, setState] = useState(initalState);

  return <Home state={state} setState={setState}/>;
}
