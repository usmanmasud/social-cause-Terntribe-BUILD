function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto text-center">
                <p>Follow us:</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="hover:text-white">Facebook</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                </div>
                <p className="mt-4">&copy; 2025 Social Cause Platform. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer