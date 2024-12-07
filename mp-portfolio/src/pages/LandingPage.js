
import { Land } from '@/components/Land'
import { TourGuider } from '@/components/TourGuider'

export const LandingPage = ({className , isMobile  } ) => {
  return (
    <div className={`flex flex-col w-screen h-screen mt-auto ${className}`}>
        <Land isMobile={isMobile} />
        <TourGuider  className={' sm:mb-16 md:mb-0'} text="Gelin Bir Gezintiye Çıkalım" />
    </div>
  )
}