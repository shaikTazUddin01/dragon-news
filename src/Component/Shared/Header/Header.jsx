import logo from '../../../assets/images/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10 mb-6'>
           <img src={logo} alt=""  className='mx-auto'/>
           <p className='text-[18px] font-normal my-3' >Journalism Without Fear or Favour</p>
           <p className='text-xl font-medium'>{moment().format('dddd,MMMM D ,YYYY')}</p>
        </div>
    );
};

export default Header;