const Header = (props) => {
    const information = props.data
    return (
        <div className='header-container bubble mt-5 pt-1 d-flex justify-content-between'>
            <h1 className='header-info'>Hello {information.firstName} {information.lastName} </h1>
            <div>
                <h4 className='header-info'>Current weight: {information.weight}lb</h4>
                <h4 className='header-info'>Current height: {information.height}</h4>
            </div>
        </div>
    )
}
 
export default Header;