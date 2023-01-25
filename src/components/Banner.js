import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'


function Banner() {
  return (
    <div className='relative'>

        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />


        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false}showThumbs={false} interval={5000}>
            <div>
                <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/content/GTM/Editorial/0504-AMZN-GNBC-GatewayHero-1500x600_v5._CB669739807_.jpg" alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769_.jpg" alt="" />

            </div>
            <div>
                <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV2/UK-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV69._CB656397523_.jpg" alt="" />

            </div>

        </Carousel>
    </div>
  )
}

export default Banner