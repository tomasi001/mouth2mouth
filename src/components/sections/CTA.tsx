import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  variant?: "default" | "highlight";
}

export function CTA({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  variant = "default",
}: CTAProps) {
  return (
    <section
      className={cn(
        "w-full py-12 md:py-24",
        variant === "highlight" ? "bg-primary text-primary-foreground" : "",
        className
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="max-w-[700px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button
              asChild
              size="lg"
              className={cn(
                "w-full",
                variant === "highlight"
                  ? "bg-background text-foreground hover:bg-background/90"
                  : ""
              )}
            >
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
