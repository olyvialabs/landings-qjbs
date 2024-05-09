import Head from 'next/head';

export const Header = ()=>{return(
  <header className="w-full py-4 bg-white shadow-md">
    <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      {/* Logo and navigation */}
      <div className="flex items-center gap-8">
        <img src="https://quickjobs.app/img/en-logo-beta.svg" alt="Quickjobs Logo" className="h-10" />
        <div className="flex gap-4">
          <a href="/careers" className="text-gray-800 hover:text-orange-500 font-medium">Careers</a>
          <a href="/contact" className="text-gray-800 hover:text-orange-500 font-medium">Contact</a>
          <a href="/privacy" className="text-gray-800 hover:text-orange-500 font-medium">Privacy</a>
          <a href="/faq" className="text-gray-800 hover:text-orange-500 font-medium">FAQ</a>
          <a href="/blog" className="text-gray-800 hover:text-orange-500 font-medium">Blog</a>
        </div>
      </div>
      {/* Login and registration */}
      <div className="flex gap-2">
        <a href="/login" className="bg-transparent text-gray-800 hover:text-orange-500 font-medium px-4 py-2 border border-transparent hover:border-gray-800 rounded transition duration-300 ease-in-out">Log In</a>
        <a href="/register" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out font-medium">Get started</a>
      </div>
    </nav>
  </header>)}
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-700">
      <Head>
        <title>Referral Program Details</title>
      </Head>

      <Header/>
      {/* Main content area with cards */}
      <main className="flex-grow">
  <div className="bg-white px-4 py-8">
    <div className="max-w-xl mx-auto">
      <h2 className="text-lg font-semibold">Connect and Earn</h2>
      <h1 className="text-3xl font-bold mb-4">Referral Program - Join and Earn on Every Transaction</h1>
      <div className="flex justify-between mb-4">
        <button className="bg-black text-white py-2 px-4 rounded">Register</button>
        <button className="bg-transparent border border-black py-2 px-4 rounded">View Program</button>
      </div>
      <p className="text-sm mb-4">
        At Quickjobs, we understand the power of connections and how important referrals are. That is why we implemented a referral reward system.
      </p>
      <h3 className="font-semibold mb-2">Benefits of the Referral Program:</h3>
      <ul className="text-sm list-disc pl-4 mb-4">
        <li>Earn an additional 7.5% commission on each transaction completed through your referral link.</li>
        <li>Strengthen your network as each referral not only expands your professional circle but also benefits from integrated services within Quickjobs.</li>
        <li>Maximize your professional impact and earnings in the region.</li>
      </ul>
      <h3 className="font-semibold mb-2">How does it work?</h3>
      <p className="text-sm mb-4">
        Each time one of your contacts completes a transaction through Quickjobs, you earn a percentage of the income. 
      </p>
      <p className="text-sm mb-4">This adds up and is credited to your account, constituting an additional income. Earn a 7.5% commission on the total transaction amount directly in your account.</p>

      <p className="text-sm">
        Start earning more today by inviting your contacts to join the referral program. Join now and maximize your professional connections!
      </p>
    </div>
    <div className="flex flex-col items-center justify-center"> 

        <div className="bg-gray-200 mt-8 p-4 text-center w-80">
          <h2 className="font-bold mb-2">Download on iOS / Android</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-black text-white py-2 px-4 rounded">App Store</a>
            <a href="#" className="bg-black text-white py-2 px-4 rounded">Google Play</a>
          </div>
        </div>
      </div>
    </div>
</main>




      
      <footer className="bg-white text-center border-t border-orange-500">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo and Text Section */}
    <div className="flex items-center">
      <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-8" />
      <div className="flex flex-col text-left">
        <div className="flex space-x-4 mb-2">
          <a href="/about" className="text-gray-800 hover:text-orange-500 font-medium">About</a>
          <a href="/blog" className="text-gray-800 hover:text-orange-500 font-medium">Blog</a>
          <a href="/contact" className="text-gray-800 hover:text-orange-500 font-medium">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="/terms" className="text-gray-800 hover:text-orange-500 font-medium">Terms</a>
          <a href="/privacy" className="text-gray-800 hover:text-orange-500 font-medium">Privacy</a>
          <a href="/faq" className="text-gray-800 hover:text-orange-500 font-medium">FAQ</a>
        </div>
      </div>
    </div>
    {/* Social Media Section */}
    <div className="flex items-center space-x-4">
      <span className="text-gray-800 font-medium">Follow us</span>
      <a href="https://twitter.com/yourusername" className="text-gray-800 hover:text-orange-500 font-medium">
        <img src="/path-to-twitter-icon.png" alt="Twitter" className="h-6" />
      </a>
      <a href="https://instagram.com/yourusername" className="text-gray-800 hover:text-orange-500 font-medium">
        <img src="/path-to-instagram-icon.png" alt="Instagram" className="h-6" />
      </a>
    </div>
  </div>
</footer>





    </div>
  );
}
