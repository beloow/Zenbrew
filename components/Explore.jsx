import Image from "next/image";


const Explore = () => {
  return ( 
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
        <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
            <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
                {/* Item 1 & 2 */}
                <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
                    {/* item 1 */}
                    <div className="relative flex items-start">
                        <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                            <div className="mb-6 flex justify-center items-center">
                                <Image src="/assets/explore/icons/coffee-1.svg" width={56} height={56} alt="coffe image" />
                            </div>
                            <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Mélanges d'espresso riches</h3>
                            <p className="max-w-[400px]">
                                Laissez-vous tenter par les saveurs profondes et robustes de nos mélanges d'espresso 
                                élaborés par des experts. Parfait pour un remontant rapide ou une gâterie tranquille l’après-midi.
                            </p>
                        </div>
                    </div>
                    {/* item 2 */}
                    <div className="relative flex items-start">
                        <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                            <div className="mb-6 flex justify-center items-center">
                                <Image src="/assets/explore/icons/coffee-2.svg" width={56} height={56} alt="coffe image" />
                            </div>
                            <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Café filtre classique</h3>
                            <p className="max-w-[400px]">
                            Savourez le goût réconfortant de notre café filtre classique, infusé à la perfection. 
                            Un choix intemporel pour les amateurs de café qui apprécient la simplicité
                            </p>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className="hidden xl:flex justify-center">
                    <div className="relative w-[322px] h-[580px]">
                        <Image 
                            src="/assets/explore/cup.png" 
                            fill 
                            alt="Cup of coffe" 
                            className="object-cover"
                            quality={100}
                            priority
                            data-scroll
                            data-scroll-speed="0.1"
                        />
                    </div>
                </div>
                {/* Item 3 & 4 */}
                <div className="flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
                    {/* item 3 */}
                    <div className="relative flex items-start">
                        <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                            <div className="mb-6 flex justify-center items-center">
                                <Image src="/assets/explore/icons/coffee-3.svg" width={56} height={56} alt="coffe image" />
                            </div>
                            <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Infusions froides douces</h3>
                            <p className="max-w-[400px]">
                            Rafraîchissez-vous avec nos options d'infusion froide douces et revigorantes. 
                            Idéal pour les journées chaudes où vous avez besoin d’un coup de pouce frais et caféiné
                            </p>
                        </div>
                    </div>
                    {/* item 4 */}
                    <div className="relative flex items-start">
                        <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                            <div className="mb-6 flex justify-center items-center">
                                <Image src="/assets/explore/icons/coffee-4.svg" width={56} height={56} alt="coffe image" />
                            </div>
                            <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Variétés de lattés savoureux</h3>
                            <p className="max-w-[400px]">
                                Découvrez les saveurs riches et crémeuses de nos diverses sélections de lattés. 
                                De la vanille au caramel, nous avons un latte pour tous les goûts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Explore;