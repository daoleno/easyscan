export default function Nav() {
  return (
    <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 max-w-screen-lg lg:p-0">
      <a className="flex items-center" href="/">
        <img className="h-10 w-auto sm:h-12 my-2" src="/logo.svg" alt="" />
      </a>

      <div className="hidden lg:flex md:ml-10 items-end">
        <a
          href="https://github.com/daoleno/easyscan"
          className="font-medium py-2 px-3 rounded-lg border-2 border-gray-700 bg-transparent text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-gray-50 transition duration-150 ease-in-out"
        >
          Github
        </a>
      </div>
    </nav>
  );
}
