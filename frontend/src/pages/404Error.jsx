import NavBar from "../components/NavBar";

const PageError = () => {
    return ( 
    <>
    <NavBar/>
    <div className="place-items-center desktop:my-96 my-24">
        <h1 className="desktop:text-9xl text-9xl font-bold">404 Error page not found...</h1>
    </div>
    </> );
}
 
export default PageError;