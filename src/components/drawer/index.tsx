import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import * as css from './styles'
import UploadForm from './upload'

export default () => {
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button onClick={handleDrawerToggle}>Upload</Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
      >
        <css.drawerContents>
          <UploadForm />
        </css.drawerContents>
      </Drawer>
    </div>
  )
}
