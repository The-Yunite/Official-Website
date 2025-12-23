import { ExternalLink } from "lucide-react"
import Link from "next/link"
import DynamicLucideIcon from "../DynamicLucideIcon"

export const GridComponent = ({ title, cards, style}: any) => {
  return (
    <section className="">
      <div className="w-full mx-auto md:w-5/6 mb-28">
        <h2 className="text-3xl font-bold text-black text-center mb-14">{title}</h2>
        <div className={style || "grid md:grid-cols-3 gap-12 text-left"}>
          {cards?.map((card: any, i: number) => (
            <div key={i} className="rounded-3xl bg-white/80 border border-gray-200 shadow-md p-10 transition-transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#ff6b35]/30">
              <div className="text-black mb-4">
                {card.icon && (
                  <DynamicLucideIcon
                  iconName={card.icon}
                  size={42}
                  // color="" 
                  className="text-black mb-4"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{card.title}</h3>
              <p className="text-gray-700 text-sm">{card.description}</p>
              {card.action.href && (
                <Link href={card.action.href} className="mt-4 inline-flex items-center gap-2 text-[#ff6b35] font-semibold hover:underline">{card.action.label}<ExternalLink /></Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}