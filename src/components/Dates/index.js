import React from 'react'
import './index.css'

const Dates = props => {
  const {initialDatesList, num, onAddEmojiOnDate} = props

  const onClickedDate = id => {
    onAddEmojiOnDate(id)
  }

  return (
    <li>
      {initialDatesList.map(dayDetails => {
        if (parseInt(dayDetails.date) % 7 === num) {
          return (
            <li key={dayDetails.id}>
              <button
                key={dayDetails.id}
                onClick={() => onClickedDate(dayDetails.id)}
              >
                {dayDetails.date}
                <img
                  src={dayDetails.emojiUrl}
                  alt={dayDetails.emojiName}
                  className="date-emoji"
                />
              </button>
            </li>
          )
        }
        return null
      })}
    </li>
  )
}

export default Dates
