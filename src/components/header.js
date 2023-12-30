import Link from 'next/link'; // Import the Link component from Next.js

function Header() {
    return (
        <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Next Js</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a href='/'>Home</a></li>
            <li><a href='/blog'>Blog</a></li>
            <li><a href=''>Sign In</a></li>
            <li><a href=''>Sign Out</a></li>
          </ul>
        </div>
      </div>
    )
}
export default Header;