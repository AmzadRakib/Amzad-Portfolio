import { ArrowDown } from "lucide-react"
import HeroImg from '../assets/final-pro.jpg'

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-6xl mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Amzad</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Hossain</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
                            Hey there! I'm a passionate Front-End Web Developer and Shopify Developer. I love turning ideas into
                            beautiful, functional websites using HTML, CSS, Tailwind, JavaScript, and React. I also work with Shopify
                            to build and customize eCommerce stores that not only look great but also perform well.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-in-delay-2">
                        <div className="relative">
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                                <img
                                    src={HeroImg}
                                    alt="Amzad Hossain - Front-End Developer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse-subtle"></div>
                            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}
