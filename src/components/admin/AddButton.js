import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddButton() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="default" color="black" onClick={handleClickOpen}>
        <h6 style={{color:'white'}}><i className="fa fa-plus"></i>{' '}New User</h6>
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle style={{backgroundColor:'#E1E1E1'}}>New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <DialogActions>
          <Button style={{backgroundColor:'black', borderRadius:'20px'}} variant="default" color="black" onClick={handleClose}>
            <h6 style={{color:'white'}}>Add</h6>
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}