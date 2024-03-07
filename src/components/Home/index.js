// Home.js
import {Component} from 'react'
import Dates from '../Dates'
import EmojiCard from '../EmojiCard'
import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeEmojiName: 'Very Happy',
      activeEmoji:
        'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
      activeEmojiNameSelected: 'Very Happy',
      activeDaySelected: 'Sun',
      initialDatesList: props.initialDatesList,
    }
  }

  onAddEmojiOnDate = id => {
    const {activeEmoji, initialDatesList, activeEmojiName} = this.state
    const updatedDatesList = initialDatesList.map(eachDay => {
      if (eachDay.id === id) {
        return {
          ...eachDay,
          emojiName: eachDay.emojiName === '' ? activeEmojiName : '',
          emojiUrl: eachDay.emojiUrl === '' ? activeEmoji : '',
        }
      }
      return eachDay
    })

    this.setState({initialDatesList: updatedDatesList})
  }

  onChangeEmojiName = event => {
    this.setState({
      activeEmojiNameSelected: event.target.value,
    })
  }

  onChangeDay = event => {
    this.setState({
      activeDaySelected: event.target.value,
    })
  }

  onChangeActiveEmoji = (currEmojiUrl, currEmojiName) => {
    this.setState({
      activeEmoji: currEmojiUrl,
      activeEmojiName: currEmojiName,
    })
  }

  displayCount = () => {
    const {
      activeDaySelected,
      initialDatesList,
      activeEmojiNameSelected,
    } = this.state

    let num = 0

    switch (activeDaySelected) {
      case 'Sun':
        num = 1
        break
      case 'Mon':
        num = 2
        break
      case 'Tue':
        num = 3
        break
      case 'Wed':
        num = 4
        break
      case 'Thu':
        num = 5
        break
      case 'Fri':
        num = 6
        break
      case 'Sat':
        num = 0
        break
      default:
        break
    }

    let count = 0

    initialDatesList.forEach(eachDay => {
      const date = parseInt(eachDay.date)
      if (date % 7 === num && eachDay.emojiName === activeEmojiNameSelected) {
        count += 1
      }
    })

    return count
  }

  render() {
    const {
      initialDatesList,
      activeDaySelected,
      activeEmojiSelected,
      activeEmoji,
    } = this.state
    const {emojisList, daysList} = this.props
    console.log(activeEmoji)

    console.log(this.state)

    return (
      <div className="home-bg-container">
        <h1> Monthly Emojis </h1>
        <div className="content-container">
          <div className="calender-container">
            <h1 className="january-heading"> January </h1>
            <ul className="calender">
              <li className="dates-container">
                <li>
                  <p key={daysList[0].id}> Sun </p>
                </li>
                <Dates
                  initialDatesList={initialDatesList}
                  onAddEmojiOnDate={this.onAddEmojiOnDate}
                  num={1}
                  key="Sun"
                />
              </li>
              <li className="dates-container">
                <li>
                  <p key={daysList[1].id}> Mon </p>
                </li>
                <Dates
                  initialDatesList={initialDatesList}
                  onAddEmojiOnDate={this.onAddEmojiOnDate}
                  num={2}
                  key="Mon"
                />
              </li>
              <li className="dates-container">
                <li>
                  <p key={daysList[2].id}> Tue </p>
                </li>
                <Dates
                  initialDatesList={initialDatesList}
                  onAddEmojiOnDate={this.onAddEmojiOnDate}
                  num={3}
                  key="Tue"
                />
              </li>
              <li className="dates-container">
                <li>
                  <p key={daysList[3].id}> Wed </p>
                </li>
                <Dates
                  initialDatesList={initialDatesList}
                  onAddEmojiOnDate={this.onAddEmojiOnDate}
                  num={4}
                  key="Wed"
                />
              </li>
              <li className="dates-container">
                <li>
                  <p key={daysList[4].id}> Thu </p>
                </li>
                <Dates
                  initialDatesList={initialDatesList}
                  onAddEmojiOnDate={this.onAddEmojiOnDate}
                  num={5}
                  key="Thu"
                />
              </li>
              <li className="dates-container">
                <li>
                  <p key={daysList[5].id}> Fri </p>
                </li>
                <Dates
                  initialDatesList={initialDatesList}
                  onAddEmojiOnDate={this.onAddEmojiOnDate}
                  key="Fri"
                />
              </li>
              <li className="dates-container">
                <li>
                  <p key={daysList[6].id}> Sat </p>
                </li>
                <Dates
                  initialDatesList={initialDatesList}
                  onAddEmojiOnDate={this.onAddEmojiOnDate}
                  key="Sat"
                />
              </li>
            </ul>
          </div>
          <div className="right-side-container">
            <ul className="emojis-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onChangeActiveEmoji={this.onChangeActiveEmoji}
                />
              ))}
            </ul>
            <ul className="emojis-count-container">
              <li className="selection-container">
                <select
                  className="emojis-selection-container"
                  onChange={this.onChangeEmojiName}
                >
                  <option value="Very Happy" key="Very Happy">
                    {' '}
                    Very Happy{' '}
                  </option>
                  <option value="Happy" key="Happy">
                    {' '}
                    Happy{' '}
                  </option>
                  <option value="Neutral" key="Neutral">
                    {' '}
                    Neutral{' '}
                  </option>
                  <option value="Sad" key="Sad">
                    {' '}
                    Sad{' '}
                  </option>
                  <option value="Very Sad" key="Very Sad">
                    {' '}
                    Very Sad{' '}
                  </option>
                </select>
                <select
                  className="days-selection-container"
                  onChange={this.onChangeDay}
                >
                  <option value="Sun" key="Sun">
                    Sun{' '}
                  </option>
                  <option value="Mon" key="Mon">
                    {' '}
                    Mon{' '}
                  </option>
                  <option value="Tue" key="Tue">
                    {' '}
                    Tue{' '}
                  </option>
                  <option value="Wed" key="Wed">
                    {' '}
                    Wed{' '}
                  </option>
                  <option value="Thu" key="Thu">
                    {' '}
                    Thu{' '}
                  </option>
                  <option value="Fri" key="Fri">
                    {' '}
                    Fri{' '}
                  </option>
                  <option value="Sat" key="Sat">
                    {' '}
                    Sat{' '}
                  </option>
                </select>
              </li>
              <h1 className="res-count"> {this.displayCount()} </h1>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
