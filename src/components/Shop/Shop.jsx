import './Shop.css'

const Shop = ({ user }) => {
    return (
        <div>
            <div>
                <img src='protocol_images/Screenshots/compile_logo_owned.png' className="headingProtocolDB_shop" alt="Protocol Logo" />
            </div>
            <h1>Buy it now!</h1>
            <a href='https://www.greaterthangames.com/products/compile-main-1?_pos=9&_sid=1b8067ade&_ss=r' target='_blank' className='shopLink'>Click here for: Greater Than Game's Shop</a>
            <p>Buy Compile and check out many other great games by Greater Than Game's!</p>
        </div>
    );
};

export default Shop;