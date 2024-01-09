import Link from "next/link";
const Header =()=>{
    return(
        <div className="bg-slate-700 text-white flex flex-1 px-4 py-5 justify-center items-center gap-5">
        <Link href="/ " className="text-white text-2xl  font-black">RESUME</Link>

        <div className="flex gap-3">
          <Link href="/techSkill " className="text-white font-mono">Tech-Skill</Link>
          <Link href="/proExp " className="text-white font-mono">Pro-EXperience</Link>
          <Link href="/about " className="text-white font-mono">About</Link>
          <Link href="/contact " className="text-white font-mono">Contact</Link>
        </div>
      </div>
    )

}
export default Header