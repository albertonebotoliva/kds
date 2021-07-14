import React from 'react';
import { Button, Dialog as DialogBox, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Dialog as TDialog } from 'app/models';

interface IProps {
    dialog: TDialog,
    setDialog: (dialog: TDialog) => void
}

export const Dialog = ({ dialog, setDialog }: IProps): JSX.Element => {
    if (!dialog.result) return <div />

    const handleClose = () => setDialog({ open: false, result: null });
    const keys = Object.keys(dialog.result);
    const values = Object.values(dialog.result);

    return (
        <DialogBox open={dialog.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{dialog?.result?.title || dialog?.result?.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <ul>
                        {
                            Object
                                .values(dialog.result)
                                .map(
                                    (value: any, i: number) => (
                                        <li>{keys[i]}: {value}</li>
                                    )
                                )
                        }
                    </ul>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="text" color="primary">
                    Close
                </Button>
            </DialogActions>
        </DialogBox>
    )
}

