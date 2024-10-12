'use client'
import Input from '@repo/ui/input'
import { Button } from '@repo/ui/button'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { useState } from 'react'

export default function ButtonPage() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  return (
    <div className="p-24">
      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-2">
          <Input value={name} setValue={setName} size={Size.MEDIUM} variant={Variant.PRIMARY} name="name" id="name" />
          <Button onClick={() => alert(`Your name is: ${name}.`)} size={Size.MEDIUM} variant={Variant.PRIMARY}>
            Name
          </Button>
        </div>
        <div className="flex gap-2">
          <Input value={age} setValue={setAge} size={Size.MEDIUM} variant={Variant.SECONDARY} name="age" id="age" />
          <Button onClick={() => alert(`Your age is: ${age} years old.`)} variant={Variant.SECONDARY}>
            Age
          </Button>
        </div>
        <div className="flex gap-2">
          <Input
            value={weight}
            setValue={setWeight}
            size={Size.MEDIUM}
            variant={Variant.TERTIARY}
            name="weight"
            id="weight"
          />
          <Button
            onClick={() => alert(`Your weight is: ${weight} pounds.`)}
            size={Size.MEDIUM}
            variant={Variant.TERTIARY}
          >
            Weight
          </Button>
        </div>
      </div>
    </div>
  )
}
