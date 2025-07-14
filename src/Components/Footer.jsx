import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Amzad Hossain. All rights reserved.
                    </p>
                    <a
                        href="#hero"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
