import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import IndexView from '../IndexView/IndexView';
import Container from '@mui/material/Container';
import { Route, Redirect } from 'react-router-dom'
import UploadView from '../UploadView/UploadView'



function App() {
  return (
    <>
    <NavBar/>
    <Container>
				<Route 
					exact path='/'
					render={({})=> 
						<IndexView/>
					}
				/>
				<Route 
					exact path='/upload'
          render={({history})=>
            <UploadView/>

          }
				/>
				<Route 
					exact path='/topRated'/>
	
    </Container>
    </>
  );
}

export default App;
