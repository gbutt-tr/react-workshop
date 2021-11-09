import React from 'react'

export type PropsType = {
  onAdd: (boardName: string) => void
}

export function AddBoard({ onAdd }: PropsType) {
  const [boardName, setBoardName] = React.useState('')

  return (
    <>
      <input
        name="boardName"
        className="form-field"
        type="text"
        placeholder="board name"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
      />
      <button
        className="button"
        type="button"
        onClick={(e) => {
          onAdd(boardName)
          setBoardName('')
        }}
      >
        Add
      </button>
    </>
  )
}
