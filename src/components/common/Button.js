import { Button } from '@mui/material'
import PropTypes from 'prop-types'

const CommonButton = ({props}) => {

  return (
      <Button 
        variant={props.variant} 
        onClick={props.handleClick}
        color={props.color}
        size={props.size}
      >
        {props.text}
      </Button>
  )

}

CommonButton.propTypes = {
  variant: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
}

export default CommonButton