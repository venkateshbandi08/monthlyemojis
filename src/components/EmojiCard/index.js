import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onChangeActiveEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickedOnEmoji = () => {
    // Call onChangeActiveEmoji with the emojiUrl as argument
    onChangeActiveEmoji(emojiUrl, emojiName)
  }

  return (
    <li className="each-emoji">
      {/* Invoke onClickedOnEmoji when the button is clicked */}
      <button className="emoji-style" onClick={onClickedOnEmoji}>
        <p className="emoji-name"> {emojiName} </p>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
