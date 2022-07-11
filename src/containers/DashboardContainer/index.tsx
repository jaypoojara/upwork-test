import {
  Button,
  Container,
  Typography
} from '@mui/material';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import React from 'react';
import { useIntl } from 'react-intl';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { appContainerCreators } from '../../AppReducer';
import { selectUsername } from '../../AppSelector';
import Colors from '../../theme/colors';
import data from '../../utils/data.json';


const Styles = {
  container: {
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
}

export default function DashboardContainer() {
  const username = useSelector(selectUsername);
  const intl = useIntl();
  const chartData: ApexOptions = {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: data.map((data: any) => data.date)
      },
      colors: [Colors.purple],
      series: [
        {
          name: 'Data Series',
          data: data.map((data: any) => data.value)
        }
      ]
    };

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(appContainerCreators.requestLogout())
  }

  return (
    <Container component="main" sx={Styles.container}>
      <Typography component='h1' variant='h5'>
        {username}
      </Typography>
      <Chart
        options={chartData}
        series={chartData.series}
        type={'line'}
        width={800}
      />
      <Button
        data-testid={'logout-button'}
        type={'button'}
        size={'medium'}
        variant="contained"
        sx={{ mt: 3, mb: 2, width: '25%' }}
        onClick={handleSignOut}
      >
        {intl.formatMessage({ id: 'sign_out' })}
      </Button>
    </Container>
  );
}
