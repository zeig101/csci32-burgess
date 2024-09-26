'use client'
import { Button } from '@repo/ui/button'
import { GuessingGameEngineProps } from './page'
import Input from '@repo/ui/input'
import { useState } from 'react'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'

export default function RandomNumberGame({ randomNumber, endGame, maxGuessCount }: GuessingGameEngineProps) {
  const [guessCount, setGuessCount] = useState(1)
  const [feedback, setFeedback] = useState('')
  const [guess, setGuess] = useState(0)
  const [hasWon, setGameOver] = useState(false)

  function submitGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (hasWon || guessCount >= maxGuessCount) {
      setGameOver(true)
    }

    const newGuessCount = guessCount + 1
    setGuessCount(newGuessCount)

    if (guess < randomNumber) {
      setFeedback('Too low')
    } else if (guess > randomNumber) {
      setFeedback('Too high')
    } else if (guess === randomNumber) {
      setFeedback(`You got it right in only ${guessCount} attempt(s)! Was it worth it?`)
      setGameOver(true)
    }

    if (guessCount >= maxGuessCount) {
      setFeedback(`You lose! The number was ${randomNumber}. Better luck next time.`)
      setGameOver(true)
    }
  }

  function onSubmitEndGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGuessCount(0)
    setFeedback('')
    setGameOver(false)
    endGame()
  }
  return (
    <div
      className={`${maxGuessCount - 1 === guessCount ? 'bg-red-100' : ''}
      ${maxGuessCount == guessCount ? 'bg-red-300' : ''}
      ${hasWon ? 'bg-green-500' : ''}
      p-10 rounded-md transition-color`}
    >
      {hasWon ? (
        <form className="flex flex-col gap-4" onSubmit={onSubmitEndGame}>
          <div>{feedback}</div>
          <Button size={Size.LARGE} variant={Variant.TERTIARY}>
            End Game
          </Button>
        </form>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={submitGuess}>
          <Input
            name="guess"
            id="guess"
            type="guess"
            placeholder="Enter your guess"
            value={guess}
            setValue={(newValue) => setGuess(Number(newValue))}
          />
          <div>{feedback}</div>
          <div>Times guessed: {guessCount - 1}</div>
          <Button size={Size.MEDIUM} variant={Variant.PRIMARY}>
            That's what you're going with?
          </Button>
        </form>
      )}
    </div>
  )
}
