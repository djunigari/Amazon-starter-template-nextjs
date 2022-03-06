import Image from "next/image"

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center">
        <di>
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </di>
      </div>
      {/* Bottom NAv */}
      <div>

      </div>
    </header>
  )
}

export default Header