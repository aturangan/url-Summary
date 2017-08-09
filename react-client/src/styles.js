const styles = {
  main: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-100px',
    marginLeft: '-120px'
  },

  ratingBlock: {
    height: '30px',
    verticalAlign: 'middle',
    margin: '0 0 10px 0',
  },
  reviewBlock: {
    verticalAlign: 'middle',
    margin: '0 0 10px 0',
  },
  imgResize: {
    float: 'left',
    margin: '0 2% 0 0',
    maxWidth: '30%',
    maxHeight: '30%',
  },
  CardHeader: {
    fontSize: '200%',
  },
  logo: {
    float: 'right',
    maxWidth: '9%',
    maxHeight: '9%',
  },
  cardStyle: {
    display: 'table',
    maxWidth: '33%',
    margin: '-1% 2% 0 0',
    float: 'right',
    borderRadius: '12px'
  },
  mainColor: '#FFA726',
  centeredImage: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-150px',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  gridList: {
    width: '500px',
    height: '450px',
    overflowY: 'auto',
    float: 'left',
    marginRight: '20px',
  },
  List: {
    display: 'table',
    margin: '0 auto 0 20px',
    marginTop: '20px',
    float: 'left',
  },
  searchButton: {
    display: 'table',
    width: '50px',
    position: 'absolute',
    top: '0',
    bottom: '0', 
    left: '0',
    right: '0',
    margin: 'auto',
    // float: 'left',
    // clear: 'left',
  },
  helpCommands: {
    borderStyle: 'solid',
    borderColor: '#FFA726',
    position: 'fixed',
    top: '20%',
    left: '50%',
    padding: '0 20px',
    marginTop: '-50px',
    marginLeft: '-150px',
  },
  gmap: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '-1',
  },
  marker: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    left: '-20px',
    top: '-20px',
  },
};

export default styles;