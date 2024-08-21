import activeBtn from '@/../public/active.png'
import inactiveBtn from '@/../public/inactive.png'
import Image from 'next/image'

const CustomDot = ({ active, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="h-[10px] w-[10px] mx-3 "/>
      { <Image src={ active ? activeBtn : inactiveBtn} alt={ active ? 'active' : 'inactive'}/>}
    </div>
  )
}

export default CustomDot