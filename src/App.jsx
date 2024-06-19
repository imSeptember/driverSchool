import './App.css';
import Autopark from './components/Autopark/Autopark';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Packages from './components/Packages/Packages';

export default function App() {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Autopark></Autopark>
            <Packages></Packages>
        </>
    );
}
