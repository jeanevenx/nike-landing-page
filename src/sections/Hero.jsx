import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import {statistics } from '../constants';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
        justify-center min-h-screen
        gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center 
        items-start w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]
          max-sm:leading-[82] font-bold"
        >
          <span>The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          Shoes
          </h1>
          <p>
            Discover stylish Nike arrivals, quality comfort, 
            and innovation to help you look and feel your best.
          </p>
          <Button 
            label="Shop now"
            iconUrl={arrowRight}
          />

          <div className="flex justify-start items-start flex-wrap
            w-full mt-20 gap-16">
            {statistics.map((statistic) => 
              <div key={statistic.label}>
                <p>{statistic.value}</p>
                <p>{statistic.label}</p>
              </div>
            )}
          </div>

      </div>
    </section>
  )
}

export default Hero