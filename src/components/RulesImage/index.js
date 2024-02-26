import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  PopUpContainer,
  PopupButton,
  CloseButtonContainer,
  CloseButton,
  ImageElement,
} from './styledComponents'

const RulesImage = () => (
  <PopUpContainer>
    <Popup modal trigger={<PopupButton type='button'>Rules</PopupButton>}>
      {close => (
        <CloseButtonContainer>
          <CloseButton type='button' onClick={() => close()}>
            <RiCloseLine size={35} />
          </CloseButton>
          <ImageElement
            src='https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png'
            alt='rules'
          />
        </CloseButtonContainer>
      )}
    </Popup>
  </PopUpContainer>
)

export default RulesImage
