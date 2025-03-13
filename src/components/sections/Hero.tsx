import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
  className?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  align?: "center" | "left";
}

export function Hero({
  title,
  description,
  className,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  align = "center",
}: HeroProps) {
  return (
    <section
      className={cn(
        "w-full py-12 md:py-24 lg:py-32 space-y-4 md:space-y-8",
        className
      )}
    >
      <div
        className={cn(
          "container px-4 md:px-6",
          align === "center" ? "text-center mx-auto" : "text-left"
        )}
      >
        <div
          className={cn(
            "space-y-4",
            align === "center" ? "mx-auto max-w-[800px]" : ""
          )}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            style={align === "center" ? { margin: "0 auto" } : {}}
          >
            {description}
          </p>
          {(buttonText || secondaryButtonText) && (
            <div
              className={cn(
                "flex gap-4 mt-6",
                align === "center" ? "justify-center" : "justify-start",
                align === "center"
                  ? "flex-col sm:flex-row"
                  : "flex-col sm:flex-row"
              )}
            >
              {buttonText && buttonLink && (
                <Button asChild size="lg">
                  <Link href={buttonLink}>{buttonText}</Link>
                </Button>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
