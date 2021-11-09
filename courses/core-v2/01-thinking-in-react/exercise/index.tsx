import React from 'react'
import ReactDOM from 'react-dom'
import { Heading } from './components/Heading'
import { AddBoard } from './components/AddBoard'
import { BoardCard } from './components/BoardCard'
import { Board, useBoardsReducer } from './hooks/boardsReducer'
import 'ProjectPlanner/styles/global-styles.scss'
import 'ProjectPlanner/Heading.scss'
import './styles.scss'

const INITIAL_BOARDS: Array<Board> = [
  { id: 1, name: 'Board One' },
  { id: 2, name: 'Board Two' },
  { id: 3, name: 'Board Three' },
]

function App() {
  const [boards, boardDispatch] = useBoardsReducer(INITIAL_BOARDS)

  return (
    <div className="spacing">
      <Heading>Browse Boards</Heading>
      <div className="spacing">
        {boards.map((board) => (
          <BoardCard key={board.id} name={board.name} onRemove={() => removeBoard(board.id)} />
        ))}
      </div>
      <Heading>Add New Board</Heading>
      <AddBoard onAdd={handleAddBoard} />
    </div>
  )

  function handleAddBoard(boardName: string) {
    if (boardName) {
      boardDispatch({ type: 'ADD', boardName })
    }
  }

  function removeBoard(id: number) {
    boardDispatch({ type: 'REMOVE', id })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
