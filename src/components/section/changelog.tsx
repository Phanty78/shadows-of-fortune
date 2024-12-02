'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpCircle, BugOff, Calendar, Scale, Wrench } from 'lucide-react'

export default function ChangelogSection() {
  const changelogItems = [
    {
      version: 'v0.2 (Testnet)',
      date: 'November 29, 2024',
      changes: [
        {
          type: 'feature',
          description:
            'Display monsters you can encounter on the move, with appearance chances',
        },
        {
          type: 'feature',
          description:
            'Possibility to encounter enemies while searching a node',
        },
        {
          type: 'feature',
          description: 'Added Discord links on the website and Dapp',
        },
        {
          type: 'feature',
          description:
            'CON point now provides +2 hit points, STR point gives +1 hit point',
        },
        {
          type: 'feature',
          description:
            'Added indicator for items about to break on the world map',
        },
        {
          type: 'balance',
          description:
            'Doubled monster and player hit points to reduce armor impact in combat',
        },
        {
          type: 'balance',
          description: 'Significantly reduced random encounters on edge tiles',
        },
        { type: 'balance', description: 'Stray Dog: +1 HP and +1 STR' },
        { type: 'balance', description: 'Little Zombie: +1 STR' },
        {
          type: 'balance',
          description:
            'Energy regeneration time adjusted from 6h to 8h for a full bar',
        },
        {
          type: 'balance',
          description:
            'Rebalanced overall map difficulty for easier early game for non-combat classes',
        },
        {
          type: 'improvement',
          description: 'Action buttons disabled when action is unavailable',
        },
        {
          type: 'improvement',
          description: 'Improved switch colors in hero selector',
        },
        {
          type: 'improvement',
          description: 'Enhanced display of news section',
        },
        {
          type: 'improvement',
          description: 'Updated Discord server security to limit spam',
        },
        {
          type: 'improvement',
          description: 'Clarified characteristic information',
        },
        {
          type: 'improvement',
          description: 'Added timer for season end on leaderboard page',
        },
        { type: 'bugfix', description: 'Fixed typos related to item repairs' },
        {
          type: 'bugfix',
          description:
            'Corrected statistics display when destroying weapons or armor',
        },
        {
          type: 'bugfix',
          description: 'Resolved panic overflow bug on certain characters',
        },
        {
          type: 'bugfix',
          description: 'Fixed bug preventing some items from being discarded',
        },
      ],
    },
    {
      version: 'v0.1 (Testnet)',
      date: 'November 11, 2024',
      changes: [
        {
          type: 'feature',
          description: 'Added durability on weapons and armor',
        },
        {
          type: 'feature',
          description:
            'Added new repair items: Oil Canister, Screwdriver, Multifunction key',
        },
        {
          type: 'feature',
          description: 'Exclusive armor added: Versus witch hat',
        },
        {
          type: 'feature',
          description:
            'Added possibility to create and play a female character',
        },
        {
          type: 'feature',
          description:
            'Added automatic tracking function for improved map navigation on small screens',
        },
        {
          type: 'feature',
          description: 'Added new enemy: zombie cop, and mini boss: the duke',
        },
        {
          type: 'balance',
          description:
            'Revised calculation formulas for Combat Capacity (CC) and Dodge (DO)',
        },
        {
          type: 'balance',
          description:
            'Reduced difficulty of searching abandoned houses from 15 to 10',
        },
        {
          type: 'balance',
          description:
            'Redefined enemies encountered throughout the map for scalable difficulty',
        },
        {
          type: 'balance',
          description:
            'Overall reduction in strength of stray and zombified dogs',
        },
        {
          type: 'balance',
          description:
            'Left-hand side of map easier, second part much more difficult',
        },
        {
          type: 'improvement',
          description: 'Added ability to throw items from inventory',
        },
        {
          type: 'improvement',
          description:
            'Added modal window for more info on features from statistics screen',
        },
        {
          type: 'improvement',
          description: 'Updated dialogues for clarity and information',
        },
        {
          type: 'improvement',
          description: 'Added monster armor to combat test tool',
        },
        {
          type: 'improvement',
          description: 'Added position marker above hero when map loads',
        },
        {
          type: 'bugfix',
          description:
            'Fixed damage/armor display bug after equipping or unequipping items',
        },
        {
          type: 'bugfix',
          description:
            'Fixed icon positioning problem with active remaining time',
        },
      ],
    },
  ]

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return (
          <ArrowUpCircle className="w-5 h-5 text-blue-500" aria-hidden="true" />
        )
      case 'improvement':
        return <Wrench className="w-5 h-5 text-green-500" aria-hidden="true" />
      case 'bugfix':
        return <BugOff className="w-5 h-5 text-yellow-500" aria-hidden="true" />
      case 'balance':
        return <Scale className="w-5 h-5 text-purple-500" aria-hidden="true" />
      default:
        return (
          <ArrowUpCircle className="w-5 h-5 text-gray-500" aria-hidden="true" />
        )
    }
  }

  return (
    <section
      id="changelog"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
          Changelog
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-red-600" />
            {changelogItems.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-8 top-8 w-3 h-3 bg-red-600 rounded-full -translate-x-[50%]" />
                <Card className="ml-16 bg-gray-700 border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <CardHeader className="flex flex-row items-center gap-4 bg-gray-800 border-b border-gray-600">
                    <div className="grid gap-1 flex-1">
                      <CardTitle className="text-xl text-red-600">
                        {item.version}
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
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4" role="list">
                      {item.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {getChangeIcon(change.type)}
                          <div>
                            <span className="text-sm font-medium text-gray-400 capitalize">
                              {change.type}:{' '}
                            </span>
                            <span className="text-gray-300">
                              {change.description}
                            </span>
                          </div>
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
