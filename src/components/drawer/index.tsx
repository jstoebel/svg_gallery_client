import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import * as css from './styles'
import UploadForm from './upload'

export default () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => setOpen(open)

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Upload a photo</Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <css.drawerContents>
          <UploadForm closeDrawer={toggleDrawer(false)} />
        </css.drawerContents>
      </Drawer>
    </div>
  )
}
