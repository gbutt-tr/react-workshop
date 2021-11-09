import { useReducer } from 'react'

export type Board = {
  id: number
  name: string
}

type AddAction = {
  type: 'ADD'
  boardName: string
}
type RemoveAction = {
  type: 'REMOVE'
  id: number
}

export function useBoardsReducer(boards: Array<Board>) {
  return useReducer(boardsReducer, boards)
}

function boardsReducer(boards: Array<Board>, action: AddAction | RemoveAction) {
  switch (action.type) {
    case 'REMOVE':
      const boardId = action.id
      return boards.filter((board) => boardId !== board.id)

    case 'ADD':
      const nextId = getNextId(boards)
      return [...boards, { id: nextId, name: action.boardName }]

    default:
      return boards
  }
}

function getNextId(boards: Array<Board>) {
  const lastId = boards.reduce((maxId, nextBoard) => Math.max(maxId, nextBoard.id), 0)
  return lastId + 1
}
