import Header from "./App/Header";
import App from "./App/Product&Categories";
import ContextProvider from "./Context/ContextProvider";
import Styles from "./Style Madule/Style.module.css"

const Main = () => {
    return ( 
        <div className={Styles.Parent}>
            <ContextProvider>
                <Header/>
                <App/>
            </ContextProvider>
            
        </div>
    );
}
 
export default Main;