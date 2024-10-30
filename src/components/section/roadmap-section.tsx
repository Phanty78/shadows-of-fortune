'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, CheckCircle, Clock, Timer } from 'lucide-react'

export default function RoadmapSection() {
  const roadmapItems = [
    {
      title: 'Concept Development',
      description: [
        'Initial game concept defined',
        'Core story elements outlined',
        'Basic game mechanics designed',
        'Initial game assets created',
        'Initial gameplay prototype created',
      ],
      date: 'August 2024',
      status: 'completed',
    },
    {
      title: 'Main Features and alpha Testing',
      description: [
        'Internal testing of core gameplay',
        'Bug fixing and performance optimization',
        'Refinement of game mechanics',
        'Integration of Sonic Blockchain',
        'Integration of NFTs',
      ],
      date: 'September / October 2024',
      status: 'completed',
    },
    {
      title: 'Closed Beta Launch',
      description: [
        'Game launch on Sonic Blockchain testnet',
        'Limited public beta test',
        'Community feedback collection',
        'Final balancing and polishing',
      ],
      date: 'November 2024',
      status: 'in-progress',
    },
    {
      title: 'Add secondary functions ',
      description: [
        'Crafting integration',
        'Marketplace integration',
        'Integration and testing of in-game economy',
        'Performance enhancement',
        'Refinement of game mechanics',
      ],
      date: 'Q4 2024',
      status: 'upcoming',
    },
    {
      title: 'Official Launch',
      description: [
        'Full game release across Sonic blockchain',
        'Marketing campaign kickoff',
        'Post-launch support and updates',
      ],
      date: 'Q1 2025',
      status: 'upcoming',
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <CheckCircle className="w-6 h-6 text-green-500" aria-hidden="true" />
        )
      case 'in-progress':
        return <Clock className="w-6 h-6 text-yellow-500" aria-hidden="true" />
      default:
        return <Timer className="w-6 h-6 text-gray-500" aria-hidden="true" />
    }
  }

  return (
    <section
      id="roadmap"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Development Roadmap
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-red-600" />
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-8 top-8 w-3 h-3 bg-red-600 rounded-full -translate-x-[50%]" />
                <Card className="ml-16 bg-gray-700 border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <CardHeader className="flex flex-row items-center gap-4 bg-gray-800 border-b border-gray-600">
                    <div className="grid gap-1 flex-1">
                      <CardTitle className="text-xl text-red-500">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Calendar
                          className="w-4 h-4 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-400">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full">
                      {getStatusIcon(item.status)}
                      <span className="text-sm capitalize font-medium">
                        {item.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2" role="list">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-gray-300">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
