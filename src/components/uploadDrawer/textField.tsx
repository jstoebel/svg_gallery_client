import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import { withFormsy } from 'formsy-react';

interface Props {
  setValue: (val: string | undefined) => void;
  getErrorMessage: () => string;
  getValue: () => string;
  showRequired: () => boolean;
  showError: () => boolean;
  label: string;
}

class Field extends React.Component<Props, {}> {
  
  constructor(p: Props, s: {}) {
    super(p, s)
    this.changeValue = this.changeValue.bind(this);
    this.render = this.render.bind(this);
  }

  changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.setValue(e.currentTarget.value)
  }

  render() {
    // An error message is returned only if the component is invalid
    const {getErrorMessage, getValue} = this.props;
    const errorMessage = getErrorMessage()
    
    return (
      <div>
        <TextField
          label={this.props.label}
          onChange={this.changeValue}
          type="text"
          value={getValue() || ''}
          error={Boolean(errorMessage)}
        />
        <span>{errorMessage}</span>
      </div>
    )
  }
}

export default withFormsy<string, Props>(Field);