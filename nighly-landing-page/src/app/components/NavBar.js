export default function NavBar() {
  return (
    <div className="navbar !p-5 bg-base-100 shadow-sm border-b-3 border-primary">
      {/* Left logo */}
      <div className="justify-start">
        <a className="btn btn-ghost text-xl">Nightly Landing</a>
      </div>

      {/* Center menu */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal font-bold gap-6">
          <li className="btn btn-primary rounded-box !p-2 btn-active"><a href="#">Home</a></li>
          <li className="btn btn-secondary !p-2 rounded-box"><a href="#">About</a></li>
          <li className="btn btn-secondary !p-4 rounded-box"><a href="#">Services</a></li>
          <li className="btn btn-secondary !p-4 rounded-box"><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Right dropdown */}
      <div className="justify-end">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-accent !p-2 rounded-box font-bold">Theme</summary>
          <ul className="dropdown-content bg-base-300 rounded-box w-52 p-2 shadow-2xl z-[1]">
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="default" aria-label="Default (Halloween)" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="forest" aria-label="Forest" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="dracula" aria-label="Dracula" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="black" aria-label="Black" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="night" aria-label="Night" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="sunset" aria-label="Sunset" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="synthwave" aria-label="Synthwave" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="lofi" aria-label="Lofi" />
            </li>
            <li>
              <input type="radio" name="theme" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" value="luxury" aria-label="Luxury" />
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
