import proposalImg from '@/../public/proposal.png'
import Image from 'next/image'

const FreeProposal = () => {
  return (
    <div className="relative flex items-center justify-start gap-10 p-10 bg-lightGray rounded-2xl">
      <div className="flex flex-col gap-6 ">
        <h3 className="text-xl font-bold">Let’s make things happen</h3>
        <p className=" max-w-96">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <button className="px-5 py-2 text-sm bg-black text-whiteColor max-w-fit rounded-xl">
        Get your free proposal
        </button>
      </div>
      <Image src={proposalImg} className='absolute right-0 w-72 max-xmd:hidden lg:right-10'/>
    </div>
  )
}

export default FreeProposal