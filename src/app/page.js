import AboutData from '@/Components/AboutData';
import FrontImage from '@/Components/FrontImage';
import WhyChooseWe from '@/Components/WhyChooseWe';

export default function Home() {

  return (
    <>
      <div className="">
      <section className=''>
      <FrontImage/>
      </section>
      
      <section className='mt-20 md:mt-28 lg:mt-28 mb-16'>
        <WhyChooseWe/>
      </section>
      <section className='mt-10'>
      <AboutData/>
      </section>
       
       
       
      </div>
    </>
  );
}
