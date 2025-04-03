import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HardwareSupport() {
  return (
    <section className="py-20">
      <div className="nyron-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Supports Hardware Based{" "}
              <span className="text-nyron-blue">Mouse Emulation</span>
            </h2>
            <p className="text-zinc-300 mb-6">
              To ensure top security, Nyron supports Hardware-Based Mouse Emulation, allowing invisible mouse movements to third-party systems. The hardware device is spoofed to appear as a standard mouse, ensuring safe and future-proof usage. While Nyron works perfectly without hardware, adding a device provides extra stability and protection against future detection methods. Prebuilt firmware, detailed setup guides, and support for any third-party firmware compatible with KmBox B+ commands are included for seamless integration with Nyron.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-nyron-blue text-nyron-blue hover:bg-nyron-blue/10"
            >
              <Link href="/products">
                More Info
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
          <div className="w-full md:w-1/2 flex justify-center space-x-6">
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
              <h3 className="text-lg font-medium text-white mb-3 text-center">KMBOX NET</h3>
              <div className="flex justify-center">
                <div className="bg-nyron-blue/10 rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1ea0d6"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="2" x2="9" y2="4"></line>
                    <line x1="15" y1="2" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="22"></line>
                    <line x1="15" y1="20" x2="15" y2="22"></line>
                    <line x1="20" y1="9" x2="22" y2="9"></line>
                    <line x1="20" y1="14" x2="22" y2="14"></line>
                    <line x1="2" y1="9" x2="4" y2="9"></line>
                    <line x1="2" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
              <h3 className="text-lg font-medium text-white mb-3 text-center">ARDUINO LEONARDO</h3>
              <div className="flex justify-center">
                <div className="bg-nyron-blue/10 rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1ea0d6"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                    <line x1="7" y1="5" x2="7" y2="19"></line>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="17" y1="5" x2="17" y2="19"></line>
                    <circle cx="5" cy="7.5" r="1"></circle>
                    <circle cx="10" cy="7.5" r="1"></circle>
                    <circle cx="15" cy="7.5" r="1"></circle>
                    <circle cx="20" cy="7.5" r="1"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
