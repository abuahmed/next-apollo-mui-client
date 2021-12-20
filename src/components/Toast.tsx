import React from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/core/Alert';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

type Severity = 'error' | 'success' | 'info' | 'warning' | undefined;

interface Props {
  setToDefault: () => void;
  severity: Severity;
  children: string;
}
export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Toast({ setToDefault, severity, children }: Props) {
  //const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [state, setState] = React.useState<State>({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    //setOpen(false);
    setState({ ...state, open: false });
    setToDefault();
  };

  return (
    <Box
      sx={{
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        resumeHideDuration={0}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {children}
        </Alert>
      </Snackbar>
    </Box>
  );
}
