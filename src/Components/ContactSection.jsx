import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                },
                PUBLIC_KEY
            )

            if (result.status === 200) {
                toast({
                    title: "Message sent successfully!",
                    description: "Thank you for your message. I'll get back to you soon.",
                })

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                })
            }
        } catch (error) {
            console.error("EmailJS Error:", error)
            toast({
                title: "Failed to send message",
                description: "Please try again or contact me directly via email.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new
                    opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-start">Contact Information</h3>

                        <div className="space-y-6">
                            <ContactItem
                                icon={<Mail className="h-6 w-6 text-primary" />}
                                label="Email"
                                value="amzadhrakib570@gmail.com"
                                link="mailto:amzadhrakib570@gmail.com"
                            />
                            <ContactItem
                                icon={<Phone className="h-6 w-6 text-primary" />}
                                label="Phone"
                                value="01821988393"
                                link="tel:01821988393"
                            />
                            <ContactItem
                                icon={<MapPin className="h-6 w-6 text-primary" />}
                                label="Location"
                                value="Mirpur, Dhaka, Bangladesh"
                            />
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-start">Connect With Me</h4>
                            <div className="flex space-x-4 ">
                                {[Linkedin, Twitter, Instagram, Twitch].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        <Icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {["name", "email"].map((field) => (
                                <div key={field}>
                                    <label htmlFor={field} className="block text-sm font-medium mb-2">
                                        {field === "name" ? "Your Name" : "Your Email"}
                                    </label>
                                    <input
                                        type={field === "email" ? "email" : "text"}
                                        id={field}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder={field === "email" ? "john@gmail.com" : "John Doe"}
                                    />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


const ContactItem = ({ icon, label, value, link }) => (
    <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-primary/10">{icon}</div>
        <div>
            <h4 className="font-medium">{label}</h4>
            {link ? (
                <a href={link} className="text-muted-foreground hover:text-primary transition-colors">
                    {value}
                </a>
            ) : (
                <span className="text-muted-foreground">{value}</span>
            )}
        </div>
    </div>
)
