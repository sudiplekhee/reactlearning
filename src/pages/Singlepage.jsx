import Navbar from "../components/Navbar"

function Singlepage(){
    return(
        <>
<Navbar/>

<div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
            <span className="text-gray-600 dark:text-gray-300">$29.99</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
          <div className="flex items-center mt-2">
            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
          <div className="flex items-center mt-2">
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
          </div>
        </div>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
            lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
            ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
            sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  {/* source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html */}
  <div className="text-center p-10">
    <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
    <h1 className="text-3xl">Tailwind CSS</h1>
  </div>
  {/* ✅ Grid Section - Starts Here 👇 */}
  <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {/*   ✅ Product card 1 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 1 - Ends Here  */}
    {/*   ✅ Product card 2 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 2- Ends Here  */}
    {/*   ✅ Product card 3 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 3 - Ends Here  */}
    {/*   ✅ Product card 4 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 4 - Ends Here  */}
    {/*   ✅ Product card 5 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 5 - Ends Here  */}
    {/*   ✅ Product card 6 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 6 - Ends Here  */}
  </section>
  {/* 🛑 Grid Section - Ends Here */}
  {/* credit */}
  <div className="text-center py-10 px-10">
    <h2 className="font-bold text-2xl md:text-4xl mb-4">Thanks to <a href="https://unsplash.com/@nixcreative" className="underline font-black">Tyler Nix</a> for those AMAZING product images!</h2>
  </div>
  {/* Support Me 🙏🥰 */}
</div>


</>
    )
}
export default Singlepage