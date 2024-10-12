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
  const [hasLost, setGameLost] = useState(false)

  function submitGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (guess === randomNumber) {
      setFeedback(`You got it right in only ${guessCount} attempt(s)! Was it worth it?`)
      setGameOver(true)
      return
    }

    const newGuessCount = guessCount + 1
    setGuessCount(newGuessCount)

    if (guess < randomNumber) {
      setFeedback('Too low')
    } else if (guess > randomNumber) {
      setFeedback('Too high')
    }

    if (guessCount >= maxGuessCount) {
      setFeedback(`You lose! The number was ${randomNumber}. Better luck next time.`)
      setGameLost(true)
    }
  }

  function onSubmitEndGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGuessCount(0)
    setFeedback('')
    setGameOver(false)
    setGameLost(false)
    endGame()
  }

  return (
    <div
      className={`${maxGuessCount - 1 === guessCount && !hasWon ? 'bg-red-100' : ''}
      ${maxGuessCount == guessCount && !hasWon ? 'bg-red-300' : ''}
      ${hasWon ? 'bg-green-500' : ''}
      ${hasLost ? 'bg-red-500' : ''}
      p-10 rounded-md transition-color`}
    >
      {hasWon || hasLost ? (
        <form className="flex flex-col gap-4" onSubmit={onSubmitEndGame}>
          <div>{feedback}</div>
          <Button size={Size.LARGE} variant={Variant.TERTIARY}>
            {hasWon ? 'End Game' : 'Play Again'}
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
            That&apos;s what you&apos;re going with?
          </Button>
        </form>
      )}
    </div>
  )
}
