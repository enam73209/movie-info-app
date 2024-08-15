import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import classes from './app.module.css';
function App() {

  return (
    <div className={classes.app}>
      <LandingPage/>
    </div>
  )
}

export default App
