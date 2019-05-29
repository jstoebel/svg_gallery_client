import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import * as css from './styles'

interface Props {
  isOpen: boolean
  toggleDrawer: (arg0: boolean) => void
  children: React.ReactNode
}

const DrawerWrapper = ({children, isOpen, toggleDrawer}: Props) => {

  return (
    <div>
      <Button variant='contained' color='primary' onClick={(e: React.MouseEvent<HTMLElement>) => {toggleDrawer(true)}}>Upload a photo</Button>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={(e: React.SyntheticEvent) => toggleDrawer(false)}
      >
        <css.drawerContents>
          {children}
        </css.drawerContents>
      </Drawer>
    </div>
  )
}

export default DrawerWrapper;
