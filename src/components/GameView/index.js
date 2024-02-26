import {
  ListElement,
  GameButton,
  ButtonImageElemt,
  ListItemsContainer,
} from './styledComponents'

const GameView = props => {
  const {eachChoiceItem, renderGame} = props
  const {imageUrl, id, testid} = eachChoiceItem

  const onClickGameStart = () => {
    renderGame(id, imageUrl)
  }

  return (
    <ListItemsContainer>
      <ListElement>
        <GameButton data-testid={testid} onClick={onClickGameStart}>
          <ButtonImageElemt src={imageUrl} alt={id} />
        </GameButton>
      </ListElement>
    </ListItemsContainer>
  )
}

export default GameView
