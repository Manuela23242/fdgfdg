import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UniqueUI() {
  return (
    <section className="py-20 bg-zinc-900/30">
      <div className="nyron-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Image
              src="/images/nyron-ai.png"
              alt="Nyron AI Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border border-zinc-800"
            />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6">
              Unique <span className="text-nyron-blue">UI</span>
            </h2>
            <p className="text-zinc-300 mb-6">
              Clean and user-friendly interface that makes it easy for you to understand how to configure settings to your liking. We provide plenty of customizable/unique features and try to implement new features based on customer suggestions for future updates as soon as possible.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-nyron-blue text-nyron-blue hover:bg-nyron-blue/10"
            >
              <Link href="/products">
                See All Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
