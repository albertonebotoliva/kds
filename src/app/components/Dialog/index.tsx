import React from 'react';
import { List, ListItem, ListItemText, Button, Dialog as DialogBox, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Dialog as TDialog } from 'app/models';
import { omit } from 'app/utils';

interface IProps {
    dialog: TDialog,
    setDialog: (dialog: TDialog) => void
}

export const Dialog = ({ dialog, setDialog }: IProps): JSX.Element => {
    if (!dialog.result) return <div />

    const handleClose = () => setDialog({ open: false, result: null });
    const escapedResult = omit(dialog.result, "people", "pilots", "residents", "films", "homeworld", "species", "characters", "vehicles", "starships", "url", "planets", "created", "edited");
    const keys = Object.keys(escapedResult);
    const values = Object.values(escapedResult);

    return (
        <DialogBox open={dialog.open} fullWidth maxWidth={"sm"} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{dialog?.result?.title || dialog?.result?.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <List>
                        {
                            values.map(
                                (value: any, i: number) => (
                                    <ListItem>
                                        <ListItemText primary={<b>{keys[i]}</b>} secondary={value} />
                                    </ListItem>
                                )
                            )
                        }
                    </List>
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

