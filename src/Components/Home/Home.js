import React from 'react';

const Home = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/city.jpg'})`,
            backgroundRepeat: 'no-repeat',
            width:'100%',
            minHeight: '100vh',
            backgroundSize: 'cover',

          }}>
         <div>
            <p>This is home</p>
         </div>


            
        </div>
    );
};

export default Home;