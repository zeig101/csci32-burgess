'use client'
import { Button } from '@repo/ui/button'
import { GuessingGameMenuProps } from './page'
import { FormEventHandler, useState } from 'react'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { Input } from '@repo/ui/input'

export default function RandomNumberGameMenu({ startGame }: GuessingGameMenuProps) {
  const [showSettings, setShowSettings] = useState(false)

  function onSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const min = Number(data.get('min'))
    const max = Number(data.get('max'))
    const maxGuessCount = Number(data.get('maxGuessCount'))
    startGame({ min, max, maxGuessCount })
    setShowSettings(false)
  }
  return (
    <div className="flex flex-col gap-4">
      {showSettings ? (
        <div className="flex flex-col gap-4">
          <header>
            <h1 className="text-xl font-bold">
              Enter your minimum and maximum numbers for the game, as well as the maximum guess count:
            </h1>
          </header>
          <form className="flex flex-col gap-5" onSubmit={onSubmitSettings}>
            <Input defaultValue={0} type="number" placeholder={'Minimum guess value'} name="min" id="min" />
            <Input defaultValue={10} type="number" placeholder={'Maximum guess value'} name="max" id="max" />
            <Input
              defaultValue={3}
              type="number"
              placeholder={'Alotted Guesses'}
              name="maxGuessCount"
              id="maxGessCount"
            />
            <Button size={Size.LARGE} variant={Variant.SECONDARY}>
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <header className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Guess! That! Number!</h1>
            <p className="text-red-700">
              Absolutely nothing is at stake other than whatever you&apos;re ignoring to waste time playing this game!
            </p>
            <p>I hope you can deal with the crushing weight of your procrastination!</p>
          </header>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setShowSettings(true)
            }}
          >
            <Button size={Size.MEDIUM} variant={Variant.TERTIARY}>
              Let&apos;s play the game!
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}
