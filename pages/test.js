import Header from "../components/header2"

export default function Test() {
  return(
    <div className="text-gray-50 bg-gray-700 h-screen w-full md:w-1/2 mix-blend-darken">
      <Header />
      <form className="m-4 flex">
        <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
      <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
    </form>
  </div>
  )
}