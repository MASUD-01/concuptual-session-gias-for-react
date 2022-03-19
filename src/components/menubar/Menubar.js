import './Menubar.css'
const Menubar = ({ count }) => {
    // const {country}=props;
    // console.log(country)


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2 p-2'>logo</div>
                    <div className='col-md-10 menu-container d-flex justify-content-end'>
                        <li className='items me-4 p-2'>Contact</li>
                        <li className='items me-4 p-2'>Cart<sup>{count}</sup></li>
                        <li className='items me-4 p-2'>login</li>
                        <li className='items me-4 p-2'>Home</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Menubar;