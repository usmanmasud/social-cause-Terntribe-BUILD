import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Contact Information */}
                    <div className="mb-6 text-gray-500 md:mb-0 text-center md:text-left">
                        <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
                        <p>Email: usmanmasud260@gmail.com</p>
                        <p>Phone: +2349136335556</p>
                        <p>Kano State, Nigeria</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 p-3 rounded-full hover:bg-blue-500 transition"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 p-3 rounded-full hover:bg-blue-300 transition"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com/usmanmasud7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 p-3 rounded-full hover:bg-pink-400 transition"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 p-3 rounded-full hover:bg-blue-600 transition"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-6 text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Social Cause Platform. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
