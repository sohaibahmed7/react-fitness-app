const Header = (props) => {
    // This component took in the user's information as props
    const information = props.data
    return (
        // Simply returns all of the information from UserInfo in "data.js"
        <div className='header-container bubble mt-5 py-1'>
            <h1 className='header-info display-5'>Hello {information.firstName} {information.lastName} </h1>
            <div className="d-block d-md-flex">
                <h4 className='header-info me-4'>Current weight: {information.weight}lb</h4>
                <h4 className='header-info'>Current height: {information.height}</h4>
            </div>
        </div>
    )
}
 
export default Header;