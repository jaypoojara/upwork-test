import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography
} from '@mui/material';
import React, {
  useEffect,
  useState
} from 'react';
import { useIntl } from 'react-intl';
import {
  useDispatch,
  useSelector
} from 'react-redux';

type Error = {
  username: boolean;
  password: boolean;
}

export default function DemoContainer() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<Error>({
    username: false,
    password: false
  });

  useEffect(() => {

  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget)
    const data = new FormData(event.currentTarget);
    setErrors({
      username: data.get('username') === '',
      password: data.get('password') === '',
    })
  };

  return (
    <div>
      <Container component="main" maxWidth="sm" sx={{
        height: '100vh',
        alignItems: 'center',
        display: 'flex',
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #979797',
            borderRadius: 10,
            boxShadow: 2,
            pl: 5,
            pr: 5,
            pt: 3,
            pb: 3
          }}
        >
          <Typography component="h1" variant="h5">
            {intl.formatMessage({ id: 'sign_in' })}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              onChange={() => setErrors({
                ...errors,
                username: false
              })}
              error={errors.username}
              label={intl.formatMessage({id: 'username'})}
              name="username"
              autoFocus
              helperText={errors.username ? intl.formatMessage({id: 'username_error'}) : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={() => setErrors({
                ...errors,
                password: false
              })}
              error={errors.password}
              label={intl.formatMessage({id: 'password'})}
              type="password"
              id="password"
              helperText={errors.password ? intl.formatMessage({id: 'password_error'}) : null}
            />
            <Button
              type="submit"
              size={'medium'}
              variant="contained"
              sx={{ mt: 3, mb: 2, width: '50%' }}
            >
              {intl.formatMessage({ id: 'sign_in' })}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
