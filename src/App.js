import {Component} from 'react'

import RulesImage from './components/RulesImage'
import GameView from './components/GameView'

import {
  ResponsiveContainer,
  ScoreHeadingContainer,
  Heading,
  HeadingContainer,
  ScoreContainer,
  ScorePara,
  ScoreValue,
  UnorderedListContainer,
  GameContainer,
  GameImage,
  SeparateContainerGameContainer,
  PersonHeading,
  PlayAgainButton,
  Container,
  GameResultShow,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testid: 'paperButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testid: 'scissorsButton',
  },
]

class App extends Component {
  state = {
    count: 0,
    gameview: true,
    yourImageUrl: '',
    randomImageUrl: '',

    matchFinalResult: '',
  }

  renderGameRockPaperScissor = () => (
    <UnorderedListContainer>
      {choicesList.map(eachChoiceItem => (
        <GameView
          eachChoiceItem={eachChoiceItem}
          key={eachChoiceItem.id}
          renderGame={this.renderGame}
        />
      ))}
    </UnorderedListContainer>
  )

  onClickToReturnGame = () => {
    this.setState({gameview: true})
  }

  renderResultBasedOnCondition = (yourId, randomId) => {
    if (yourId === randomId) {
      this.setState(prevState => ({
        matchFinalResult: 'IT IS DRAW',
        count: prevState.count,
      }))
      console.log('draw')
    } else if (yourId === 'PAPER' && randomId === 'ROCK') {
      this.setState(prevState => ({
        matchFinalResult: 'YOU WON',
        count: prevState.count + 1,
      }))
      console.log('1st win')
    } else if (yourId === 'SCISSORS' && randomId === 'PAPER') {
      this.setState(prevState => ({
        matchFinalResult: 'YOU WON',
        count: prevState.count + 1,
      }))
      console.log('2nd win')
    } else if (yourId === 'ROCK' && randomId === 'SCISSORS') {
      this.setState(prevState => ({
        matchFinalResult: 'YOU WON',
        count: prevState.count + 1,
      }))
      console.log('3rd win')
    } else if (yourId === 'SCISSORS' && randomId === 'ROCK') {
      this.setState(prevState => ({
        matchFinalResult: 'YOU LOSE',
        count: prevState.count - 1,
      }))
      console.log('1st lose')
    } else if (yourId === 'ROCK' && randomId === 'PAPER') {
      this.setState(prevState => ({
        matchFinalResult: 'YOU LOSE',
        count: prevState.count - 1,
      }))
      console.log('2st lose')
    } else if (yourId === 'PAPER' && randomId === 'SCISSORS') {
      this.setState(prevState => ({
        matchFinalResult: 'YOU LOSE',
        count: prevState.count - 1,
      }))
      console.log('3st lose')
    }
  }

  renderGameResult = () => {
    const {yourImageUrl, randomImageUrl, matchFinalResult} = this.state

    return (
      <GameContainer>
        <Container>
          <SeparateContainerGameContainer>
            <PersonHeading>YOU</PersonHeading>
            <GameImage src={yourImageUrl} alt='your choice' />
          </SeparateContainerGameContainer>

          <SeparateContainerGameContainer>
            <PersonHeading>OPPONENT</PersonHeading>
            <GameImage src={randomImageUrl} alt='opponent choice' />
          </SeparateContainerGameContainer>
        </Container>
        <GameResultShow>{matchFinalResult} </GameResultShow>

        <PlayAgainButton type='button' onClick={this.onClickToReturnGame}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameContainer>
    )
  }

  renderGame = (id, imageUrl) => {
    const randomInage =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    this.setState({
      gameview: false,
      yourImageUrl: imageUrl,
      randomImageUrl: randomInage.imageUrl,
    })
    this.renderResultBasedOnCondition(id, randomInage.id)
  }

  render() {
    const {count, gameview} = this.state
    return (
      <ResponsiveContainer>
        <ScoreHeadingContainer>
          <HeadingContainer>
            <Heading>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Heading>
          </HeadingContainer>
          <ScoreContainer>
            <ScorePara>Score</ScorePara>
            <ScoreValue>{count}</ScoreValue>
          </ScoreContainer>
        </ScoreHeadingContainer>
        {gameview ? this.renderGameRockPaperScissor() : this.renderGameResult()}
        <RulesImage />
      </ResponsiveContainer>
    )
  }
}

export default App
