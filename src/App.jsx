import './App.css';
import Autopark from './components/Autopark/Autopark';
import Contacts from './components/Contacts/Contacts';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Instructors from './components/Instructors/Instructors';
import Main from './components/Main/Main';
import Packages from './components/Packages/Packages';
import PriceList from './components/PriceList/PriceList';
import ModalPhone from './components/Modal__phone/Modal__phone';
import { PopupProvider } from './components/PopupContext/PopupContext';

export default function App() {
    return (
        <>
            <PopupProvider>
                <ModalPhone></ModalPhone>
                <Header></Header>
                <Main></Main>
                <Autopark></Autopark>
                <Packages></Packages>
                <PriceList></PriceList>
                <Courses></Courses>
                <Instructors></Instructors>
                <Contacts></Contacts>
            </PopupProvider>
        </>
    );
}
