import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Mail, Github, Linkedin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  budget: z.string().min(1, "Please select a budget range"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide more details about your project")
});

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      projectType: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <SectionLabel>CONTACT</SectionLabel>
              <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
                Let's build something.
              </h1>
              <p className="text-xl text-muted-foreground font-sans max-w-md mb-10">
                I work with businesses to build software that solves operational problems and creates new revenue streams.
              </p>

              <div className="bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-full px-4 py-3 inline-flex items-center gap-3 mb-12">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-sm font-mono text-secondary">
                  Currently available for new projects
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:Jiteshbabani808@gmail.com" className="flex flex-col gap-2 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                  <Mail className="text-primary" size={24} />
                  <span className="font-mono text-sm text-foreground mt-2">Email</span>
                  <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">Jiteshbabani808@gmail.com</span>
                </a>
                
                <a href="https://wa.me/919165759300" target="_blank" rel="noreferrer" className="flex flex-col gap-2 p-6 rounded-xl bg-card border border-border hover:border-[#14B8A6]/50 transition-colors group">
                  <MessageCircle className="text-secondary" size={24} />
                  <span className="font-mono text-sm text-foreground mt-2">WhatsApp</span>
                  <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">+91 91657 59300</span>
                </a>
                
                <a href="https://www.linkedin.com/in/jiteshbabani/" target="_blank" rel="noreferrer" className="flex flex-col gap-2 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                  <Linkedin className="text-primary" size={24} />
                  <span className="font-mono text-sm text-foreground mt-2">LinkedIn</span>
                  <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">in/jiteshbabani</span>
                </a>
                
                <a href="https://github.com/letschillwith-JB/" target="_blank" rel="noreferrer" className="flex flex-col gap-2 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                  <Github className="text-primary" size={24} />
                  <span className="font-mono text-sm text-foreground mt-2">GitHub</span>
                  <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">letschillwith-JB</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden"
            >
              {isSubmitted ? (
                <div className="absolute inset-0 bg-card z-10 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-foreground mb-4">Message Received</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out. I'll review your project details and get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                    className="font-mono"
                  >
                    Send another message
                  </Button>
                </div>
              ) : null}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background border-border focus-visible:ring-primary h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-background border-border focus-visible:ring-primary h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border focus:ring-primary h-12">
                                <SelectValue placeholder="Select a range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              <SelectItem value="under-50k">Under ₹50K</SelectItem>
                              <SelectItem value="50k-2l">₹50K – ₹2L</SelectItem>
                              <SelectItem value="2l-5l">₹2L – ₹5L</SelectItem>
                              <SelectItem value="5l-plus">₹5L+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border focus:ring-primary h-12">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              <SelectItem value="booking">Booking Platform</SelectItem>
                              <SelectItem value="analytics">Analytics Dashboard</SelectItem>
                              <SelectItem value="website">Business Website</SelectItem>
                              <SelectItem value="mobile">Mobile App</SelectItem>
                              <SelectItem value="automation">Automation Tool</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about the problem you're trying to solve..." 
                            className="min-h-[150px] resize-none bg-background border-border focus-visible:ring-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg rounded-md group mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}