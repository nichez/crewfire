import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    marginTop: 60,
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchInput: {
    margin: '0 20px 30px 0',
  },
}));

export default useStyles;
