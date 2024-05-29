import MaxWidthWrapper from "./components/MaxWIdthWrapper";
import Link from "next/link";

import { Button } from '@/components/ui/button';
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Zap, Gift ,BellPlus,HandCoins} from "lucide-react";

const perks = [
  {
    name: 'Instant Access',
    icon: ArrowDownToLine,
    description: 'Gain immediate access to your assets upon purchase, no waiting necessary.'
  },
  {
    name: 'Instant Delivery',
    icon: Zap,
    description: 'Experience lightning-fast delivery to your inbox, ensuring you can start using your assets right away.'
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: 'Rest easy knowing that every asset undergoes rigorous quality checks by our expert team before being listed.'
  },
  {
    name: 'Exclusive Offers',
    icon: Gift,
    description: 'Enjoy exclusive discounts and offers available only to our loyal customers.'
  },
  {
    name: 'Regular Updates',
    icon: BellPlus,
    description: 'Receive regular updates and new additions to our collection, keeping your assets fresh and up-to-date.'
  },
  {
    name: 'Transparent Pricing',
    icon: HandCoins,
    description: 'Benefit from transparent pricing with no hidden fees or surprises, ensuring you get the most value for your investment.'
  },
]

export default function Home() {
  return (
    <>
   
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Elevate Your Projects with Exceptional <span className='text-primary  '>Digital Resources</span>.</h1>



          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to{' '} <span className='text-primary font-bold'>UX Bazaar</span>, where innovation thrives and excellence is standard. Explore our curated collection of premium digital assets, tailored for your success.</p>


          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
            <Button variant='ghost'>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:grid-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) =>
              <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center mb-[50px]'>
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-secondary">
                    <perk.icon className='w-1/3 h-1/3' />
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className="text-base font-bold text-primary">{perk.name}</h3>
                  <p className='mt-3 text-sm text-muted-foreground'> {perk.description}</p>
                </div>
              </div>
            )}

          </div>


        </MaxWidthWrapper>

      </section>
    </>
  );
}
