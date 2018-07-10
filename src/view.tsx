import { h, View } from 'hyperapp'

import { State, Actions } from './modules/count'

import Counter from './components/Counter'

const view: View<State, Actions> = (state, actions) => (
  <main>
    <Counter count={state.count} onChange={actions.change}/>
  </main>
)

export default view
