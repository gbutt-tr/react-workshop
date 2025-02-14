import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './Tabs'
import './styles.scss'

function App() {
  return (
    <div className="spacing">
      <button className="button block">Start Focus Here</button>
      <Tabs>
        <TabList>
          <Tab>Events and Focus</Tab>
          <Tab>Login Form</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            Using your keyboard only, you should be able to move the focus in and out of the Tabs
            component and also change tabs in a way that the user would anticipate.
          </TabPanel>
          <TabPanel className="spacing">
            <form autoComplete="off">
              <input type="email" placeholder="Email" aria-label="Email" autoComplete="off" />
              <input
                type="password"
                placeholder="Password"
                aria-label="Password"
                autoComplete="off"
              />
              <button className="button">Submit</button>
            </form>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <hr />
      <button className="button block">End Focus Here</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
