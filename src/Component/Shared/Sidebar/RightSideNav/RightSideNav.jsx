import React from 'react';
import { FaFacebook, FaFacebookF, FaGit, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from '../../../../assets/images/qZone1.png';
import Qzone2 from '../../../../assets/images/qZone2.png';
import Qzone3 from '../../../../assets/images/qZone3.png';

const RightSideNav = () => {
    return (
        <div className='p-4'>
            <div className=''>
                <h1 className='text-3xl font-bold mb-4'>Login With</h1>
                <div className='mx-auto my-3'>
                    <button className='btn flex items-center border rounded-lg w-full p-3 gap-3 justify-center'>
                        <FaGoogle></FaGoogle>
                        <span className='font-medium'>Login With Google</span>
                    </button>
                </div>
                <div className='mx-auto my-3'>
                    <button className='btn flex items-center border rounded-lg w-full p-3 gap-3 justify-center'>
                        <FaGithub></FaGithub>
                        <span className='font-medium'>Login With GitHub</span>
                    </button>
                </div>
            </div>
            <div className=''>
                <h1 className='text-3xl font-bold mb-4'>Find On Us</h1>
                <div className='mx-auto mt-3 border rounded-t-lg p-2'>
                    <a href="" className='flex items-center gap-3 font-medium text-[16px]'>
                        <FaFacebookF></FaFacebookF>
                        FaceBook
                    </a>
                </div>
                <div className='mx-auto border-x  p-2'>
                    <a href="" className='flex items-center gap-3 font-medium text-[16px]'>
                        <FaTwitter></FaTwitter>
                        Twitterr
                    </a>
                </div>
                <div className='mx-auto border rounded-b-lg p-2'>
                    <a href="" className='flex items-center gap-3 font-medium text-[16px]'>
                        <FaInstagram></FaInstagram>
                        Instagram
                    </a>
                </div>

            </div>
            <div className='mt-5 bg-slate-200  p-2 rounded-lg space-y-3'>
                <h1 className='text-3xl font-bold'>Q-Zone</h1>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;