import React from 'react'
import { BsKanban } from 'react-icons/bs'
import { Heading } from './Heading'

export type PropsType = {
  name: string
  onRemove: () => void
}

export function BoardCard({ name, onRemove }: PropsType) {
  return (
    <div className="browse-board-item flex items-center">
      <BsKanban className="board-icon" color="var(--purple)" />
      <div className="spacing-small flex-1">
        <Heading as="h2" size={2}>
          {name}
        </Heading>
      </div>
      <button className="button button-outline" onClick={(e) => onRemove()}>
        Remove
      </button>
    </div>
  )
}
