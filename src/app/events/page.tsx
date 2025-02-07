import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  const years = [
    { year: "2024", active: true },
    { year: "2023", active: false },
    { year: "2022", active: false },
    { year: "2021", active: false },
  ]

  const events = [
    {
      date: "24",
      day: "Thursday",
      month: "December",
      name: "Event Name 1",
      description: "Short Description",
      href: "/event-1",
    },
    {
      date: "2",
      day: "Wednesday",
      month: "December",
      name: "Event Name 2",
      description: "Short Description",
      href: "/event-2",
    },
    {
      date: "18",
      day: "Friday",
      month: "November",
      name: "Event Name 3",
      description: "Short Description",
      href: "/event-3",
    },
    {
      date: "14",
      day: "Saturday",
      month: "November",
      name: "Event Name 4",
      description: "Short Description",
      href: "/event-4",
    },
    {
      date: "20",
      day: "Monday",
      month: "December",
      name: "Event Name 5",
      description: "Short Description",
      href: "/event-5",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5e6d3] text-[#2C1810]">
      <div className="max-w-[1450px] mx-auto px-4 py-24">
        <div className="border-b border-black pb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-serif">Past events</h1>
            <div className="flex gap-2">
              {years.map((item) => (
                <Button
                  key={item.year}
                  variant={item.active ? "default" : "outline"}
                  className={`rounded-full px-4 ${
                    item.active
                      ? "bg-[#2C1810] text-white hover:bg-[#2C1810]/90"
                      : "border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810]/10"
                  }`}
                >
                  {item.year}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {events.reduce((acc: any, event, index, array) => {
            if (index === 0 || array[index - 1].month !== event.month) {
              acc.push(
                <h2 key={`month-${event.date}`} className="text-xl font-medium mt-8 first:mt-0">
                  {event.month}
                </h2>,
              )
            }
            acc.push(
              <Link
                key={event.href}
                href={event.href}
                className="border border-black rounded-md p-6 flex items-center justify-between hover:bg-black/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center w-20">
                    <div className="text-4xl font-bold">{event.date}</div>
                    <div className="text-sm">{event.day}</div>
                  </div>
                  <div className='w-0 h-16 border border-black' />
                  <div>
                    <h3 className="text-xl font-medium">{event.name}: {event.description}</h3>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                  <PlusIcon className="w-4 h-4" />
                </div>
              </Link>,
            )
            return acc
          }, [])}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page