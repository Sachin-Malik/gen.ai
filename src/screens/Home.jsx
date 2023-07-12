import Catalog from '../components/Catalog/Catalog';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Navbar from '../components/Navbar/Navbar';

function Home({ toast, showToast }) {
    console.log(toast);
    return (
        <div className="App">
            <div style={{ backgroundColor: '', paddingBottom: '40px' }}>
                <div style={{ height: '50px' }}>
                </div>
                <Navbar />
                <div style={{ backgroundColor: 'rebeccapurple', padding: '3% 5%' }}>
                    <HeroBanner />
                </div>
            </div>
            <Catalog showToast={showToast} />
            {toast !== '' &&
                <div className='toast-message'>
                    <div>{toast}</div>
                </div>
            }
        </div>
    )
}

export default Home;