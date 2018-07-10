import { app } from 'hyperapp'

import view from './view'
import { state, actions, State, Actions } from './modules/count'

app<State, Actions>(
  state,
  actions,
  view,
  document.getElementById('app')
)
