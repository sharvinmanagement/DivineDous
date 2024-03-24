import AboutData from '@/Components/AboutData';
import FrontImage from '@/Components/FrontImage';
import Process from '@/Components/Process';
import WhyChooseWe from '@/Components/WhyChooseWe';

export default function Home() {

  return (
    <>
      <div className="">
        <section className=''>
          <FrontImage />
        </section>
        <section className='mt-16 md:mt-10  mb-12'>
          <WhyChooseWe />
        </section>
        <section className='mt-11 md:mt-12  mb-12'>
          <Process />
        </section>
        <section className='mt-10'>
          <AboutData />
        </section>
      </div>
    </>
  );
}
