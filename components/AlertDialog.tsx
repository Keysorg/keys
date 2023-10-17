import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Transition = React.forwardRef(function Transition(
    props: & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = ({ open, handleClose, transactionId }: { open: boolean, handleClose: any, transactionId: any }) => {

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ textAlign: 'center' }}>Status</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description"
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        <CheckCircleIcon sx={{ color: 'green', fontSize: '60px' }} />
                        <Typography>Congratulations!</Typography>
                        <Typography sx={{ fontSize: 30 }}>Thank You For Your Purchase!</Typography>
                        <Typography>ID: {transactionId}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='btn-container'>
                    <button onClick={() => handleClose(null)} className='btn alert-fill'>Continue Shopping</button>
                    <button onClick={() => handleClose(transactionId)} className='btn alert-outline'>View Transaction</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;
